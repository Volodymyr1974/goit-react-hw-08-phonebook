import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
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
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter
            />
            {/* {isLoading && < Loader />} */}
            <ContactList />

        </>
    )
}