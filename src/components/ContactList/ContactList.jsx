import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
  
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <IconButton
            id={id}
            aria-label="Delete contact"
          >
            <DeleteIcon width="22" height="22" fill="#fff" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
