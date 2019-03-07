import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Mohamed IDBRAHIM',
        email: 'idbrahimdev@gmail.com',
        phone: '0650303315'
      },
      {
        id: 2,
        name: 'Basma IDBRAHIM',
        email: 'basma@gmail.com',
        phone: '0650303316'
      },
      {
        id: 3,
        name: 'Walid IDBRAHIM',
        email: 'walid@gmail.com',
        phone: '0650303317'
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
