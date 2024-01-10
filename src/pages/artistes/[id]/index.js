import React from 'react';
import '../../globalPageStyle.css';
import {useParams} from 'react-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
import image from '../../../assets/album.jpg';

function ArtisteDetails() {
  const {id} = useParams();
  return (
    <div className="pageContainer">
      <div className="container">
        <div className="first">
          <img src={image} alt="" />
          <div className="name">
            <p>Subliminal</p>
          </div>
        </div>
        <div className="second">
          {/* <div className="header">
            <p>Maitre Gims</p>
            <p>Date de sortie: 2019</p>
          </div> */}
          <div className="body">
            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPause} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>

            <div className="blocks">
              <div className="block">
                <p>Sur ma route </p>
                <button>
                  <FontAwesomeIcon icon={faPlay} classname="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtisteDetails;
