import { useState } from 'react';
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts, selectLoading } from '../../redux/contacts/selectors';
import {
  ContactsForm,
  ContactsLabel,
  ContactsInput,
  ContactsButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);

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
      // toast(`${name} is already in contacts.`,
      //   {
      //   icon: '🤦🏻‍♂️',
      //   position: 'top-center',
      // });
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
        <ContactsInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactsLabel>
      <ContactsLabel>
        Number
        <ContactsInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactsLabel>
      <ContactsButton type="submit">Add contact</ContactsButton>
    </ContactsForm>
  );
};

export default ContactForm;
