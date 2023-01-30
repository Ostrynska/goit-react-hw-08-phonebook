// import Notiflix from 'notiflix';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contacts/operations';
// import { selectContacts, selectLoading } from '../../redux/contacts/selectors';
// import { nanoid } from '@reduxjs/toolkit';

// import { ContactsForm } from './ContactForm.styled';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { theme } from '../App';

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectLoading);

//   const nameId = nanoid(4);
//   const numberId = nanoid(4);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const contactForm = e.target;
//     const name = contactForm.elements[0].value;
//     const number = contactForm.elements[1].value;

//     const contact = {
//       name,
//       number,
//     };

//     if (
//       contacts
//         ?.map(({ name }) => name.toLowerCase())
//         .includes(name.toLowerCase())
//     ) {
//       // toast(`${name} is already in contacts.`,
//       //   {
//       //   icon: '🤦🏻‍♂️',
//       //   position: 'top-center',
//       // });
//       return;
//     } else {
//       dispatch(addContact(contact));
//     }
//     contactForm.reset();
//   };

//   return (
//     <Container component="main" maxWidth="sm" theme={theme}>
//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//         noValidate
//         autoComplete="on"
//         sx={{
//           marginTop: 16,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         {/* <ContactsForm onSubmit={handleSubmit}> */}
//         <TextField
//           required
//           fullWidth
//           type="text"
//           label="Name"
//           name="name"
//           id={nameId}
//         />
//         <TextField
//           required
//           fullWidth
//           type="text"
//           label="Number"
//           name="number"
//           id={numberId}
//         />
//         <Button
//           type="submit"
//           // startIcon={<AddIcon />}
//           variant="contained"
//           color="primary"
//           size="small"
//           fullWidth
//         >
//           Add contact
//         </Button>
//         {/* </ContactsForm> */}
//       </Box>
//     </Container>
//   );
// };

// export default ContactForm;
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
