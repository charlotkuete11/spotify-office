import React from 'react';
import '../globalPageStyle.css';
import Block from '../../components/Block';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

function Musiques() {
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
              <span>Ajouter musique</span>
            </div>
          </div>
        </div>

        <div className="body">
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
          <Block type="musique" />
        </div>
      </div>
    </div>
  );
}

export default Musiques;
