import {useState} from "react";
import { nanoid } from "nanoid";

import { FormStyle, Label, Input, Button } from "./ContactForm.styled";


export const ContactForm = ({onSubmit}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();

    if (name === onSubmit({ name, number })) {
      return;
    }
    reset();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

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

  const reset = () => {
    setName('');
    setNumber('');
  };


  return(
    <>
    <form onSubmit={handleSubmit}>
    <FormStyle>      
      <Label htmlFor={nameInputId}>
        Name 
        <Input
          type='text' 
          name='name'
          value={name} 
          onChange={handleChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required='Name required'
        />
      </Label> 

      <Label htmlFor={nameInputId}>
        Number 
        <Input
          type='tel' 
          name='number'
          value={number} 
          onChange={handleChange}
          id={nameInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required='Phone number required'
        />
      </Label> 

      <Button type="submit" disabled={!name || !number} >Add contact</Button>
    </FormStyle>
    </form>
    </>
  )

}
