import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import { selectError, selectLoading } from '../redux/contacts/selectors';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox>Find contacts by name</SearchBox>
  {loading && !error && <p>Loading...</p>}
  {error && <p>Oops something went wrong. Try reloading</p>}
  <ContactList /></div>;
}

export default Contacts
