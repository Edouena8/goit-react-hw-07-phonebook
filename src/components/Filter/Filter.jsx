import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectFilter);

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
