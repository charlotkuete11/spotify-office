import React, {useEffect} from 'react';
import logo from '../../assets/spotify.webp';
import {useDispatch} from 'react-redux';
import './index.css';
import {changeLoadValue} from '../../services/redux/actions';

function LoadingComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeLoadValue(true));
    }, 2500);
  }, [dispatch]);

  return (
    <div className="loadingContainer">
      <div className="subContainer">
        <div className="logo">
          <img src={logo} alt="logo de présentation" />
        </div>

        <div className="center">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingComponent;
