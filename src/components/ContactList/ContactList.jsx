import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter } from "redux/contactsSlice";
import { useGetContactsQuery } from '../../redux/contactsApi';
import style from '../ContactList/ContactList.module.css';

const ContactList = () => {
    const { data } = useGetContactsQuery({}, { refetchOnMountOrArgChange: true });
    const filter = useSelector(getFilter);
    const normalizedFilter = filter.toLowerCase();
    console.log(data);
    if (data === undefined) { return }
    const items = data.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
        <ul className={style.list}>
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