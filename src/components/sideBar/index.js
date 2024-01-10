import React from 'react';
import {navigateRef} from '../../config/navigateRef';
import logo from '../../assets/Spotify_Logo.png';
import './index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faBook,
  faList,
  faMusic,
  faTachometerAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';

function SideBar() {
  const navRef = useSelector(state => state.navigateRef);

  const handleNavigation = path => {
    // console.log(path);
    if (navRef != null) {
      // console.log('enter');
      navRef(path);
    }
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="spotify" />
      </div>

      <ul>
        <li onClick={() => handleNavigation('/')}>
          <FontAwesomeIcon icon={faTachometerAlt} />
          <span>Dashboard</span>
        </li>
        <li onClick={() => handleNavigation('/musiques')}>
          <FontAwesomeIcon icon={faMusic} />
          <span>Musiques</span>
        </li>
        <li onClick={() => handleNavigation('/artistes')}>
          <FontAwesomeIcon icon={faUser} />
          <span>Artistes</span>
        </li>
        <li onClick={() => handleNavigation('/albums')}>
          <FontAwesomeIcon icon={faBook} />
          <span>Albums</span>
        </li>
        <li onClick={() => handleNavigation('/playlists')}>
          <FontAwesomeIcon icon={faList} />
          <span>Playlists</span>
        </li>
      </ul>

      <div className="copyright">@Copyright (c) 2024 all rights reserved</div>
    </div>
  );
}

export default SideBar;
