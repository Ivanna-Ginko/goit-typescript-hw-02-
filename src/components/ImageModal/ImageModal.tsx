import Modal from 'react-modal';
import { Result } from '../../App.types'


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
  //Modal.setAppElement(document.getElementById("root"));

  type Props = {
    isOpen: boolean;
    onRequestClose: ()=> void;
    selected: string;
  }

  const ImageModal = ({ isOpen, selected, onRequestClose }: Props) => {
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
