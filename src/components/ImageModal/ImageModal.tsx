import { FC } from 'react';
import ReactModal, { Styles } from 'react-modal';
import { Image } from '../App/App.types';
import css from './ImageModal.module.css';

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90vh',
    height: 'auto',
    objectFit: 'cover',
    overflow: 'hidden',
  },
};

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  modalData: Image;
};

ReactModal.setAppElement('#root');

const ImageModal: FC<Props> = ({ isOpen, closeModal, modalData }) => {
  const {
    urls: { regular },
    description,
    alt_description,
  } = modalData;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      bodyOpenClassName={css.ReactModal__Body}
    >
      <div>
        <img src={regular} alt={alt_description} />
        <p>
          {description ||
            `${alt_description.replace(
              alt_description[0],
              alt_description[0].toUpperCase()
            )}.`}
        </p>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
