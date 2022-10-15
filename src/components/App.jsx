import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Notification } from './Notification/Notification';

export const App = () => {
  // роблю ліниву ініціалізацію, де беру контакти з localStorage
  const [contacts, setContacts] = useState(() => {
    const oldContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(oldContacts);

    return parsedContacts ?? [];
  });
  const [filter, setFilter] = useState('');

  // при оновленні стейту контактів записую в localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const id = nanoid();

    const isContactAdded = contacts.find(contact => name === contact.name);

    if (isContactAdded) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, { name, id, number }]);
  };

  const removeContact = async idToRemove => {
    await setContacts(prevContacts => {
      return prevContacts.filter(({ id }) => id !== idToRemove);
    });

    if (contacts.length === 0) {
      setFilter('');
    }
  };

  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  const isContacts = contacts.length > 0;
  const isContactListShown = contacts.length > 0 && filteredContacts.length > 0;

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
        <ContactForm onAddContact={addContact} />
        <h2>Contacts</h2>
        <Box mt={4}>
          {isContacts && <Filter value={filter} onChange={changeFilter} />}
          {isContactListShown && (
            <ContactList
              contacts={filter === '' ? contacts : filteredContacts}
              onRemoveContact={removeContact}
            />
          )}
          {!isContacts && <Notification />}
        </Box>
      </Box>
      <GlobalStyle />
    </Box>
  );
};
