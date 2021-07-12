import React from 'react'
import {Col, Row, Button, Container} from 'react-bootstrap'


export default function Landing4() {
    const carrers = [
        {name: "Social Medial Manager", link: "#", icon: "fas fa-users"},
        {name: "Content Writer", link: "#",icon: "far fa-edit"},
        {name: "Credit Repair Assistant", link: "#",icon: "fas fa-money-check"},
        {name: "Executive Assistant", link: "#",icon: "fas fa-headset"},
        {name: "Appointment Setter", link: "#",icon: "fas fa-mail-bulk"},
        {name: "Digital Marketing Specialist", link: "#",icon: "fas fa-bullhorn"}
    ]
    const workers = [
        {name: "Name Surename", position: "Credit Card Specialist"},
        {name: "Name Surename", position: "Social Media Manager"},
        {name: "Name Surename", position: "Content Writer"},
        {name: "Name Surename", position: "Executive Assistant"},
    ]
    return (
        <Container className="my-5" style={{minHeight: "100vh"}}>
            <div className="text-center h1 oswald">Specialize Carrers</div>
            <div className="text-center">
                <Button variant="outline-secondary" className="rounded-pill small" size="sm">FIND OUT MORE</Button>
            </div>
            <Row className="text-center m-5 px-5">
                {carrers.map((carrer, idx)=>
                    <Col className="carrer-icons" sm={6} md={4} lg={2} key={idx}>
                        <div className="h3">
                            <i className={`${carrer.icon}`}></i>
                        </div>
                        {carrer.name}
                    </Col>
                )}
            </Row>
            <div className="h1 mt-5 pt-5 oswald text-center">
                Our Top Remote Workers
            </div>
            <Col lg={6} className="mx-auto text-center">
                Be with only the best. Meet our top preforming Virtual Assistants, see how the love working remotely and how they will help you level up your business!
            </Col>
            <div className="text-center">
                <Button variant="outline-secondary" className="rounded-pill">FIND OUT MORE</Button>
            </div>
            <Col lg={8} className="mx-auto my-5">
            <Row className="text-center my-5">
            {workers.map((worker, idx)=><Col sm={3} lg={3} key={idx}>
                <div className="worker-img"><i className="fas fa-user"></i></div>
                <div>{worker.name}</div>
                <div className="small oswald">{worker.position}</div>
                <div className="small text-primary">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                </div>
            </Col>)
            }
            </Row>
            </Col>


        </Container>
    )
}
