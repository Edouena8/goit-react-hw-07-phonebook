import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toggleModal } from 'redux/modalSlice';
import { addContact } from 'redux/operation';
import { selectContacts, selectModal } from 'redux/selectors';
import {
  ErrorText,
  FormInput,
  FormWrap,
  LabelText,
  LabelWrap,
  ModalBtn,
} from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string(
    "Name main y contaonly letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  ).required('Name is a required field'),

  phone: Yup.string(
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  )
    .min(3, 'Number must be at least 3 characters!')
    .max(12, 'Number must be at most 10 characters!')
    .required('Number is a required field'),
});

const initialValues = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  const duplicateContact = name => {
    const normalizedName = name.toLowerCase().trim();

    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    if (duplicateContact(name)) {
      return toast.error(`${name} is already in contacts`, {
        autoClose: 3000,
      });
    }

    dispatch(addContact({ name, phone }));
    toast.success(`Contact ${name} added successfully!`, {
      autoClose: 3000,
    });
    dispatch(toggleModal(modal));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <FormWrap>
        <LabelWrap>
          <LabelText>Name</LabelText>
          <FormInput type="text" name="name" />
          <ErrorText name="name" component="p" />
        </LabelWrap>

        <LabelWrap>
          <LabelText>Number</LabelText>
          <FormInput type="tel" name="phone" />
          <ErrorText name="phone" component="p" />
        </LabelWrap>

        <div>
          <ModalBtn type="submit">Add contact</ModalBtn>
          <ModalBtn type="button" onClick={() => dispatch(toggleModal(modal))}>
            Close
          </ModalBtn>
        </div>
      </FormWrap>
    </Formik>
  );
};

export default ContactForm;
