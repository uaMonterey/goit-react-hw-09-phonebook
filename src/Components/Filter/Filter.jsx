import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(resetFilter(e.target.value));

  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <p className={s.title}>Find contact by name</p>
        <input
          className={s.input}
          onChange={onChange}
          value={value}
          type="text"
          name="name"
          required
        />
      </label>
    </div>
  );
};

export default Filter;
