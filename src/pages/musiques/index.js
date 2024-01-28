import React, {useEffect, useRef} from 'react';
import '../globalPageStyle.css';
import Block from '../../components/Block';
import musique from '../../assets/musique.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPauseCircle,
  faPlayCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/modal';
import {useState} from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

function Musiques() {
  const [file, setFile] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [audios, setAudios] = useState([]);
  const [dataBackUp, setDataBackUp] = useState(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const callRef = useRef(null);
  const [artisteName, setArtisteName] = useState(null);

  const audioControRef = useRef(null);

  useEffect(() => {
    //Effectuez une requete GET vers l'API pour recuperer les audios
    axios
      .get(`${baseUrl}/audios`)
      .then(response => {
        let arrayMusique = [];
        response.data.forEach(audio => {
          audio['isPlaying'] = false;

          let newUrlAudio =
            'https://d366vhzgi36hze.cloudfront.net' + audio.urlAudio.slice(41);
          audio.urlAudio = newUrlAudio;

          arrayMusique.push(audio);
        });

        console.log('audios', arrayMusique);
        setAudios(response.data);
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
      .get(`${baseUrl}/artistes?fields=name,_id`)
      .then(response => {
        console.log(response.data);
        setArtisteName(response.data);
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
          .get(`${baseUrl}/audios`)
          .then(response => {
            setIsLoading(false);
            const filteredData = response.data.filter(elmt =>
              elmt.title.toLowerCase().includes(input.toLowerCase()),
            );
            setAudios(filteredData);
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
      setAudios(dataBackUp);
    }
  }, [input]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!file) {
      // Gérer le cas où aucun fichier n'a été sélectionné
      return;
    }

    // Vérifier l'extension du fichier
    const allowedExtensions = ['mp3', 'wav', 'ogg'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      // Gérer le cas où l'extension n'est pas autorisée
      alert(
        'Veuillez sélectionner un fichier avec une extension MP3, WAV ou OGG.',
      );
      return;
    }

    // Créer un nouvel objet FormData
    const formData = new FormData();

    // Ajouter le fichier à FormData
    formData.append('file', file);

    console.log(formData);

    // Envoyer formData au serveur ou effectuer d'autres opérations
    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData,
    // });

    // Réinitialiser le champ de fichier après l'envoi
    setFile(null);
  };

  // Function to toggle the isPlaying property of a specific object by id
  const toggleIsPlaying = (id, urlAudio = null) => {
    const updatedMusiques = audios.map(item => {
      if (item._id === id) {
        if (item.isPlaying) {
          audioControRef.current.pause();
          return {...item, isPlaying: false};
        } else {
          audioControRef.current.src = urlAudio;
          audioControRef.current.play();

          return {...item, isPlaying: true};
        }
      } else {
        return {...item, isPlaying: false};
      }
    });

    //update the state with the new array
    setAudios(updatedMusiques);
  };
  const dumStyle = {
    display: 'none',
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
              <span>Ajouter musique</span>
            </div>
          </div>
        </div>

        <div className="body">
          <audio ref={audioControRef} style={dumStyle} controls>
            <source src="" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          {audios && isLoading !== true ? (
            audios.map((audio, index) => (
              <div className="blockContainer">
                <div className="block">
                  <img src={musique} alt="" />
                  <div className="desc">
                    <div className="audioControl">
                      <FontAwesomeIcon
                        icon={audio.isPlaying ? faPauseCircle : faPlayCircle}
                        className="icon"
                        onClick={() => {
                          toggleIsPlaying(audio._id, audio.urlAudio);
                        }}
                      />
                    </div>
                    <p className="name">{audio.title}</p>
                    <div className="sousDesc">
                      <p className="author">Maitre gims</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Chargement...</p>
          )}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Ajouter une Musique">
        <form onSubmit={handleSubmit}>
          <div className="formController">
            <input
              type="file"
              name="file"
              placeholder="Choisir le fichier"
              accept=".mp3, .wav, .ogg"
              onChange={handleFileChange}
            />
          </div>
          <div className="formController">
            <select name="artistName">
              <option value="">Choisir un Artiste</option>
              {artisteName ? (
                artisteName.map((item, index) => (
                  <option value={item._id}>{item.name}</option>
                ))
              ) : (
                <option>chargement...</option>
              )}
            </select>
          </div>
          <div className="formController">
            <button type="submit">Charger</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Musiques;
