import React from 'react';
import { ContactList } from 'components/contactList/contactList';
import { Filter } from 'components/filter/filter';
import { fetchContacts } from 'redux/сontact/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormPhone } from 'components/formPhoneBook/formPhoneBook';
import { selectIsLoading } from 'redux/сontact/selectors';
import { Loader } from 'components/Loader/loader';
import css from './home.module.css';
import { selectaUthentificated } from 'redux/auth/authReduser';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  const authentificated = useSelector(selectaUthentificated)


  useEffect(() => {
    if (!authentificated) return;
    dispatch(fetchContacts());
  }, [dispatch, authentificated]);
  return (
    
    <div className={css.ContactPage}>
      <FormPhone />

      <Filter />
    
      {isLoading  ? <Loader /> : <ContactList />}
      
        
    </div>
    
   
      
  );
};
export default Contacts;
