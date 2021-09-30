import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <div className={s.screenBodyItem}>
        <label className={s.appFormGroup}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
            className={s.appFormControl}
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
