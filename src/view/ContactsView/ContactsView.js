import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../Components/Container/Container.jsx';
import ContactsList from '../../Components/ContactList/ContactList.jsx';
import ContactForm from '../../Components/ContactForm/ContactForm.jsx';
import Filter from '../../Components/Filter/Filter.jsx';
import { contactFetch } from '../../redux/contacts/contacts-operations';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import CircularProgress from '@material-ui/core/CircularProgress';

import s from '../ContactsView/ContactsView.module.css';

const ContactsView = () => {
  const isLoadingContacts = useSelector(state => getLoading(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactFetch());
  }, [dispatch]);

  return (
    <Container>
      <div className={s.barStyles}>
        <ContactForm />
        <Filter />
        <ContactsList />

        {isLoadingContacts && <CircularProgress />}
      </div>
    </Container>
  );
};

export default ContactsView;
