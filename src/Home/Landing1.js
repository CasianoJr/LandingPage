import React from 'react'
import {Col, Row, Button, Card, Container, Form} from 'react-bootstrap'


export default function Landing1() {
    return (
        <Container>
        <Row>
            <Col md={6} className="mt-4">
                <div className="pt-5 mt-5 h1 oswald">YOUR GO-TO PARTNER IN HIRING THE BEST VIRTUAL ASSISTANTS</div>
                <div className="lead text-justify">The leading marketplace in helping entrepreneurs in finding great talents to scale their business that offers the most affordable rates. Hire your Virtual Assitant today!</div>
                <Button variant="outline-light my-3">CLICK HERE TO FIND OUT NOW <i className="mx-2 fas fa-caret-right"></i></Button>
                <Card className="p-3">
                    <Form>
                        <Row>
                            <Col lg={5} className="my-1">
                            <Form.Control placeholder="Start your search here" />
                            </Col>
                            <Col lg={4} className="my-1">
                            <select className="form-control">
                                <option value={0}>Category</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                            </select>
                            </Col>
                            <Col lg={3} className="text-center my-1">
                            <Button> <i className="fas fa-search"></i> Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
                <div className="d-flex justify-content-end"> 
                    <div className="btn text-white">
                         Advance Search <i className="ml-2 mt-1 fas fa-caret-right"></i> 
                    </div>
                </div>
            </Col>
            <Col md={6}>
            </Col>
        </Row>
        </Container>
    )
}
