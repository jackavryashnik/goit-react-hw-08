import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';


const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (filteredContacts) return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
