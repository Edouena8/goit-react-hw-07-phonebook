import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {

  useEffect(() => {
    const onKeydownEsc = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeydownEsc);

    return () => {
      window.removeEventListener('keydown', onKeydownEsc);
    }
  }, [onClose])
  

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        {children}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </Content>
    </Backdrop>,
    modalRoot
  );
}

