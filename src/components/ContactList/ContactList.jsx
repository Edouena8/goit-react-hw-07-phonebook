import PropTypes from 'prop-types';
import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <IconButton onClick={() => onDeleteContact(id)} aria-label="Delete contact">
            <DeleteIcon width="22" height="22" fill='#fff' />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number:PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;
