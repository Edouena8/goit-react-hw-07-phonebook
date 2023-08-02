import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FilterInput, FilterWrap } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectFilter);

  return (
    <FilterWrap>
      <FilterInput
        type="text"
        placeholder="Search"
        value={valueFilter}
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
      />
    </FilterWrap>
  );
};

export default Filter;
