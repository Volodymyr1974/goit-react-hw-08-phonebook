import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import style from '../Contacts/Contacts.module.css';
// import { useGetContactsQuery } from '../../redux/contactsApi';
// import authSelectors from 'redux/auth/authSelectors';
// import { useSelector } from 'react-redux';

export default function Contacts() {
    // const { data, isLoading, isError } = useGetContactsQuery();
    // console.log(data, isLoading, isError);
    // console.log(useGetContactsQuery());
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    // console.log(isLoggedIn);
    return (
        <div className={style.container}>
            <h1 className={style.container_title} >Phonebook</h1>
            <ContactForm />
            <h2 className={style.container_title}>Contacts</h2>
            <Filter
            />
            {/* {isLoading && < Loader />} */}
            <ContactList />

        </div>
    )
}