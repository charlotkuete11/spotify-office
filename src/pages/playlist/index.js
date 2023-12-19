import React from 'react';
import '../globalPageStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import Block from '../../components/Block';

const Playlists = () => {
  return (
    <div className="pageContainer">
      <div className="container">
        <div className="miniHeader">
          <div className="searchBlock">
            <input
              type="search"
              className="input"
              placeholder="Votre recherce ici"
            />
          </div>
          <div className="addSection">
            <div>
              <FontAwesomeIcon icon={faPlusCircle} className="icon" />
              <span>Ajouter Playlists</span>
            </div>
          </div>
        </div>

        <div className="body">
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </div>
      </div>
    </div>
  );
};

export default Playlists;
