import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts-operations';
import { ContactElement } from "../ContactElement/ContactElement";
import { getVisibleContact } from '../../redux/contacts-selectors';
import s from './ContactList.module.css';

export const ContactList = () => {
    const contacts = useSelector(getVisibleContact);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);

    const onDeleteContact=(id)=>dispatch(contactsOperations.deleteContact(id))

    return (
        <ul className={s.list}>
            {contacts.map(({id, name, phone}) => {
                return (
                    <li className={ s.item} key={id}>
                        <ContactElement
                            name={name}
                            number={phone}
                            id={id}
                            onDelete={()=>onDeleteContact(id)}
                        />
                    </li>
                )  
            })}
            
        </ul>
    )
}


