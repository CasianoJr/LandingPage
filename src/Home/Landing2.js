import React from 'react'
import {Col, Row, Button, Card, Container} from 'react-bootstrap'


export default function Landing2() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div style={{minHeight: "45vh"}}>&nbsp;</div>
                    <div className="h4 text-center">
                        Handpicked candidates with great potentials
                    </div>
                    <div className="underline-bottom mx-md-4">&nbsp;</div>
                    <p className="mx-md-5 text-justify">
                   With our skilled Virtual Assistant on our marketplace, any busidness can tacle wide range of project from graphic designing to SEO blogging, name it all. We got you covered!
                    </p>
                    <div className="d-flex justify-content-center">
                    <Button className="mt-4 p-3 shadow-large" size="lg" variant="danger">
                        START YOUR HIRING PROCESS NOW
                    </Button>
                    </div>
                </Col>
                <Col md={6} className="my-5 pt-5">
                    <Card className="text-dark py-5 px-3">
                    <div className="h5 oswald mx-5 mb-3 text-center">
                        SUBSCRIBE TO OUR PREMIUM PACKAGE AND HIRE YOUR OWN VIRTUAL STAFF
                    </div>
                    <div className="lead text-center">PRO ENTREPRENEUR PACKAGE</div>
                    <ul className="checked-items mx-5">
                <li>
                  <input type="checkbox" readOnly checked /> UNLIMITTED JOB POSTING
                </li>
                <li>
                  <input type="checkbox" readOnly checked /> Job displayed for 30 days
                </li>
                <li>
                  <input type="checkbox" readOnly checked /> Weekly featured job ads.
                </li>
                <li>
                  <input type="checkbox" readOnly checked /> Email and chat support 24/7
                  Unlimitted download
                </li>
                <li>
                  <input type="checkbox" readOnly checked /> Candidate resume to PDFQuick
                  VA Skilled Matching
                </li>
                <li>
                  <input type="checkbox" readOnly checked /> Access to exclusive Facebook
                  Community
                </li>
              </ul>
              <button className="btn btn-primary mx-5 p-3 h3 border rounded-pill">
                  LEARN MORE ABOUT ADVANTAGES
                </button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
