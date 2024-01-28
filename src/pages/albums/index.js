import React, {useRef} from 'react';
import '../globalPageStyle.css';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import Block from '../../components/Block';
import Modal from '../../components/modal';
import axios from 'axios';
import {useState, useEffect} from 'react';

const baseUrl = process.env.REACT_APP_BASE_URL;

function Albums() {
  const [dataBackUp, setDataBackUp] = useState(null);
  const [formValue, setFormValue] = useState({
    title: '',
    artist: '',
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [artisteName, setArtisteName] = useState(null);
  const callRef = useRef(null);

  useEffect(() => {
    // Effectuez une requête GET vers l'API
    axios
      .get(`${baseUrl}/albums`)
      .then(response => {
        // console.log(response.data);
        // Mettez à jour l'état avec les données de l'API
        setData(response.data);
        setDataBackUp(response.data);
      })
      .catch(error => {
        console.error(
          "Erreur lors de la récupération des données de l'API:",
          error,
        );
      });

    //Effectuer une requete GET vers l'API pour recuperer les noms des artistes
    axios
      .get(`${baseUrl}/artistes?fields=name`)
      .then(response => {
        // console.log(response.data);
        // Sort the array alphabetically based on the 'name' property
        const sortedData = response.data.slice().sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();

          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });

        setArtisteName(sortedData);
      })
      .catch(error => {
        console.error(
          "Erreur lors de la récupération des données de l'API:",
          error,
        );
      });
  }, []);

  useEffect(() => {
    if (input.length > 0) {
      setIsLoading(true);
      clearTimeout(callRef.current);
      callRef.current = setTimeout(() => {
        axios
          .get(`${baseUrl}/albums`)
          .then(response => {
            setIsLoading(false);
            const filteredData = response.data.filter(elmt =>
              elmt.title.toLowerCase().includes(input.toLowerCase()),
            );
            setData(filteredData);
          })
          .catch(err => {
            setIsLoading(false);
            console.error(
              "Erreur lors de la récupération des données de l'API pour la recherche",
              err,
            );
          });
      }, 300);
    } else {
      setData(dataBackUp);
    }
  }, [input]);

  const handleSelectChange = event => {
    setFormValue(prev => ({
      ...prev,
      artist: event.target.value,
    }));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${baseUrl}/albums`, formValue)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la creation d'un album", error);
      });

    // Réinitialiser le champ de fichier après l'envoi
    setFormValue({
      title: '',
      artist: '',
    });
    closeModal();
  };
  return (
    <div className="pageContainer">
      <div className="container">
        <div className="miniHeader">
          <div className="searchBlock">
            <input
              type="search"
              className="input"
              placeholder="Votre recherce ici"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </div>
          <div className="addSection">
            <div onClick={openModal}>
              <FontAwesomeIcon icon={faPlusCircle} className="icon" />
              <span>Ajouter album</span>
            </div>
          </div>
        </div>

        <div className="body">
          {data && isLoading !== true ? (
            data.map(album => <Block type="album" data={album} />)
          ) : (
            <p>Chargement...</p>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Ajouter un album">
        <form onSubmit={handleSubmit}>
          <div className="formController">
            <input
              type="text"
              placeholder="Titre"
              value={formValue.title}
              onChange={e => {
                setFormValue(prev => ({
                  ...prev,
                  title: e.target.value,
                }));
              }}
            />
          </div>
          <div className="formController">
            <select
              name="artiste"
              onChange={e => {
                handleSelectChange(e);
              }}>
              <option value="">Choisir un artiste</option>
              {artisteName ? (
                artisteName.map((item, index) => (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                ))
              ) : (
                <option>chargement...</option>
              )}
            </select>
          </div>
          <div className="formController">
            <button type="submit">Ajouter</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

// function handleFile(file) {
//   const allowedExtensions = ['png', 'jpg', 'jpeg'];
//   const fileExtension = file.name.split('.').pop().toLowerCase();

//   if (!allowedExtensions.includes(fileExtension)) {
//     // Gérer le cas où l'extension n'est pas autorisée
//     alert(
//       'Veuillez sélectionner un fichier avec une extension PNG, JPG ou JPEG.',
//     );
//     return;
//   }
// }

export default Albums;
