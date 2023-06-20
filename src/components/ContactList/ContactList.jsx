
import { ContactListItem } from "components/ContactListItem/ContactListItem";

import { List } from "./ContactList.styled";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
    <List>    
        {contacts.map(contact => (
            <ContactListItem
              key={contact.id}
              renderListItem={contact}
              onDeleteContact={onDelete}
            />            
          )
        )}    
    </List>  
    </> 
  );
};