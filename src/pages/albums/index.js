import React from 'react';
import '../globalPageStyle.css';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import Block from '../../components/Block';
import {useState} from 'react';
import Modal from '../../components/modal';
import {useNavigate} from 'react-router';

function Albums() {
  const navigate = useNavigate();
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

  const handleSubmit = event => {
    event.preventDefault();

    // Créer un nouvel objet FormData
    const formData = new FormData();

    // Ajouter le fichier à FormData
    formData.append('data', formValue);

    // Envoyer formData au serveur ou effectuer d'autres opérations
    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData,
    // });

    // Réinitialiser le champ de fichier après l'envoi
    setFormValue({
      titre: '',
      artiste: '',
      dateSortie: '',
    });
  };

  const handleNavigation = () => {
    navigate('albums/1');
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
          <Block type="album" id="1" />
          <Block type="album" id="2" />
          <Block type="album" id="3" />
          <Block type="album" id="4" />
          <Block type="album" id="5" />
          <Block type="album" id="6" />
          <Block type="album" id="7" />
          <Block type="album" id="8" />
          <Block type="album" id="9" />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Ajouter un album">
        <form onSubmit={handleSubmit}>
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

// function handleFile(file) {
//   const allowedExtensions = ['png', 'jpg', 'jpeg'];
//   const fileExtension = file.name.split('.').pop().toLowerCase();

//   if (!allowedExtensions.includes(fileExtension)) {
//     // Gérer le cas où l'extension n'est pas autorisée
//     alert(
//       'Veuillez sélectionner un fichier avec une extension PNG, JPG ou JPEG.',
//     );
//     return;
//   }
// }

export default Albums;
