import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsApi';
import toast from 'react-hot-toast';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
const ContactItem = ({ id, name, number }) => {
    const [deleteContact, { isLoading }] = useDeleteContactMutation();
    const handleDeleteContact = async values => {
        try {
            await deleteContact(values);
            toast.success('Contact deleted');

        } catch (error) {
            toast.error('Error removing contact');
            console.log(error);
        }
    };
    return (
        <div className={style.item}>
            {`${name} :      ${number}`}

            <LoadingButton
                sx={{
                    fontSize: 20,
                }}
                type="button"
                loading={isLoading === id}
                onClick={() => handleDeleteContact(id)}
                aria-label="Delete contact"
                endIcon={<DeleteForeverOutlinedIcon />}
            >
            </LoadingButton>

        </div>


    )
};
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,

};
export default ContactItem;