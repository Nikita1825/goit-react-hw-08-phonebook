import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/сontact/selectors';
import css from './contact.module.css'
export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.listContact}>
      <h2 className={css.listH}>Contact List:</h2>
      {filteredContacts.map(contact => (
        

        <ContactItem key={contact.id} contact={contact}></ContactItem>
        
      ))}
    </ul>
  );
};
