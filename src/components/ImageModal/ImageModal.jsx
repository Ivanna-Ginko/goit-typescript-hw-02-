import Modal from 'react-modal';




const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  Modal.setAppElement(document.getElementById("root"));

  const ImageModal = ({ isOpen, onRequestClose, selected }) => {
  return (
    <div>
      
      <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        {selected && <img src={selected} alt="Selected" />}
      </Modal>
    </div>
  );
    
}

  export default ImageModal; 
