import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

class Contact extends Component {
  render() {
    const {
      contact: { name, number, id },
      deleteContact,
    } = this.props;

    return (
      <li className={s.card}>
        <div className={s.cardContent}>
          <p className={s.cardInfo}>{name}</p>
          <p className={s.cardInfo}>{number}</p>
          <button className={s.cardButton} onClick={() => deleteContact(id)}>
            Delete contact
          </button>
        </div>
      </li>

      // <li>
      //   <span>{name}:</span>
      //   <span>{number}</span>
      //   <button onClick={() => deleteContact(id)}>Delete contact</button>
      // </li>
    );
  }
}

Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contact: PropTypes.objectOf(PropTypes.string.isRequired),
};

export default Contact;
