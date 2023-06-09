import { Container, Form, Row } from 'react-bootstrap';
import ButtonPrimary from '../../components/button/button-primary';
import './track-diet.css';
import { useState } from 'react';

function TrackDiet() {
  const [ weight, setWeight ] = useState('')
  const [ height, setHeight ] = useState('') 
  const [bmi, setBmi] = useState('')
  const [output, setOutput] = useState('')
  const [description, setDescription] = useState('')

  let calculatebmi = (event)=>{
    event.preventDefault()
    if(weight === '' || height === ''){
      alert("Please fill out the entire form")
    }
    else{
      let bmi = (weight/(height/100)**2)
      setBmi(bmi.toFixed(2))
      if(bmi<18.5){
        setOutput("UNDERWEIGHT")
        setDescription("Wahh berat badan kamu sudah dibawah batas berat normal nih sobat!! Sekarang kamu harus mulai mengatur pola makanan nih. Biar berat badan kamu cepat naik kamu perlu menambah konsumsi kalori 2800-3000 per harinya nih sobat. Makan yang lebih banyak ya sobat!! ")
      }else if(bmi>=18.5 && bmi<=24.9){
        setOutput("NORMAL")
        setDescription("Wahh hebat berat badan kamu normal nih sobat!! Itu artinya berat badan kamu tidak kurang ataupun berlebih. Pertahankan berat badan idealmu dengan mengonsumsi kalori 2500 per hari ya sobat!! ")
      }else if(bmi>=25 && bmi<=29.9){
        setOutput("OVERWEIGHT")
        setDescription("Wahh berat badan kamu sudah melebihi batas berat normal nih sobat!! Sekarang kamu harus mulai mengatur pola makanan nih. Biar berat badan kamu cepat turun kamu perlu konsumsi kalori 1100-1600 per harinya nih sobat. Jangan sampai kelebihan kalori yaa ")
      }else{
        setOutput("OBESITY")
        setDescription("Berat badan kamu sudah masuk ke kategory Obesitas sobat!! Sekarang kamu harus mulai mengatur pola makanan dan juga olah raga agar kamu dapat membakar kalori. Biar berat badan kamu cepat turun kamu perlu konsumsi kalori 1100-1600 per harinya nih sobat. Jangan sampai kelebihan kalori yaa")
      }
    }
  }

  let imgsrc;
  if(bmi===''){
    imgsrc=null
  }else if(bmi<18.5){
    imgsrc=('/images/underweight.png')
  }else if(bmi>=18.5 && bmi<=24.9){
    imgsrc=('/images/normal.png')
  }else if(bmi>=25 && bmi<=29.9){
    imgsrc=('/images/overweight.png')
  }else{
    imgsrc=('/images/obesity.png')
  }

  return (
    <>
      <Container className="my-5">
        <Row className="flex-column justify-content-center align-items-center gap-lg-5">
          <h1 className="title-diet text-center">Kalkulator Berat Badan</h1>
          <div className="form-diet ">
            <Form onSubmit={calculatebmi}>
              <Form.Group className="mb-4">
                <Form.Label className="label">Berat Badan</Form.Label>
                <Form.Control
                  id='bb'
                  className="input-calc input"
                  type="number"
                  placeholder="Berat Badan (KG)"
                  value={weight}
                  onChange={(e)=>setWeight(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label mt-3">Tinggi Badan</Form.Label>
                <Form.Control
                  id='tb'
                  className="input-calc input"
                  type="number"
                  placeholder="Tinggi Badan (CM)"
                  value={height}
                  onChange={(e)=>setHeight(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-center align-items-center">
                <ButtonPrimary style="hitung w-50 py-2 mt-5" type="submit">
                  HITUNG
                </ButtonPrimary>
              </div>
            </Form>
          </div>
          <div>
            <section className="result container col-lg-3 text-center col-sm-12 py-4">
              <h2 className='score'>Hasil Skor</h2>
              <h2 className='score'>{bmi}</h2>
            </section>
            <section className="result container d-flex justify-content-center align-items-center mt-5 col-lg-8 col-sm-12">
              <div className=" col-lg-5 col-sm-6 py-4">
                <img src={imgsrc} alt="" />
              </div>
              <div className=" col-lg-7 col-sm-6 py-4">
                <h3 className='score'>{output}</h3>
                <p>{description}</p>
                <ButtonPrimary>Rekomendasi Menu</ButtonPrimary>
              </div>
            </section>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default TrackDiet;