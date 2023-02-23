import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container, Subtitle, Title } from './App.styled';
import { ButtonWithIcon } from './ButtonWithIcon/ButtonWithIcon';
import { Modal } from './Modal/Modal';
import { HiPlusCircle } from 'react-icons/hi';
import { Message } from './Message/Message';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';




export const App = () => {

  const [showModal, setShowModal] = useState(false);
  const arrContacts = useSelector(getContacts)

  const togleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      {arrContacts.length === 0 && <Message text="You don't have contacts yet" />}
      <ButtonWithIcon onClick={togleModal} aria-label="add phone">
        <HiPlusCircle size={20} />
        ADD PHONE
      </ButtonWithIcon>
      {showModal && (
        <Modal onClose={togleModal}>
          <ContactForm onClose={togleModal}/>
        </Modal>
      )}
      {arrContacts.length !== 0 && (
        <>
          <Subtitle>Contacts</Subtitle>
          <Filter/> 
          <ContactList
          />
        </>
      )}
    </Container>
  );
};
