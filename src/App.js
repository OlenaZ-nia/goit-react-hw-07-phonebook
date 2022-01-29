
import { ToastContainer } from 'react-toastify';
import { Container } from './components/Container/Container';
import  ContactForm  from "./components/ContactForm/ContactForm";
import { ContactList } from './components/ContactList/ContactList';
import SearchFilter from './components/SearchFilter/SearchFilter';

import 'modern-normalize/modern-normalize.css';

export default function App() {
  return (
    <Container>
      <h1>Phone</h1>
      <ContactForm />
      <ToastContainer autoClose={3000} theme={'dark'} />
      <h2>Contacts</h2>
      <SearchFilter/>
      <ContactList/>
    </Container>
    );
}


