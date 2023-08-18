import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { selectaUthentificated } from 'redux/auth/authReduser';
import { Navigate } from 'react-router-dom';
import css from './login.module.css'

export const LoginForm = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectaUthentificated)


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
if (authentificated) return <Navigate to="/contacts" />;
  return (
    <div>
      <h1 className={css.registerH}>Login Your contact</h1>
      <form onSubmit={handleSubmit} className={css.registerForm}>
        <label class="form__label">
          <p>Email:</p>
          <input type="email" name="email" required className={css.inputReg} />
        </label>
        <label class="form__label">
          <p>Password:</p>
          <input
            type="password"
            name="password"
            required
            className={css.inputReg}
          />
        </label>
        <button type="submit" className={css.registerBtn}>
          Sign In
        </button>
      </form>
    </div>
  );
};
