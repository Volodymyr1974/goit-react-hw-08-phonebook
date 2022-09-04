import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from "redux/contactsSlice";
import TextField from '@mui/material/TextField';

const Filter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(getFilter);
    return (
        <div className={style.filter_box}>
            <TextField
                id="standard-basic"
                label="find contacts by name ==>"
                type="text"
                variant="standard"
                value={filterValue}
                onChange={e => dispatch(changeFilter(e.currentTarget.value))}
                sx={{
                    pading: 4,
                    display: 'block',
                    width: 230,
                    '& .MuiInputLabel-root': {
                        left: 0,
                    },
                }}
            />
        </div>

    )
};

export default Filter;