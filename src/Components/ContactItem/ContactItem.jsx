import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';

import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li key={id} className={s.item}>
      <div className={s.wrap}>
        <span className={s.name}>
          {name}: {number}
        </span>
        <button className={s.button} onClick={() => onDelete(id)} type="button">
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
