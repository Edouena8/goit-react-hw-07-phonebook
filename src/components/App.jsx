import shortid from 'shortid';
import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

const LS_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);
    const normalizedContacts = JSON.parse(contacts);
    
    this.setState({contacts: normalizedContacts});
  }

  componentDidUpdate(_, prevState) {
    const currState = this.state.contacts;

    if(prevState.contacts !== currState) {
      localStorage.setItem(LS_KEY, JSON.stringify(currState));
    }
  };

  addContact = (name, number) => {
    const {contacts} = this.state;
    const normalizedName = name.toLowerCase().trim();
    const isPresent = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isPresent) {
      return alert(`${name} is already in contacts`);
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(({id}) => id !== contactId),
    }));
  };

  handleFilter = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onSearch={this.handleFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
