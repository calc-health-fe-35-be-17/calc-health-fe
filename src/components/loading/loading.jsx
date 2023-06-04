import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="success" />
    </div>
  );
};

export default Loading;
