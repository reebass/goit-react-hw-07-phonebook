import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import { Button, ContactWrap, Name, Number } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations'


export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch()
  const onDeliteContact = () => dispatch(deleteContact(id))

  return (
    <>
      <ContactWrap>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </ContactWrap>
      <Button type="button" onClick={onDeliteContact}>
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
