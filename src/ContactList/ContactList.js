import React, { Component } from "react";

class ContactList extends Component {
  render() {
    return <ul>{this.props.children}</ul>;
  }
}

export default ContactList;
