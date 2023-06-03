import { Form, FormControl } from 'react-bootstrap';
import ButtonPrimary from '../Button/ButtonPrimary/Button';

export default function Search() {
  return (
    <Form className="rounded d-flex flex-row w-75">
      <FormControl type="Search" className="me-2" aria-label="Search" />
      <ButtonPrimary type="submit">Search</ButtonPrimary>
    </Form>
  );
}
