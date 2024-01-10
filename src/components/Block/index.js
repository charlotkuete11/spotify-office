import React from 'react';
import './style.css';
import image from '../../assets/album.jpg';
import playlist from '../../assets/playlist.jpeg';
import musique from '../../assets/musique.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router';

function Block({type, id}) {
  const navigate = useNavigate();
  return type === 'album' ? (
    <div className="blockContainer">
      <div className="block">
        <img src={image} alt="" />
        <div
          className="desc"
          onClick={() => {
            navigate(`/albums/${id}`);
          }}>
          <p className="name">Yeux plus gros que le monde</p>
          <div className="sousDesc">
            <p className="author">Maitre gims</p>
            <p className="anneeSortie">2019</p>
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
            navigate(`/artistes/${id}`);
          }}>
          <p className="name">Yeux plus gros que le monde</p>
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
              icon={faPlayCircle}
              className="icon"
              onClick={() => {
                console.log('play');
              }}
            />
          </div>
          <p className="name">Yeux plus gros que le monde</p>
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
