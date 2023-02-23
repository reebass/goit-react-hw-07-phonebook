import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Item, List } from './ContactsList.styled';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts
    .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
    .sort((firstName, secondName) =>
      firstName.name.localeCompare(secondName.name)
    );
};

export const ContactList = () => {
  const arrContacts = useSelector(getContacts)
  const filter = useSelector(getFilter)


  const visibleContacts = getVisibleContacts(arrContacts, filter)

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



