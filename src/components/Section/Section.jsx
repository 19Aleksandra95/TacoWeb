import css from './Section.module.css';

import React from 'react';

const Section = ({children, title = false}) => {
  return (
  
  <section className={css.section}>
    {title && <h2>{title}</h2>}
{children}
  </section>
  )

};

export default Section;
