import { langsList } from '@/features/LangSelect/constants';
import { IProps } from '@/features/LangSelect/types';
import Form from 'react-bootstrap/esm/Form';

const LangSelect = ({ selected, onSelect }: IProps) => {
  return (
    <Form.Select value={selected} onChange={(e) => onSelect(e.target.value)}>
      {langsList.map((elem) => (
        <option key={elem.value} value={elem.value}>
          {elem.title}
        </option>
      ))}
    </Form.Select>
  );
};

export default LangSelect;
