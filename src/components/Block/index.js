import React, {useEffect, useState} from 'react';
import './style.css';
import image from '../../assets/album.jpg';
import playlist from '../../assets/playlist.jpeg';
import musique from '../../assets/musique.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPauseCircle, faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

function Block({type, id, data}) {
  const navigate = useNavigate();
  const [albumAuthor, setAlbumAuthor] = useState(null);

  useEffect(() => {
    if (type === 'album') {
      const artisteId = data.artistes[0];
      // Effectuez une requête GET vers l'API
      axios
        .get(`${baseUrl}/artistes/${artisteId}`)
        .then(response => {
          // Mettez à jour l'état avec les données de l'API
          setAlbumAuthor(response.data.name);
        })
        .catch(error => {
          console.error(
            "Erreur lors de la récupération des données de l'API:",
            error,
          );
        });
    }
  }, [data.artistes, type]);

  return type === 'album' ? (
    <div className="blockContainer">
      <div className="block">
        <img src={image} alt="" />
        <div
          className="desc"
          onClick={() => {
            navigate(`/albums/${data._id}`);
          }}>
          <p className="name">{data.title}</p>
          <div className="sousDesc">
            <p className="author">{albumAuthor}</p>
            {/* <p className="anneeSortie">2019</p> */}
          </div>
        </div>
      </div>
    </div>
  ) : type === 'artiste' ? (
    <div className="blockContainer">
      <div className="block">
        <img src={image} alt="" />
        <div
          className="desc"
          onClick={() => {
            navigate(`/artistes/${data._id}`);
          }}>
          <p className="name">{data.name}</p>
        </div>
      </div>
    </div>
  ) : type === 'musique' ? (
    <div className="blockContainer">
      <div className="block">
        <img src={musique} alt="" />
        <div className="desc">
          <div className="audioControl">
            <FontAwesomeIcon
              icon={data.isPlaying ? faPauseCircle : faPlayCircle}
              className="icon"
            />
          </div>
          <p className="name">{data.title}</p>
          <div className="sousDesc">
            <p className="author">Maitre gims</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="blockContainer">
      <div className="block">
        <img src={playlist} alt="" />
        <div
          className="desc"
          onClick={() => {
            navigate(`/playlists/${id}`);
          }}>
          <p className="name">Yeux plus gros que le monde</p>
        </div>
      </div>
    </div>
  );
}

export default Block;
