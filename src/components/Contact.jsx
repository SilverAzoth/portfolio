import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

const Contact = () => (

  <Container>
    <Card bg={"light"} className="page-section" id="contact">

      <Row>
        <Col lg={12}>
        <h2 className="section-heading text-uppercase">Contact Me</h2>
        <h3 className="section-subheading text-muted">Reach out if you feel like there's something I can provide for you.</h3>
        </Col>
      </Row>
      
      <Row>
        <Col lg={12}>
          <Form id="contactForm" name="sentMessage" noValidate="noValidate">
            <Form.Row>
              <Col md={6}>

                <Form.Group>
                  <Form.Control id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </Form.Group>

              </Col>

              <Col md={6}>  

                <Form.Group>
                  <Form.Control id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                </Form.Group>
                
              </Col> 

              <Col md={12}>

              <Form.Control as="textarea" placeholder="Your Message *" rows={3} />

              </Col>

              <Col lg={12}>
              <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit" style={{marginTop: "24px"}}>Reach Out</button>
              </Col>
              
            </Form.Row>

          </Form>

          

        </Col>

      </Row>
    </Card>
  </Container>  
)

export default Contact;