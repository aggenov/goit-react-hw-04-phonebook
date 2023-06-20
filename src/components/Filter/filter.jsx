
import { Label, Input } from './Filter.styled'

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange}></Input>
    </Label>
  );
};