import React, {useRef} from 'react';
import '../globalPageStyle.css';
import Block from '../../components/Block';
import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Modal from '../../components/modal';

const baseUrl = process.env.REACT_APP_BASE_URL;

function Artistes() {
  const [dataBackUp, setDataBackUp] = useState(null);
  const [data, setData] = useState(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const callRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
  });

  useEffect(() => {
    // Effectuez une requête GET vers l'API
    axios
      .get(`${baseUrl}/artistes`)
      .then(response => {
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
  }, []);

  useEffect(() => {
    if (input.length > 0) {
      setIsLoading(true);
      clearTimeout(callRef.current);
      callRef.current = setTimeout(() => {
        axios
          .get(`${baseUrl}/artistes`)
          .then(response => {
            setIsLoading(false);
            const filteredData = response.data.filter(elmt =>
              elmt.name.toLowerCase().includes(input.toLowerCase()),
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

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${baseUrl}/artistes`, formValue)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la creation d'un artiste", error);
      });

    // Réinitialiser le champ de fichier après l'envoi
    setFormValue({
      name: '',
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
              <span>Ajouter Artiste</span>
            </div>
          </div>
        </div>

        <div className="body">
          {data && isLoading !== true ? (
            data.map(artiste => (
              <Block type="artiste" data={artiste} key={artiste._id} />
            ))
          ) : (
            <p>Chargement...</p>
          )}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Ajouter un artiste">
        <form onSubmit={handleSubmit}>
          <div className="formController">
            <input
              type="text"
              placeholder="Nom de l'artiste"
              value={formValue.name}
              onChange={e => {
                setFormValue(prev => ({
                  ...prev,
                  name: e.target.value,
                }));
              }}
            />
          </div>
          <div className="formController">
            <button type="submit">Ajouter</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Artistes;
