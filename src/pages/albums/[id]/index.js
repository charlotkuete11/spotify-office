import React from 'react';
import '../../globalPageStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAdd, faPause, faPlay} from '@fortawesome/free-solid-svg-icons';
import image from '../../../assets/album.jpg';
import Modal from '../../../components/modal';
import {useState} from 'react';

function Album() {
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
        <div className="first">
          <img src={image} alt="" />
          <div className="name">
            <p>Subliminal</p>
          </div>
        </div>
        <div className="second">
          <div className="header">
            <p>Maitre Gims</p>
            <p>Date de sortie: 2019</p>
          </div>
          <div className="body">
            <button className="addBlock" onClick={openModal}>
              <FontAwesomeIcon icon={faAdd} className="icon" />
              <span>Ajouter Musique</span>
            </button>
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

export default Album;