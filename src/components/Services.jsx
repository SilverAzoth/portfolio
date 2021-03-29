import React from 'react'  
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


const Services = () => (

    <div className="page-section" id="services">
        <Container>
            <Row>
                <Col lg={12}>
                <h2 className="section-heading">My name is Cesar, Michael, Osorio</h2>
                <h3 className="section-subheading text-muted">I'm a young high capability generalist with professional development experience in both hardware and software.</h3>

                </Col>

            </Row>

            <Row>

                <Col md={4}>

                <span className="fa-stack fa-4x">

                <Image src="logo512.png" alt="" fluid />
                    
                </span>
                <h4 className="service-heading">React/Bootstrap</h4>
                <p className="text-muted">This portfolio itself is built with React and styled with Bootstrap. React's native abilities are very interesting as they may come in handy should in need to create a native app. </p>
                
                </Col>

                <Col md={4}>
                    
                    <span className="fa-stack fa-4x">

                    <Image src="wordpress-logo.png" alt="" fluid />

                    </span>
                    
                    <h4 className="service-heading">Wordpress/Woocommerce</h4>
                    <p className="text-muted">Several of my previous projects were built with Wordpress including Woocomeerce E-commerce. It's a development stack I've had success in, be it a bit dated.</p>
                
                </Col>

                <Col md={4}>

                <span className="fa-stack fa-4x">

                <Image src="solidworks-logo.png" alt="" fluid />

                </span>
                <h4 className="service-heading">Solidworks/CAD</h4>
                <p className="text-muted">I've developed 3D models and blueprints which were sucessfully built into an operating amusement ride. I also have the certificates to certify them.</p>
                
                </Col>

            </Row>

        </Container>

    </div>

)

export default Services;