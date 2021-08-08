import React, { useState } from 'react';

import { addContact } from '../../redux/contacts/contacts-operations';
import { getItems } from '../../redux/contacts/contacts-selectors';
import { useDispatch, useSelector } from 'react-redux';

//style
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };
  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };
  const onSubmit = ({ name, number }) => dispatch(addContact({ name, number }));
  const onHandleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contacts => contacts.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some(contacts => contacts.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }
    onSubmit({ name, number });
    reset();
  };
  return (
    <form className={s.form__contact} onSubmit={onHandleSubmit}>
      <label className={s.label} htmlFor="input name">
        <p className={s.title}>Name</p>
        <input
          className={s.input}
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label} htmlFor="input number">
        <p className={s.title}>Number</p>
        <input
          className={s.input}
          value={number}
          onChange={handleNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
