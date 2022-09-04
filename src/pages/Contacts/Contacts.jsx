import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import style from '../Contacts/Contacts.module.css';


export default function Contacts() {

    return (
        <div className={style.container}>
            <ContactForm />
            <Filter />
            <ContactList />
        </div>
    )
}