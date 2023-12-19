import React from 'react';
import './style.css';
import image from '../../assets/album.jpg';
import playlist from '../../assets/playlist.jpeg';
import musique from '../../assets/musique.jpeg';

function Block({type}) {
  return type === 'album' ? (
    <div className="blockContainer">
      <div className="block">
        <img src={image} alt="" />
        <div className="desc">
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
        <div className="desc">
          <p className="name">Yeux plus gros que le monde</p>
        </div>
      </div>
    </div>
  ) : type === 'musique' ? (
    <div className="blockContainer">
      <div className="block">
        <img src={musique} alt="" />
        <div className="desc">
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
        <div className="desc">
          <p className="name">Yeux plus gros que le monde</p>
        </div>
      </div>
    </div>
  );
}

export default Block;
