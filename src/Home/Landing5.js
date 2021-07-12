import React from 'react'
import {Container, Carousel, Row, Col} from 'react-bootstrap'
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import carousel3 from '../images/carousel3.jpg';

export default function Landing5() {
    return (
        <Container>
            <Carousel className="p-3">
                <Carousel.Item>
                    <Row>
                        <Col>
                            <img
                            className="card p-2 mx-4" 
                            height="350"
                            src={carousel1}
                            alt="First slide"/>
                        </Col>
                        <Col>
                            <h3 className="oswald h3"> Our Top ReWill Hiring a Virtual Assistant Help You Survive This Crisis?</h3>
                           <div className="mb-3">
                               <span className="small mx-1"><i className="fas fa-clock"></i> 1  hour ago</span>
                               <span className="small mx-2"><i className="fas fa-heart"></i> 609</span>
                               <span className="small mx-2"><i className="fas fa-thumbs-up"></i> 120</span>
                               <span className="small mx-2"><i className="fas fa-share"></i> SHARE</span>
                           </div>
                            <p>
                                Pandemic had make this year a tough year for all of us. As everyone stays at home on lockdown, so are businesses. But as business owners we're also just humans that worry about our own family and want to take care of them, but how do we do such, without pausing our business?
                            </p>
                                <div>
                                    <Row className="mt-2">
                                      <Col sm={1}>
                                      <div className="h3 mt-2"><i className="fas fa-user"></i></div>
                                      </Col>
                                      <Col sm={3} className="mt-2">
                                          <div className="small">Name Surename</div>
                                          <div className="small">Author/Blogger</div>
                                      </Col>
                                      <Col className="d-flex justify-content-center">
                                        <button className="btn btn-outline-light">Read More</button>
                                      </Col>
                                    </Row>
                                </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <img
                            className="card p-2 mx-4" 
                            height="350"
                            src={carousel2}
                            alt="First slide"/>
                        </Col>
                        <Col>
                            <h3 className="oswald h3">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h3>
                           <div className="mb-3">
                               <span className="small mx-1"><i className="fas fa-clock"></i> 1  hour ago</span>
                               <span className="small mx-2"><i className="fas fa-heart"></i> 609</span>
                               <span className="small mx-2"><i className="fas fa-thumbs-up"></i> 120</span>
                               <span className="small mx-2"><i className="fas fa-share"></i> SHARE</span>
                           </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis ipsum velit. Donec maximus, elit in rutrum tristique, nisl purus dictum mauris, eu tempor ante tellus vel turpis. Suspendisse rhoncus ipsum nec cursus pharetra. Aliquam orci ante, efficitur vitae pulvinar quis, venenatis vitae ligula. Praesent malesuada mollis elit in commodo.
                            </p>
                                <div>
                                    <Row className="mt-2">
                                      <Col sm={1}>
                                      <div className="h3 mt-2"><i className="fas fa-user"></i></div>
                                      </Col>
                                      <Col sm={3} className="mt-2">
                                          <div className="small">Name Surename</div>
                                          <div className="small">Author/Blogger</div>
                                      </Col>
                                      <Col className="d-flex justify-content-center">
                                        <button className="btn btn-outline-light">Read More</button>
                                      </Col>
                                    </Row>
                                </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <img
                            className="card p-2 mx-4" 
                            height="350"
                            src={carousel3}
                            alt="First slide"/>
                        </Col>
                        <Col>
                            <h3 className="oswald h3">There is no one who loves pain itself, who seeks after it.</h3>
                           <div className="mb-3">
                               <span className="small mx-1"><i className="fas fa-clock"></i> 1  hour ago</span>
                               <span className="small mx-2"><i className="fas fa-heart"></i> 609</span>
                               <span className="small mx-2"><i className="fas fa-thumbs-up"></i> 120</span>
                               <span className="small mx-2"><i className="fas fa-share"></i> SHARE</span>
                           </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id metus id ipsum viverra semper. Mauris ornare non augue quis mattis. Nullam rutrum eget nibh vitae luctus. Curabitur suscipit hendrerit tincidunt. Ut semper commodo nibh in finibus. Donec facilisis euismod neque tempor...
                            </p>
                                <div>
                                    <Row className="mt-2">
                                      <Col sm={1}>
                                      <div className="h3 mt-2"><i className="fas fa-user"></i></div>
                                      </Col>
                                      <Col sm={3} className="mt-2">
                                          <div className="small">Name Surename</div>
                                          <div className="small">Author/Blogger</div>
                                      </Col>
                                      <Col className="d-flex justify-content-center">
                                        <button className="btn btn-outline-light">Read More</button>
                                      </Col>
                                    </Row>
                                </div>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
