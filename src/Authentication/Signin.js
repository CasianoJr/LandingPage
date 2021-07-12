import React, {useEffect, useState} from 'react'
import {Modal, Row, Col, Container, Form, FormControl} from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import { Link } from 'react-router-dom'

export default function Signin({signin, setSignin, setSignup}) {
    const [jobSeeker, setJobSeeker] = useState(false)
    
    useEffect(() => {
        document.getElementById("signin")
        .addEventListener("click", () => {
            setSignin(true)
        });
        return ()=>{  document.getElementById("signin")
        .removeEventListener("click", () => {
        });
        }
    }, [setSignin])
    
    const handleClose = () => setSignin(false);
    const handleJobSeeker = () => setJobSeeker(val=>!val)

    const signupButton = (e) => {
      e.preventDefault();
      setSignin(false);
      setSignup(true);
    }

    return (
        <>
      <Modal show={signin} onHide={handleClose}>
          <div onClick={handleClose} className="ml-auto mx-3 btn">x</div>
            <div className="h5 mx-auto oswald">SIGN IN</div>
            <Container>
                <Row className="text-center border border-primary mt-4 mx-4">
                    <Col onClick={handleJobSeeker} className={jobSeeker ? "jobSeeker" : "busOwner"}>As a Business Owner</Col>
                    <Col onClick={handleJobSeeker} className={!jobSeeker ? "jobSeeker" : "busOwner"}>As a Job Seeker</Col>
                </Row>
                <div className="w-100">&nbsp;</div>
            </Container>
        <Modal.Body className="mx-5 my-5">
            <Container>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>
          <i className="text-primary fas fa-envelope-open-text"></i>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroup" placeholder="Your email address" />
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>
          <i className="text-primary fas fa-lock"></i>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="password" placeholder="Your password" />
      </InputGroup>
    <Link to="/register" onClick={()=>setSignin(false)}> <button className="btn btn-primary w-100 mt-4">SIGN IN</button></Link>
            <div className="small text-center mt-3 pt-3">Sign in using your social media account</div>
           <div>
           <Col sm={3} className="text-dark mx-auto mt-2 btn d-flex justify-content-around">
                        <span><i className="h4 mx-4 fab fa-facebook-f"></i></span>
                        <span><i className="h4 mx-4 fab fa-twitter"></i></span>
                        <span><i className="h4 mx-4 fab fa-instagram"></i></span>
            </Col>
           </div>

           <div className="small text-center mt-3">Dont have and account yet? 
           <a href="#sign-up" onClick={(e)=>signupButton(e)} id="signup" className="border-bottom border"> SIGN-UP</a></div>
            </Container>
        </Modal.Body>
      </Modal>
      </>
    )
}
