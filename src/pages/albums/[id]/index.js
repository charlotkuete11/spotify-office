import React, {useEffect, useRef} from 'react';
import '../../globalPageStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAdd, faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
import image from '../../../assets/album.jpg';
import Modal from '../../../components/modal';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'http://ec2-15-188-52-96.eu-west-3.compute.amazonaws.com/api';

function Album() {
  const [file, setFile] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const {id} = useParams();
  const [title, setTitle] = useState(null);
  const [artiste, setArtiste] = useState(null);
  const [musiques, setMusiques] = useState([]);

  const audioControRef = useRef(null);

  useEffect(() => {
    // Effectuez une requête GET vers l'API
    axios
      .get(`${baseUrl}/albums/${id}`)
      .then(response => {
        setTitle(response.data.title);
        const audioArray = response.data.audios;
        // console.log('first', response.data);

        axios
          .get(`${baseUrl}/artistes/${response.data.artistes[0]}`)
          .then(res => {
            setArtiste(res.data.name);
          });

        //Effectuez une requete GET vers l'api pour obtenir les musiques de l'album
        axios
          .get(`${baseUrl}/audios`)
          .then(response => {
            let arrayMusique = [];
            audioArray.forEach(audioId => {
              const audio = response.data.find(
                element => element._id === audioId,
              );
              audio['isPlaying'] = false;
              let newUrlAudio =
                'https://d366vhzgi36hze.cloudfront.net' +
                audio.urlAudio.slice(41);
              audio.urlAudio = newUrlAudio;

              arrayMusique.push(audio);
            });
            setMusiques(arrayMusique);
            // console.log('musiques', musiques);
          })
          .catch(error => {
            console.error(
              "Erreur lors de la recuperation des donnees de l'API: ",
              error,
            );
          });
      })
      .catch(error => {
        console.error(
          "Erreur lors de la récupération des données de l'API1:",
          error,
        );
      });
  }, [id, musiques]);

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

    // console.log(formData);

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
    const updatedMusiques = musiques.map(item => {
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
    setMusiques(updatedMusiques);
  };
  const dumStyle = {
    display: 'none',
  };
  return (
    <div className="pageContainer">
      <div className="container">
        <div className="first">
          <img src={image} alt="" />
          <div className="name">
            <p>{title}</p>
          </div>
        </div>
        <div className="second">
          <div className="header">
            <p>{artiste}</p>
          </div>
          <audio ref={audioControRef} controls style={dumStyle}>
            <source src="" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="body">
            <button className="addBlock" onClick={openModal}>
              <FontAwesomeIcon icon={faAdd} className="icon" />
              <span>Ajouter Musique</span>
            </button>

            {musiques ? (
              musiques.map((musique, index) => (
                <div className="blocks" key={index}>
                  <div className="block">
                    <p>{musique.title}</p>
                    <button
                      onClick={() =>
                        toggleIsPlaying(musique._id, musique.urlAudio)
                      }>
                      <FontAwesomeIcon
                        icon={musique['isPlaying'] ? faPause : faPlay}
                        classname="icon"
                      />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Chargement...</p>
            )}
          </div>
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
              placeholder="Choisir le fichier"
              accept=".mp3, .wav, .ogg"
              onChange={handleFileChange}
            />
          </div>
          <div className="formController">
            <button type="submit">Charger</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Album;
