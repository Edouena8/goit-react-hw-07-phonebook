import PropTypes from 'prop-types';
import { IconBtn } from './IconButton.styled';


const IconButton = ({ children, onClick, ...allyProps }) => (
    <IconBtn type="button" onClick={onClick} {...allyProps}>
        {children}
    </IconBtn>
);

IconButton.defaultProps = {
    onClick: () => null,
    children: null,
};

IconButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    'aria-label': PropTypes.string.isRequired,
};

export default IconButton;