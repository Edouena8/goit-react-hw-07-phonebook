import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'redux/modalSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectModal,
} from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <button type="button" onClick={() => dispatch(toggleModal(modal))}>
        Create contact
      </button>

      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      {items && <Filter />}
      <ContactList />
      {modal && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
    </div>
  );
}
