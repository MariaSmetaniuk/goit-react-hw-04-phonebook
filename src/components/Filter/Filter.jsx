import PropTypes from 'prop-types';
import { Label, Field } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <span>Find contacts by name:</span>
      <Field type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
