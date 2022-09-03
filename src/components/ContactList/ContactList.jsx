import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter } from "redux/contactsSlice";
import { useGetContactsQuery } from '../../redux/contactsApi';

const ContactList = () => {
    const { data } = useGetContactsQuery({}, { refetchOnMountOrArgChange: true });
    const filter = useSelector(getFilter);
    const normalizedFilter = filter.toLowerCase();
    console.log(data);
    if (data === undefined) { return }
    const items = data.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
        <ul >
            {(items.map(({ id, name, number }) => (
                <li key={id}>
                    <ContactItem
                        id={id}
                        name={name}
                        number={number}
                    />

                </li>
            )))}
        </ul>
    );
};


export default ContactList;