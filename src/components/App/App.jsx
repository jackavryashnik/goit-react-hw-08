import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
// import { Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>User is refreshing, please wait...</b>
  ) : (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox>Find contacts by name</SearchBox>
      {loading && !error && <p>Loading...</p>}
      {error && <p>Oops something went wrong. Try reloading</p>}
      <ContactList />
      {/* </Suspense> */}
    </>
  );
}

export default App;
