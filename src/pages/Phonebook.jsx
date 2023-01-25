// import { Box } from './Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectLoading } from 'redux/contacts/selectors';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: '28px',
          color: '#1C4931',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: '28px',
          color: '#1C4931',
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && !error}
      <ContactList />
    </>
  );
}
