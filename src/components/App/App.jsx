import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';
import { AddBtn, Container, Header, HeaderWrap, Main } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'redux/modalSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectModal,
} from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Header>
        <Container>
          <HeaderWrap>
            <h1
              style={{
                fontSize: '40px',
                textShadow: '4px 4px 2px rgba(0,0,0,0.6)',
                color: '#ffffff',
              }}
            >
              Phonebook
            </h1>
            {items && <Filter />}
            <AddBtn type="button" onClick={() => dispatch(toggleModal(modal))}>
              Create contact
            </AddBtn>
          </HeaderWrap>
        </Container>
      </Header>

      <Main>
        <Container>
          <div>
            <h2
              style={{
                fontSize: '30px',
                textShadow: '4px 4px 2px rgba(0,0,0,0.6)',
                color: '#ffffff',
              }}
            >
              Contacts {`(${items.length})`}
            </h2>
            {isLoading && !error && <b>Request in progress...</b>}
          </div>
          {error && <p>{error}</p>}
          <ContactList />
          {modal && (
            <Modal>
              <ContactForm />
            </Modal>
          )}
        </Container>
        <ToastContainer />
      </Main>
    </div>
  );
}
