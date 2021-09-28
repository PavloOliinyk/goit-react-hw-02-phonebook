import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map(contact => {
          const contactId = uuidv4();

          return (
            <li key={contactId}>
              {contact.name}: {contact.number}
              <button onClick={() => this.props.deleteContact(contact.id)}>
                Delete contact
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
