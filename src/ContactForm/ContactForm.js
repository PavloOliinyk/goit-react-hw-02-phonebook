import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={s.background}>
          <div className={s.container}>
            <div className={s.screen}>
              <div className={s.screenHeader}>
                <div className={s.screenHeaderLeft}>
                  <div className={`${s.screenHeaderButton} ${s.close}`}></div>
                  <div
                    className={`${s.screenHeaderButton} ${s.maximize}`}
                  ></div>
                  <div
                    className={`${s.screenHeaderButton} ${s.minimize}`}
                  ></div>
                </div>
                <div className={s.screenHeaderRight}>
                  <div className={s.screenHeaderEllipsis}></div>
                  <div className={s.screenHeaderEllipsis}></div>
                  <div className={s.screenHeaderEllipsis}></div>
                </div>
              </div>
              <div className={s.screenBody}>
                <div className={s.screenBodyItem}>
                  <label className={s.appFormGroup}>
                    Name
                    <input
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                      required
                      value={this.state.name}
                      onChange={this.handleChange}
                      className={s.appFormControl}
                    />
                  </label>
                  <label className={s.appFormGroup}>
                    Number
                    <input
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                      required
                      value={this.state.number}
                      onChange={this.handleChange}
                      className={s.appFormControl}
                    />
                  </label>
                  <button className={s.appFormButton}>Add contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
