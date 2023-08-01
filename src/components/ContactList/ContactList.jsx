import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim(); 
  
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <p>
            {name}: {phone}
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
