import PropTypes from 'prop-types';
import { IconBtn } from './IconButton.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const IconButton = ({ children, id, ...allyProps }) => {
  const dispatch = useDispatch();

  return (
    <IconBtn
      type="button"
      onClick={() => dispatch(deleteContact(id))}
      {...allyProps}
    >
      {children}
    </IconBtn>
  );
};

IconButton.defaultProps = {
  children: null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
