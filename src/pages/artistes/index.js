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
          <Block type="artiste" />
          <Block type="artiste" />
          <Block type="artiste" />
          <Block type="artiste" />
          <Block type="artiste" />
          <Block type="artiste" />
          <Block type="artiste" />
        </div>
      </div>
    </div>
  );
}

export default Artistes;
