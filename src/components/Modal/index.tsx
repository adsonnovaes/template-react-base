import { ReactNode } from 'react';
import ReactModal from 'react-modal';

import alertImg from '../../assets/alert.svg';
import { Button } from '../Button';

import './styles.scss';

type ModalParams = {
  isOpen: boolean;
  setVisibility: () => void,
  handleConfirmed: () => void,
  children?: ReactNode,
}

ReactModal.setAppElement('#root');
export function Modal({ isOpen, setVisibility, handleConfirmed, children }: ModalParams) {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={setVisibility}
      className="Modal"
      // overlayClassName="Overlay"
    >
      <div className="header-container">
        <img src={alertImg} alt="Icon alert" />
        <h2>{children}</h2>
        <span>Esteja ciente que esta ação é permanente</span>
      </div>
      <div className="footer-container">
        <Button
          onClick={setVisibility}
          isOutlined
        >
          Cancelar
        </Button>

        <Button
          onClick={handleConfirmed}
          isConfirmed
        >
          Confirmar
        </Button>
      </div>
    </ReactModal>
  );
}