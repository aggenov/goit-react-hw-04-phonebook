import {useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {ContactForm} from "components/ContactForm/ContactForm";
import {ContactList} from "components/ContactList/ContactList";
import {Filter} from "components/Filter/filter";

import { Box } from "./App.styled";  


 export const App = () => {

  const [contacts, setContacts] = useState(() => {
     return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  const addContact = ({name, number}) => {
    const newContact = {
      name,
      number,
      id: nanoid(), 
    } 
      
    if (chekName(newContact.name) || chekNumber(newContact.number)) {
      Notify.failure(`${newContact.name} is already in contacts`, Notify.init({
        clickToClose: true,
        position: 'center-top',
      }));
      return newContact.name;
    }

    setContacts(prev => [...prev, newContact]);
    console.log(contacts)
  }

    const chekName = newName => {
      return contacts.find(({ name }) => name.toLowerCase() === newName.toLowerCase());
   };
   
    const chekNumber = newNumber => {
      return contacts.find(({ number }) => number === newNumber);
    };

    const changeFilter = event => {
      setFilter( event.currentTarget.value );
    };
  
    const deleteContact = contactId => {
      setContacts(contacts.filter(contact => contact.id !== contactId));
    };


  //-----------------------------------------------------------------------------------
    // componentDidUpdate 
    useEffect (() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    },[contacts])
  //--------------------------------------------------------------------------------
 
    const visibleContacts = contacts.filter(contact =>
       contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <>
      <Box>             
        <h1>Phonebook</h1>
        <ContactForm onSubmit = {addContact}/>
      </Box>

      <Box>  
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList 
        contacts={visibleContacts} 
        onDelete={deleteContact} 
         />        
      </Box> 
    </>
    );
  
  
};


