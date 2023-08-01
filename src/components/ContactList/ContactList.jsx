import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <p>
            {name}: {phone}
          </p>
          <IconButton id={id} aria-label="Delete contact">
            <DeleteIcon width="22" height="22" fill="#fff" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
