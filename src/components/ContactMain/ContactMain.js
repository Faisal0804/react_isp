import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";


class ContactMain extends Component {
    render() {
        return (
            <div>


                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={12} sm={12} >
                                <h1 className="ContactName ">Quick Connect</h1>
                                <hr/>

                                <Form>

                                    <Form.Group>
                                        <Form.Label className="serviceDescription " >Subject</Form.Label>
                                        <Form.Control type="text"  />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="serviceDescription" >Name</Form.Label>
                                        <Form.Control type="text"  />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="serviceDescription" >Email Address</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="serviceDescription" >Message</Form.Label>
                                        <Form.Control  as="textarea" rows="3" />
                                    </Form.Group>


                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                            </Col>
                            <Col lg={6} md={12} sm={12} className="Text-center">

                                <h1 className="AddName">Address</h1>
                                <hr/>
                                <div className="addMain ">
                                <p className="addDescription" > #Technical Road (Near Pubali Bank LTD.), South Surma, Sylhet</p>
                                <p className="addDescription" > <FontAwesomeIcon  icon={faEnvelope} /> contact.mrsnetwork@gmail.com</p>
                                <p className="addDescription" > <FontAwesomeIcon  icon={faPhone} /> +8801766340436</p>
                                </div>

                            </Col>

                        </Row>
                    </Container>
                </Fragment>


            </div>
        );
    }
}

export default ContactMain;