import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button.styled';
import { List, Item } from './ContactList.styled';

export const ContactList = ({ contacts, onRemoveContact }) => {
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
};

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
