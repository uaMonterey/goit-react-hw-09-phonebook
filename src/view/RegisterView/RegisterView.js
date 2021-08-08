import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import s from '../RegisterView/RegisterView.module.css';

const RegisterView = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearInput = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));

    clearInput();
  };
  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  return (
    <div>
      <h1 className={s.header}>Registration</h1>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input type="text" name="name" value={name} onInput={onChange} />
        </label>

        <label className={s.label}>
          E-mail
          <input type="email" name="email" value={email} onInput={onChange} />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onInput={onChange}
          />
        </label>
        <button className={s.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterView;
