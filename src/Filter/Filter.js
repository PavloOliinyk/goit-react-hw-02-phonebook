import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.props.filter}
            onChange={this.props.onChange}
          />
        </label>
      </div>
    );
  }
}

export default Filter;
