import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'redux/modalSlice';

export default function App() {
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Phonebook</h1>
      <button type="button" onClick={() => dispatch(toggleModal(modal))}>
        Create contact
      </button>

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {modal && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
    </div>
  );
}
