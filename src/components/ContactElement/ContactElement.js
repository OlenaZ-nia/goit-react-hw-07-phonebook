import PropTypes from 'prop-types';
import s from './ContactElement.module.css';

export const ContactElement = ({ name, number, onDelete }) => {
    return (
        <>
            <p className={s.contact}>{name}: <span className={s.tel}>{number}</span></p>
            <button
                type="button"
                className={s.btn}
                onClick={onDelete}
            >
                Delete
            </button>
        </>
    )
}

ContactElement.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};