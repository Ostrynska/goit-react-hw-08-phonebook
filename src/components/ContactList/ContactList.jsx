import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

import {
  ContactsList,
  ContactsListItem,
  ContactsListInf,
  ContactsListButton,
} from './ContactList.styled';
import { fetchContacts } from 'redux/contacts/operations';
import { IoTrashBinOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { MdContactPage } from 'react-icons/md';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function handleFilter() {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filterContacts = handleFilter();

  return (
    <ContactsList>
      {filterContacts?.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          <IconContext.Provider value={{ color: '#d85841' }}>
            <MdContactPage />
          </IconContext.Provider>
          <ContactsListInf>
            <b>{name}: </b>
            {number}
          </ContactsListInf>
          <ContactsListButton
            type="submit"
            name={name}
            onClick={() => dispatch(deleteContact(id))}
          >
            <IoTrashBinOutline />
          </ContactsListButton>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
