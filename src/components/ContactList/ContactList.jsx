import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter } from "redux/contactsSlice";
import { useGetContactsQuery } from '../../redux/contactsApi';
import style from '../ContactList/ContactList.module.css';

const ContactList = () => {
    const { data } = useGetContactsQuery({}, { refetchOnMountOrArgChange: true });
    const filter = useSelector(getFilter);
    const normalizedFilter = filter.toLowerCase();

    if (data === undefined) { return }
    const items = data.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (<div>
        <h2 className={style.container_title}>Your contacts</h2>
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
    </div>

    );
};


export default ContactList;