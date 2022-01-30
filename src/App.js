import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Container } from './components/Container/Container';
import  ContactForm  from "./components/ContactForm/ContactForm";
import { ContactList } from './components/ContactList/ContactList';
import SearchFilter from './components/SearchFilter/SearchFilter';
import { isLoading } from './redux/contacts-selectors';

import { Spinner } from './components/Spinner/Spinner';

import 'modern-normalize/modern-normalize.css';


export default function App() {
  const loading = useSelector(isLoading);

  return (
    <Container>
      <h1>Phone</h1>
      <ContactForm />
      <ToastContainer autoClose={3000} theme={'dark'} />
      <h2>Contacts</h2>
      <SearchFilter />
      <ContactList />
      {loading && <Spinner />}
    </Container>
    );
}


