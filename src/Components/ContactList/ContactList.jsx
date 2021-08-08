import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactFetch } from '../../redux/contacts/contacts-operations';

import ContactItem from '../ContactItem/ContactItem';

import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactFetch()), [dispatch]);

  const contacts = useSelector(getFilteredContacts);
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem id={id} key={id} name={name} number={number} />
      ))}
    </ul>
  );
};

const getFilteredContacts = contactData => {
  const filter = contactData.contacts.filter;
  if (!filter) return contactData.contacts.items;
  const normalizedFilter = filter.toLowerCase();

  return contactData.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export default ContactList;
