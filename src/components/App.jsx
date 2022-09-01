import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from './Filter/Filter';
import style from './App.module.css';
import { useGetContactsQuery } from '../redux/contactsApi';
import { Toaster } from 'react-hot-toast';
import Loader from "../components/Loader/Loader";
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import UserMenu from './UserMenu/UserMenu';
function App() {
  const { data, isLoading } = useGetContactsQuery();

  return (

    <div className={style.box}>
      <h1>Phonebook</h1>
      <ContactForm
        data={data}
      />
      <h2>Contacts</h2>
      <Filter
      />
      {isLoading && < Loader />}
      {!isLoading && <ContactList
        data={data}
      />}
      <RegisterForm />
      <LoginForm />
      <UserMenu />
      <Toaster />
    </div>
  );
}

export default App;