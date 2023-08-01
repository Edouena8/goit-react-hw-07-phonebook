import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toggleModal } from 'redux/modalSlice';
import { addContact } from 'redux/operation';
import { getContacts, getModal } from 'redux/selectors';

const SignupSchema = Yup.object().shape({
  name: Yup.string(
    "Name main y contaonly letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  ).required('Name is a required field'),

  phone: Yup.string(
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  )
    .min(3, 'Number must be at least 3 characters!')
    .max(10, 'Number must be at most 10 characters!')
    .required('Number is a required field'),
});

const initialValues = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const modal = useSelector(getModal);
  const dispatch = useDispatch();

  const duplicateContact = name => {
    const normalizedName = name.toLowerCase().trim();

    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    if (duplicateContact(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, phone }));
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
          <Field type="tel" name="phone" />
          <ErrorMessage name="phone" component="p" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
