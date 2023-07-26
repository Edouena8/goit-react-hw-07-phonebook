import shortid from 'shortid';
import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';

const LS_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, []);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const duplicateContact = name => {
    const normalizedName = name.toLowerCase().trim();

    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const addContact = (name, number) => {
    if (duplicateContact) {
      return alert(`${name} is already in contacts`);
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId =>
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );

  const handleFilter = evt => setFilter(evt.currentTarget.value);

  const toggleModal = () => setShowModal(prev => !prev);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <button type="button" onClick={toggleModal}>
        Create contact
      </button>

      <h2>Contacts</h2>
      <Filter value={filter} onSearch={handleFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSubmit={addContact} />
        </Modal>
      )}
    </div>
  );
}

