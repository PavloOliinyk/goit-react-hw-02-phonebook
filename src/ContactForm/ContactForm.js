import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        onInputChange
        <button type="button" onChange={this.onInputChange}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
