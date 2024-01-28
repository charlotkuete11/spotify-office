import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../globalPageStyle.css';
import './dashboard.css';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {changeNavigateRef} from '../../services/redux/actions';
import {faBook, faEarListen, faMusic} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalAlbum, setTotalAlbum] = useState(null);
  const [totalMorceaux, setTotalMorceaux] = useState(null);

  useEffect(() => {
    dispatch(changeNavigateRef(navigate));

    axios.get(`${baseUrl}/albums`).then(res => {
      setTotalAlbum(res.data.length);
    });

    axios.get(`${baseUrl}/audios`).then(res => {
      setTotalMorceaux(res.data.length);
    });
  }, []);

  return (
    <div className="pageContainer">
      <div className="container">
        <p className="headerText">Bienvenu a bord</p>
        <div className="listened">
          <div className="mostListened">
            <table>
              <thead>
                <tr>
                  <th>rang</th>
                  <th>Artiste</th>
                  <th>Titre</th>
                  <th>Nombre d'ecoute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Burna Boy</td>
                  <td>On the low</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Burna Boy</td>
                  <td>On the low</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Burna Boy</td>
                  <td>On the low</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Burna Boy</td>
                  <td>On the low</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Burna Boy</td>
                  <td>On the low</td>
                  <td>20000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="nombreEcoute">
            <div className="innerBlock">
              <FontAwesomeIcon icon={faEarListen} className="icon" />
              <div>
                <p>Nombre d'ecoute</p>
                <p>94000</p>
              </div>
            </div>
            <div className="innerBlock">
              <FontAwesomeIcon icon={faBook} className="icon" />
              <div>
                <p>Nombre d'album</p>
                <p>{totalAlbum}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="musics">
          <div className="innerBlock">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <div>
              <p>Nombre de morceau</p>
              <p>{totalMorceaux}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
