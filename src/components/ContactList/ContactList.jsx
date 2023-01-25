import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';

import {
  ContactsList,
  ContactsListItem,
  ContactsListInf,
  ContactsListButton,
} from './ContactList.styled';
import { IoTrashBinOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { MdContactPage } from 'react-icons/md';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ContactsList>
      {contacts.map(({ id, name, phone }) => (
        <ContactsListItem key={id}>
          <IconContext.Provider value={{ color: '#d85841' }}>
            <MdContactPage />
          </IconContext.Provider>
          <ContactsListInf>
            <b>{name}: </b>
            {phone}
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
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
