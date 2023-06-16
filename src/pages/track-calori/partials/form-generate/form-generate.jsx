import InputLabel from '../../component/input-label/input-label';
import ButtonPrimary from '../../../../components/button/button-primary/button';
import { Col, Form, Row } from 'react-bootstrap';
import Box from '../../component/box/box';

import './form-generate.css';

export default function FormGenerate({ handleSubmit, caloriesNeed }) {
  return (
    <Box>
      <h2 className="track-calori__title">
        Hitung Kebutuhan Kalori Harian Kalian Dulu Yaa
      </h2>
      <Row className="track-calori__row justify-content-between">
        <Col md={6}>
          <Form className="w-full" onSubmit={handleSubmit}>
            <InputLabel label="Umur" name="age" />
            <InputLabel label="Berat Badan" name="weight" />
            <InputLabel label="Tinggi Badan" name="height" />
            <InputLabel
              label="Jenis Kelamin"
              name="gender"
              type="select"
              options={['Pria', 'Wanita']}
            />
            <ButtonPrimary>Generate</ButtonPrimary>
          </Form>
        </Col>
        <Col md={5} className="col-right">
          <div className="col-right__wrapper bg-blue">
            <h4>Kalori yang anda butuhkan dalam sehari adalah :</h4>
            <div className="mt-2 w-100 h-50 d-flex justify-content-center align-items-center">
              {caloriesNeed && (
                <h3 className="text-center">{caloriesNeed} Kkal</h3>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Box>
  );
}
