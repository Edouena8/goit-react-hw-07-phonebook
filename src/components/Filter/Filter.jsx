import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(state => state.filter);

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
