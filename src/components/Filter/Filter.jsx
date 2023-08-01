import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(getFilter);

  return (
    <input
      type="text"
      placeholder="Search"
      value={valueFilter}
      onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
    />
  );
};

export default Filter;
