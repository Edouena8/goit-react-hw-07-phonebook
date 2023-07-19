import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeydownEsc);
  }

  onKeydownEsc = evt => {
    const { onClose } = this.props;
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  handleBackdropClick = evt => {
    const { onClose } = this.props;
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeydownEsc);
  }

  render() {
    const { onClose, children } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
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
}

export default Modal;
