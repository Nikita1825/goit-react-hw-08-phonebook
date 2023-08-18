import PropTypes from 'prop-types';
import css from './contactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/сontact/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>
      <button className={css.btnDelete} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
