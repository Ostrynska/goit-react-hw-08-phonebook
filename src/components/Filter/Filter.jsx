import { useDispatch } from 'react-redux/es/exports';
import { contactsFilter } from '../../redux/contacts/filterSlice';
import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(contactsFilter(e.target.value));
  };

  return (
    <FilterWrap>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" onChange={onChange} />
      </FilterLabel>
    </FilterWrap>
  );
};

export default Filter;
