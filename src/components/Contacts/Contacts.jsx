import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useGetContactsQuery } from '../../redux/contactsApi';
import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export default function Contacts() {
    const { data, isLoading, isError } = useGetContactsQuery();
    console.log(data, isLoading, isError);
    console.log(useGetContactsQuery());
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    console.log(isLoggedIn);
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm
                data={data}
            />
            <h2>Contacts</h2>
            <Filter
            />
            {/* {isLoading && < Loader />} */}
            {isLoggedIn && <ContactList
                data={data}
            />}

        </>
    )
}