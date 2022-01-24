import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts-actions';
import { ContactElement } from "../ContactElement/ContactElement";
import { getVisibleContact } from '../../redux/contacts-selectors';
import s from './ContactList.module.css';

export const ContactList = () => {
    const contacts = useSelector(getVisibleContact);
    const dispatch = useDispatch();

    const onDeleteContact=(id)=>dispatch(actions.deleteContact(id))

    return (
        <ul className={s.list}>
            {contacts.map(({id, name, number}) => {
                return (
                    <li className={ s.item} key={id}>
                        <ContactElement
                            name={name}
                            number={number}
                            id={id}
                            onDelete={()=>onDeleteContact(id)}
                        />
                    </li>
                )  
            })}
            
        </ul>
    )
}


