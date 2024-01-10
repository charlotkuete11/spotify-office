import React from 'react';
import '../globalPageStyle.css';
import Block from '../../components/Block';

function Artistes() {
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
        </div>

        <div className="body">
          <Block type="artiste" id="1" />
          <Block type="artiste" id="2" />
          <Block type="artiste" id="3" />
          <Block type="artiste" id="4" />
          <Block type="artiste" id="5" />
          <Block type="artiste" id="6" />
          <Block type="artiste" id="7" />
          <Block type="artiste" id="8" />
        </div>
      </div>
    </div>
  );
}

export default Artistes;
