import { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import { selectError, selectLoading } from '../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox>Find contacts by name</SearchBox>
  {loading && !error && <p>Loading...</p>}
  {error && <p>Oops something went wrong. Try reloading</p>}
  <ContactList /></div>;
}

export default Contacts
