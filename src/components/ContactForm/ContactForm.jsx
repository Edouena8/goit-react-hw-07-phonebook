import { Field, Form, Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

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

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    onSubmit(name, number);
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
