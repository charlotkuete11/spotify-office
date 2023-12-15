import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';
import './style.css';

function Header() {
  return (
    <div className="header">
      <div className="searchContainer">
        {/* <input
            type="search"
            className="search"
            placeholder="Votre recherche !"
          /> */}
        <button type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="fakeUser">
        <div className="user">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>charlot junior</span>
        </div>
        <div className="language">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <span>French</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
