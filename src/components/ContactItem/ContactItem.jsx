import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import { Button, ContactWrap, Name, Number } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice'


export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch()
  const onDeliteContact = (contactId) => dispatch(deleteContact(contactId))

  return (
    <>
      <ContactWrap>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </ContactWrap>
      <Button type="button" onClick={() => onDeliteContact(id)}>
        <IoMdClose size={25} />
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
