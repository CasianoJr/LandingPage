import React from 'react'
import {Col, Row, Button, Container} from 'react-bootstrap'


export default function Landing3() {
    return (
        <Container>
            <Row className="text-center">
                <Col md={8} className="mx-auto mt-lg-5">
                    <div className="display-4 mt-lg-5 pt-4">
                        Upskill your Virtual Assistants to their full potential
                    </div>
                   <div className="display-3 my-3 light-dark">
                    <i className="fas fa-play-circle"></i>
                   </div>
                    <div>
                        <Button variant="outline-light" className="p-3" size="large"> WATCH THE VIDEO AND FIND OUT HOW</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
