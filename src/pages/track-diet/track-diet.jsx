import { Container, Form, Row } from 'react-bootstrap';
import ButtonPrimary from '../../components/button/button-primary';
import './track-diet.css';

function TrackDiet() {
  return (
    <>
      <Container className="my-5">
        <Row className="flex-column justify-content-center align-items-center gap-lg-5">
          <h1 className="title-diet text-center">Kalkulator Berat Badan</h1>
          <div className="form-diet ">
            <Form>
              <Form.Group className="mb-4">
                <Form.Label className="label">Berat Badan</Form.Label>
                <Form.Control
                  className="input-calc input"
                  type="number"
                  placeholder="Berat Badan (KG)"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label mt-3">Tinggi Badan</Form.Label>
                <Form.Control
                  className="input-calc input"
                  type="number"
                  placeholder="Tinggi Badan (CM)"
                />
              </Form.Group>
              <div className="d-flex justify-content-center align-items-center">
                <ButtonPrimary style="daftar w-50 py-2 mt-5">
                  HITUNG
                </ButtonPrimary>
              </div>
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default TrackDiet;