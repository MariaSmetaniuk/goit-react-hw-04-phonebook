import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button.styled';
import { List, Item } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { contacts, onRemoveContact } = this.props;
    if (contacts.length === 0) return;
    return (
      <List>
        {contacts.map(({ name, id, number }) => (
          <Item key={id}>
            <span>{name}:</span> {number}
            <Button
              type="button"
              onClick={() => {
                onRemoveContact(id);
              }}
            >
              Delete
            </Button>
          </Item>
        ))}
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
