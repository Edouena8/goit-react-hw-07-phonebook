import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Content } from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'redux/modalSlice';
import { getModal } from 'redux/selectors';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const modal = useSelector(getModal);

  useEffect(() => {
    const onKeydownEsc = evt => {
      if (evt.code === 'Escape') {
        dispatch(toggleModal(modal));
      }
    };

    window.addEventListener('keydown', onKeydownEsc);

    return () => {
      window.removeEventListener('keydown', onKeydownEsc);
    };
  }, [dispatch, modal]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      dispatch(toggleModal(modal));
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        {children}
        <button type="button" onClick={() => dispatch(toggleModal(modal))}>
          Close
        </button>
      </Content>
    </Backdrop>,
    modalRoot
  );
}
