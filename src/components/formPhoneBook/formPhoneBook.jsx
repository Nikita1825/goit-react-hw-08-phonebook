import { useState } from 'react';
import css from './phoneBook.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/сontact/operations';
import { selectContacts } from 'redux/сontact/selectors';
import { selectaUthentificated } from 'redux/auth/authReduser';
import { Navigate } from 'react-router-dom';

export const FormPhone = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isExistingContact = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  const authentificated = useSelector(selectaUthentificated);
   if (!authentificated) return <Navigate to="/" />;

  const handleSubmit = e => {
    e.preventDefault();
    if (isExistingContact) {
      return alert(`${name} is already in contact`);
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.contactBook}>Contact book</h2>
      <label>
        <p>Name</p>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        <p>Phone</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
