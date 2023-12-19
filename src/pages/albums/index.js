import React from 'react';
import '../globalPageStyle.css';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import Block from '../../components/Block';
import {useState} from 'react';
import Modal from '../../components/modal';

function Albums() {
  const [formValue, setFormValue] = useState({
    titre: '',
    artiste: '',
    dateSortie: '',
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSelectChange = event => {
    setFormValue(prev => ({
      ...prev,
      artiste: event.target.value,
    }));
  };

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
              <span>Ajouter album</span>
            </div>
          </div>
        </div>

        <div className="body">
          <Block type="album" />
          <Block type="album" />
          <Block type="album" />
          <Block type="album" />
          <Block type="album" />
          <Block type="album" />
          <Block type="album" />
          <Block type="album" />
          <Block type="album" />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Ajouter un album">
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
            <select
              name="artiste"
              onChange={e => {
                handleSelectChange(e);
              }}>
              <option value="">Choisir un artiste</option>
              <option value="maitre gims">Maitre gims</option>
              <option value="Damso">Damso</option>
            </select>
          </div>
          <div className="formController">
            <input
              type="number"
              placeholder="Date de sortie"
              value={formValue.dateSortie}
              onChange={e => {
                setFormValue(prev => ({
                  ...prev,
                  dateSortie: e.target.value,
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
}

export default Albums;
