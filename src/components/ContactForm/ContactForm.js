import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import actions from '../../redux/contacts-actions';
import { getContacts } from '../../redux/contacts-selectors';

import s from './ContactForm.module.css';


export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const includeName = contacts.find(contact => contact.name === name);
        // (includeName !== undefined) ?
        // (toast.error(`${name} is already in contacts`)
        // ) :
        //     dispatch(actions.addContact(name, number));
        
        if (includeName !== undefined) {
            toast.error(`${name} is already in contacts`)
        } else {
            dispatch(actions.addContact(name, number));
            toast.success(`contact ${name} added`);
        }
        
            

        setName('');
        setNumber('');
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }

    };
    
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}> Name
                <input className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                       onChange={handleChange}
                       value={name}
                />
            </label>
            <label className={s.label}> Namber
                <input className={s.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                       onChange={handleChange}
                       value={number}
                />
            </label>
            <button type="submit" className={s.btnAddContact}>
                <span className={s.btnText}>Add contact</span>
            </button>
            
        </form>
    )

}






