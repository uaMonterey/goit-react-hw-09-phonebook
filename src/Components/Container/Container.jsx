import React from 'react';
import s from './Container.module.css';

const Container = ({ children, title }) => (
  <div className={s.container}>
    {children}
  </div>
  
);

export default Container;