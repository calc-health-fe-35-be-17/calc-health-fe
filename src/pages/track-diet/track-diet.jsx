import { Form } from "react-bootstrap";
import ButtonPrimary from "../../components/button/button-primary";
import './track-diet.css'

function TrackDiet(){
    return(
        <>
            <div id="diet">
                <h1>Kalkulator Berat Badan</h1>
                <div id="calculator">
                    <Form>
                        <Form.Label className="label">Berat Badan</Form.Label>
                        <Form.Control className='input' type='number' placeholder='Berat Badan (KG)'/>
                        <Form.Label className="label">Tinggi Badan</Form.Label>
                        <Form.Control className='input' type='number' placeholder='Tinggi Badan (CM)'/>
                        <div id="hitung">
                            <ButtonPrimary style="hitung" >HITUNG</ButtonPrimary>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default TrackDiet