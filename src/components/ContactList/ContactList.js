import { useEffect } from 'react';
// import { useEffect, useCallback, useRef, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts-operations';
import { ContactElement } from "../ContactElement/ContactElement";
import { getVisibleContact } from '../../redux/contacts-selectors';
import s from './ContactList.module.css';

export const ContactList = () => {
    // const [page, setPage] = useState(1);
    // const loader = useRef(null);
    
    // const handleObserver = useCallback((entries) => {
    //       entries.forEach(entry => {
    // entry.isIntersecting
    //   ? entry.target.classList.add('observe')
    //     : entry.target.classList.remove('observe')
    //       })

    //     const target = entries[0];
    //     if (target.isIntersecting) {
    //         setPage(prev => prev + 1);
    //         console.log('isInter', target)
    //     }
    //     console.log(target)
    // }, []);

    // useEffect(() => {
    //     const option = {
    //         root: null,
    //         rootMargin: "0px",
    //         threshold: 0.5,
    //     };
    //     const observer = new IntersectionObserver(handleObserver, option);
        
    //     console.log(loader)
    //     if (loader.current) {observer.observe(loader.current)};
    // }, [handleObserver]);


    const contacts = useSelector(getVisibleContact);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);

    const onDeleteContact=(id)=>dispatch(contactsOperations.deleteContact(id))

    return (
         
            <ul className={s.list} >
            {contacts.map(({id, name, phone}) => {
                return (
                    // <li className={ s.item} key={id} ref={loader}>
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


