import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterWrap>
      <FilterLabel>
        Find contacts by name
        <FilterInput value={filters} type="text" onChange={onChange} />
      </FilterLabel>
    </FilterWrap>
  );
};

export default Filter;
