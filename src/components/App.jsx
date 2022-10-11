import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const id = nanoid();

    const isContactAdded = contacts.find(contact => name === contact.name);

    if (isContactAdded) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, id, number }],
      };
    });
  };

  removeContact = async idToRemove => {
    await this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== idToRemove),
      };
    });

    if (this.state.contacts.length === 0) {
      this.setState({ filter: '' });
    }
  };

  changeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Box p={5} as="main">
        <Box
          width="430px"
          p={4}
          mx="auto"
          bg="white"
          borderRadius="md"
          boxShadow="primary"
          color="text"
        >
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact} />
          <h2>Contacts</h2>
          <Box mt={4}>
            {contacts.length > 0 ? (
              <>
                <Filter value={filter} onChange={this.changeFilter} />
                <ContactList
                  contacts={filter === '' ? contacts : filteredContacts}
                  onRemoveContact={this.removeContact}
                />
              </>
            ) : (
              <Notification />
            )}
          </Box>
        </Box>
        <GlobalStyle />
      </Box>
    );
  }
}
