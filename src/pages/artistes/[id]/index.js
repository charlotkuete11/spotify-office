import React, {useEffect, useRef, useState} from 'react';
import '../../globalPageStyle.css';
import {useParams} from 'react-router';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faAdd,
  faPause,
  faPlay,
  faRemove,
} from '@fortawesome/free-solid-svg-icons';
import image from '../../../assets/album.jpg';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

function ArtisteDetails() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [name, setName] = useState(null);
  const [musiques, setMusiques] = useState([]);
  // const [audioSource, setAudioSource] = useState(null);

  const audioControRef = useRef(null);

  useEffect(() => {
    // Effectuez une requête GET vers l'API
    axios
      .get(`${baseUrl}/artistes/${id}`)
      .then(response => {
        // Mettez à jour l'état avec les données de l'API
        setName(response.data.name);
        const audioArray = response.data.audios;

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
            console.log('musiques', arrayMusique);
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
          "Erreur lors de la récupération des données de l'API:",
          error,
        );
      });
  }, []);

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

  const handleArtistDelete = () => {
    axios
      .delete(`${baseUrl}/artistes/${id}`)
      .then(response => {
        navigate('/artistes');
      })
      .catch(error => {
        // Handle errors
        console.error('Error making DELETE request:', error.message);
      });
  };

  return (
    <div className="pageContainer">
      <div className="container">
        <div className="first">
          <img src={image} alt="" />
          <div className="name">
            <p>{name}</p>
          </div>
        </div>
        <div className="second">
          <audio ref={audioControRef} controls style={dumStyle}>
            <source src="" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="body">
            <button
              className="addBlock"
              onClick={() => {
                handleArtistDelete();
              }}>
              <FontAwesomeIcon icon={faRemove} className="icon" />
              <span>Supprimer artiste</span>
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
                        className="icon"
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
    </div>
  );
}

export default ArtisteDetails;
