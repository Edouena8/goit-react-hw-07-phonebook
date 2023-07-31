import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from 'redux/contactsSlice';
import { toggleModal } from 'redux/modalSlice';

const SignupSchema = Yup.object().shape({
  name: Yup.string(
    "Name main y contaonly letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  ).required('Name is a required field'),

  number: Yup.string(
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  )
    .min(3, 'Number must be at least 3 characters!')
    .max(10, 'Number must be at most 10 characters!')
    .required('Number is a required field'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const duplicateContact = name => {
    const normalizedName = name.toLowerCase().trim();

    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (duplicateContact(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
    dispatch(toggleModal(modal));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="p" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="p" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
