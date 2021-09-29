import React, { Component } from "react";

class Contact extends Component {
  render() {
    const {
      contact: { name, number, id },
      deleteContact
    } = this.props;

    return (
      <li>
        <span>{name}:</span>
        <span>{number}</span>
        <button onClick={() => deleteContact(id)}>Delete contact</button>
      </li>
    );
  }
}

export default Contact;
