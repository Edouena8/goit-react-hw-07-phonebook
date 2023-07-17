import PropTypes from 'prop-types';

const Filter = ({value, onSearch}) => (
  <input
    type="text"
    placeholder="Search"
    value={value}
    onChange={onSearch}
  />
);

Filter.propTypes ={
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default Filter;
