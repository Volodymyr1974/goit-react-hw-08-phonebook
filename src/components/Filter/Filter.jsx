// import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from "redux/contactsSlice";
import TextField from '@mui/material/TextField';
const Filter = () => {

    const dispatch = useDispatch();
    const filterValue = useSelector(getFilter);
    return (
        <TextField
            id="standard-basic"
            label="Find contacts by name"
            type="text"
            variant="standard"
            value={filterValue}
            onChange={e => dispatch(changeFilter(e.currentTarget.value))}
            sx={{
                margin: '0 auto',
                display: 'block',
                width: 200,
                marginBottom: 4,
                '& .MuiInputLabel-root': {
                    left: 16,
                },
            }}
        />
    )
};

export default Filter;