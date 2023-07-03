// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactList.module.css'

// // Компонент списка контактов
// const ContactList = ({ contacts, onRemoveContact }) => (
//   <ul className={css.list}>
//     {contacts.map(contact => (
//       <li className={css.item} key={contact.id}>
//         <p className={css.text}>{contact.name + ' : ' + contact.number}</p>
//         {
//           // Кнопка удаления контакта

//           <button className={`${css.custom} ${css.btn9}`}
//             type="button"
//             name="delete"
//             onClick={() => onRemoveContact(contact.id)}
//           >
//             delete

//           </button>

//           // <button className={css.button}
//           //   type="button"
//           //   name="delete"
//           //   onClick={() => onRemoveContact(contact.id)}
//           // >
//           //   delete
//           // </button>
//         }
//       </li>
//     ))}
//   </ul>

// );

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onRemoveContact: PropTypes.func.isRequired,
// };

// export default ContactList;

// ===========================================================

import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
// import {
//   Btn,
//   Contacts,
//   ContactsItem,
//   Name,
//   Number,
// } from './ContactList.styled';

import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              {/* <p className={css.text}>{{ name } + ' : ' + { number }}</p> */}
              <p className={css.text}>{name}</p>
              <p className={css.text}>{number}</p>
              <button
                className={`${css.custom} ${css.btn9}`}
                type="button"
                name="delete"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
