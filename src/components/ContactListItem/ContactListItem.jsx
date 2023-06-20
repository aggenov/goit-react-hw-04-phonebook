
import { SearchList, ContactItem, Text, Button } from './ContactListItem.styled';

export const ContactListItem = ({renderListItem: {id, name, number}, onDeleteContact }) => {

  return ( 

    <ContactItem key={id}>
      <SearchList>
        <Text>{name}:</Text>
        <Text>{number}</Text>
      </SearchList>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ContactItem> 
     
  );
};