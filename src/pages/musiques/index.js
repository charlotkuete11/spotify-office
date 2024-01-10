import React from 'react';
import '../globalPageStyle.css';
import Block from '../../components/Block';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/modal';
import {useState} from 'react';

function Musiques() {
  const [file, setFile] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!file) {
      // Gérer le cas où aucun fichier n'a été sélectionné
      return;
    }

    // Vérifier l'extension du fichier
    const allowedExtensions = ['mp3', 'wav', 'ogg'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      // Gérer le cas où l'extension n'est pas autorisée
      alert(
        'Veuillez sélectionner un fichier avec une extension MP3, WAV ou OGG.',
      );
      return;
    }

    // Créer un nouvel objet FormData
    const formData = new FormData();

    // Ajouter le fichier à FormData
    formData.append('file', file);

    console.log(formData);

    // Envoyer formData au serveur ou effectuer d'autres opérations
    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData,
    // });

    // Réinitialiser le champ de fichier après l'envoi
    setFile(null);
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
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Ajouter une Musique">
        <form onSubmit={handleSubmit}>
          <div className="formController">
            <input
              type="file"
              placeholder="Choisir le fichier"
              accept=".mp3, .wav, .ogg"
              onChange={handleFileChange}
            />
          </div>
          <div className="formController">
            <button type="submit">Charger</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Musiques;
