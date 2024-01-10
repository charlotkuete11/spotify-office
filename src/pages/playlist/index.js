import React from 'react';
import '../globalPageStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import Block from '../../components/Block';
import {useState} from 'react';
import Modal from '../../components/modal';

const Playlists = () => {
  const [formValue, setFormValue] = useState({
    titre: '',
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
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
            <div onClick={openModal}>
              <FontAwesomeIcon icon={faPlusCircle} className="icon" />
              <span>Ajouter Playlists</span>
            </div>
          </div>
        </div>

        <div className="body">
          <Block id="1" />
          <Block id="2" />
          <Block id="3" />
          <Block id="4" />
          <Block id="5" />
          <Block id="6" />
          <Block id="7" />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Ajouter une playlist">
        <form>
          <div className="formController">
            <input
              type="text"
              placeholder="Titre"
              value={formValue.titre}
              onChange={e => {
                setFormValue(prev => ({
                  ...prev,
                  titre: e.target.value,
                }));
              }}
            />
          </div>
          <div className="formController">
            <button type="button">Ajouter</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Playlists;
