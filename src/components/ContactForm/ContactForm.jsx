import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import {
  ContactsForm,
  ContactsLabel,
  ContactsInput,
  ContactsButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value;
    const number = form.elements[1].value;

    const contact = {
      name,
      number,
    };

    if (
      contacts
        ?.map(({ name }) => name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      Notiflix.Notify.warning(`${name} is already in contacts.`);
      return;
    } else {
      dispatch(addContact(contact));
    }
    form.reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <ContactsLabel>
        Name
        <ContactsInput type="text" name="name" required />
      </ContactsLabel>
      <ContactsLabel>
        Number
        <ContactsInput type="tel" name="number" required />
      </ContactsLabel>
      <ContactsButton type="submit">Add contact</ContactsButton>
    </ContactsForm>
  );
};

export default ContactForm;
