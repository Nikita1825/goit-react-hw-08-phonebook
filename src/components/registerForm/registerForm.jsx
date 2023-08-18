import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from 'redux/auth/authOperations';
import { selectaUthentificated } from 'redux/auth/authReduser';
import css from './register.module.css'

export const RegisterForm = () => {

  const dispatch = useDispatch();
  const authentificated = useSelector(selectaUthentificated)

 const handleSubmit = e => {
   e.preventDefault();
   const form = e.currentTarget;
   dispatch(
     register({
       name: form.elements.name.value,
       email: form.elements.email.value,
       password: form.elements.password.value,
     })
   );
   form.reset()
  };
  if(authentificated) return <Navigate to= '/contacts'/>


  return (
    <div>
      <h1 className={css.registerH}>Register Your contact</h1>
      <form onSubmit={handleSubmit} className={css.registerForm}>
        <label name="name" class="form__label">
          <p>Name:</p>
          <input type="text" name="name" required className={css.inputReg} />
        </label>
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
        <button type="submit" className={css.registerBtn}>Sign Up</button>
      </form>
    </div>
  );
}
