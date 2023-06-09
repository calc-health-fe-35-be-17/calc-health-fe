/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { fetchFoodDetail } from '../../redux/detail-food/action';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import Loading from '../../components/loading/loading';
import Nutrition from '../../components/nutrition/nutrition';
import ButtonPrimary from '../../components/button/button-primary/button';
import NavBack from '../../components/nav-back/nav-back';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './detail-food.css';

function DetailFood(props) {
  const id = useParams();
  useEffect(() => {
    props.fetchdetailfood(id);
  }, []);
  const navigate = useNavigate();

  return (
    <Container>
      <button
        style={{ border: 'none', backgroundColor: 'transparent' }}
        onClick={() => navigate(-1)}
      >
        <NavBack />
      </button>
      <div>
        {props.detailfood.loading ? (
          <Loading />
        ) : props.detailfood.error ? (
          <h2>{props.detailfood.error}</h2>
        ) : (
          <>
            <Row className="my-5">
              {console.log(props.detailfood.data)}
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="image">
                  <img
                    src={props.detailfood.data.image}
                    alt="food"
                    className="img-fluid rounded bg-none"
                  />
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-3">
                <div className="text">
                  <h2>{props.detailfood.data.title}</h2>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: props.detailfood.data.summary,
                    }}
                  ></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Stack className="d-flex flex-row flex-wrap align-items-center p-md-5 gap-5">
                {props.detailfood.data.nutrition ? (
                  <Stack className="mt-5 gap-4">
                    <h3>Information Nutrition</h3>
                    {props.detailfood.data.nutrition.nutrients.map(
                      (nuts, index) => {
                        if (nuts.name === 'Calories') {
                          return (
                            <Nutrition
                              key={index}
                              icon={'/icons/fire-cal.svg'}
                              name={'Calories'}
                              value={`${nuts.amount} ${nuts.unit}`}
                            />
                          );
                        }
                        if (nuts.name === 'Fat') {
                          return (
                            <Nutrition
                              key={index}
                              icon={'/icons/cloud-meatball.svg'}
                              name={'Fat'}
                              value={`${nuts.amount} ${nuts.unit}`}
                            />
                          );
                        }
                        if (nuts.name === 'Carbohydrates') {
                          return (
                            <Nutrition
                              key={index}
                              icon={'/icons/wheat-awn.svg'}
                              name={'Carbohydrates'}
                              value={`${nuts.amount} ${nuts.unit}`}
                            />
                          );
                        }
                        if (nuts.name === 'Protein') {
                          return (
                            <Nutrition
                              key={index}
                              icon={'/icons/dna.svg'}
                              name={'Protein'}
                              value={`${nuts.amount} ${nuts.unit}`}
                            />
                          );
                        }
                      }
                    )}
                  </Stack>
                ) : (
                  <></>
                )}

                <Stack className="d-flex justify-content-center align-items-center gap-3 mb-4">
                  <h2>Health Score</h2>
                  <div
                    className="carbon-circle"
                    style={{
                      width: 200,
                    }}
                  >
                    <CircularProgressbar
                      value={props.detailfood.data.healthScore}
                      text={`${props.detailfood.data.healthScore}%`}
                      styles={buildStyles({
                        pathColor: `rgba(17, 153, 158, ${
                          props.detailfood.data.healthScore / 100
                        })`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                    />
                  </div>
                  <ButtonPrimary style={'button-save mt-4'}>
                    Save Food
                  </ButtonPrimary>
                </Stack>
              </Stack>
            </Row>
          </>
        )}
      </div>
    </Container>
  );
}

const mapStateProps = state => {
  return {
    detailfood: state.detailFood,
  };
};

const mapDispatchProps = dispatch => {
  return {
    fetchdetailfood: id => dispatch(fetchFoodDetail(id)),
  };
};

export default connect(mapStateProps, mapDispatchProps)(DetailFood);
