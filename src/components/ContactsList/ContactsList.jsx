import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Item, List } from './ContactsList.styled';



export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts)

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
          />
        </Item>
      ))}
    </List>
  );
};



