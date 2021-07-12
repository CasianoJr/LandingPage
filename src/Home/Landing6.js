import React from 'react'
import {Col, Row, Container, Button} from 'react-bootstrap'

export default function Landing6() {
    return (
        <Container>
            <Row>
                <Col sm={2} className="text-center my-5">
                    <div>VA</div>
                    <div className="oswald font-italic">JOB MARKET</div>
                    <div className="mt-3 small">© VAJOBMARKET.COM</div>
                    <div className="small">All right reserved</div>
                </Col>
                <Col sm={10}>
                    <div className="mt-5 pt-3 mb-3 lead">Be a rockstar entrepreneur. Save time, money and gain, freedom with VA Job Market</div>
                    <Row className="small">
                        <Col sm={2}>
                        <div>Solution</div>
                        <div>About Us</div>
                        <div>Contact</div>
                        <div>Privacy Policy</div>
                        </Col>
                        <Col sm={2}>
                        <div>Blog</div>
                        <div>How it works</div>
                        <div>Register</div>
                        <div>Job Search</div>
                        </Col>
                        <Col sm={4}>
                            <div>
                                <div>Subscribe to our newslater</div>
                                <div className="d-flex border">
                                <input className="form-control" placeholder="Email Address"></input>
                                <Button>OK</Button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3} className="text-white ml-auto lead d-flex justify-content-around">
                        <span><i className="fab fa-facebook-f"></i></span>
                        <span><i className="fab fa-twitter"></i></span>
                        <span><i className="fab fa-instagram"></i></span>
                        <span><i className="fab fa-youtube"></i></span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}
