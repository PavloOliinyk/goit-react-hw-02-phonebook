import React, { Component } from 'react';
import ContactForm from './ContactForm';
// import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onInputChange = e => {
    this.setState({ value: e.target.value });
  };

  addContact(contact) {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: [...this.state.contacts, contact],
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
