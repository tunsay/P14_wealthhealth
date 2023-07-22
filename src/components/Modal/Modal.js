import React from 'react'
import Modal from 'react-modal'

const CustomModal = ({ isOpen, onClose, content }) => {
  // Vous pouvez également définir un style personnalisé pour le modal ici
  const customStyles = {
    content: {
      width: 'fit-content', // Le modal s'ajustera en fonction du contenu
      height: 'fit-content', // Le modal s'ajustera en fonction du contenu
      maxWidth: '80%', // Vous pouvez également définir une largeur maximale si nécessaire
      margin: 'auto', // Centre le modal horizontalement
    },
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style={customStyles} // Utilisez le style personnalisé ici
    >
      <button onClick={onClose}>Fermer le modal</button>
      {content}
    </Modal>
  )
}

export default CustomModal
