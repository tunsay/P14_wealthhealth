import React from 'react'
import Modal from 'react-modal'

/**
 * CustomModal component displays a modal dialog with custom content.
 *
 * @typedef {Object} Props
 * @property {boolean} isOpen - A boolean value indicating whether the modal is open or closed.
 * @property {function} onClose - The function to close the modal when the close button is clicked.
 * @property {JSX.Element} content - The JSX element representing the content to be displayed in the modal.
 *
 * @returns {JSX.Element} The JSX element containing the custom modal dialog.
 */
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
