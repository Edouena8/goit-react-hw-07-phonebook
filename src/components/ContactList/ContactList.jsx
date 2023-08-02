import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactItem, ContactText, ContactWrap } from './ContactList.styled';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactWrap>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id}>
          <ContactText>
            {name}: {phone}
          </ContactText>
          <IconButton id={id} aria-label="Delete contact">
            <DeleteIcon width="22" height="22" fill="#fff" />
          </IconButton>
        </ContactItem>
      ))}
    </ContactWrap>
  );
};

export default ContactList;
