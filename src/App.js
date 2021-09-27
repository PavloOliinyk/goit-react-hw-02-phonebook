import React, { Component } from 'react';
// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addContact();
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  addContact = () => {
    const contact = {
      name: this.state.name,
      id: uuidv4(),
      number: this.state.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="First name, last name"
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" value="Добавить контакт">
            Add contact
          </button>
        </form>

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <div>
          <label>
            Find contacts by name
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={uuidv4()}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
