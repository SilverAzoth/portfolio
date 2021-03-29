import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Fairbooks1 from '../assets/img/Fairbooks1.png'
import Fairbooks2 from '../assets/img/Fairbooks2.png'
import Fairbooks3 from '../assets/img/Fairbooks3.png'

import Davinci1 from '../assets/img/Davinci1.png'
import Davinci2 from '../assets/img/Davinci2.png'
import Davinci3 from '../assets/img/Davinci3.png'
import Davinci4 from '../assets/img/Davinci4.png'

import Etee1 from '../assets/img/Etee1.png'
import Etee2 from '../assets/img/Etee2.png'
import Etee3 from '../assets/img/Etee3.png'
import Etee4 from '../assets/img/Etee4.png'

import Solidworks1 from '../assets/img/Solidworks1.png'
import Solidworks2 from '../assets/img/Solidworks2.png'





export default function Project({ open, project, onClose }) {
  if (!open) return null
    if ( project == 1 ) return ReactDOM.createPortal(
      <>
        <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Portfolio</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <p className="item-intro text-muted">My portfolio app. Built in React, styled with React Bootstrap.</p>
            <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
            <p>One benefit to being a developer is that I can directly create online prescence. Most people spend signifigant amounts of time cultivating digital persona on social media. This is dangerous as it leaves a signifigant amount of ones worth in the hands of others. Instead I can directly create a professional space for myself that shows personality and competence as a developer while allowing me to avoid the hazards of social media.</p>
            <ul className="list-inline">
                <li>Date: Mar 2021</li>
                <li>Client: Self</li>
                <li>Profitability: Not Monetised</li>
            </ul>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
      </> 
      ,document.getElementById('portal'),
    )
    
    if (project == 2 ) return ReactDOM.createPortal(
      <>
        <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fairbooks</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Container>
            <Row>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Fairbooks1 }
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Fairbooks2 }
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Fairbooks3 }
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

            </Row>
          </Container>

            <p className="item-intro text-muted">A Stripped Down Woocommerce Contactless Payment Site.</p>
            <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
            <p>So this project was an ambitious attempt to integrate contact-less payments into the Texas Renaissance Fair. Although in the end I did succeed in creating a functioning payment system, It took until almost the end of the fair to perfect. I grossly underestimated how difficult creating a quick intuitive payment system is. Because renaissance festivals are my families business I personally worked on site. So I got to watch my application be janky and un-intuitive for 8 weekends. It was humiliating. Wordpress really wasn't up to the task and began to show it's age. I figured that a well established open source CMS would have good payment gateway integration, but because of the poor connectivity on renaissance fairs and how the PHP in Wordpress generates the pages, the experience was unacceptable for the majority of the fair. I do believe that this idea has incredible promise and scalability, but this first attempt was a failure. React has UI handled natively solving most of this problem which is why I gained interest in it. The use of cryptocurrency could allow for more private transtactions with much lower fees. I would like to revisit this project in the future.</p>
            <ul className="list-inline">
                <li>Date: November 2020</li>
                <li>Client: Self</li>
                <li>Profitability: low</li>
            </ul>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          
        </Modal.Footer>
        </Modal>
      </> 
      ,document.getElementById('portal'),
    )

    if (project == 3 ) return ReactDOM.createPortal(
      <>
        <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Da Vinci Ride</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Davinci1 }
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Davinci2 }
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Davinci3 }
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Davinci4 }
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

            <p className="item-intro text-muted">Solidworks 3D model and blueprints for Renaissance Fair Ride.</p>
            <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
            <p>This project was extremely satisfying because I was able to see my models fabricated into the real structure. The Da Vinci ride was built and lucratively operated all season! This project was started when my father approached me looking to create a new ride within the fair. He had taken reference measurements from similar structures and using those and my CAD experience I was able to create a full set of 3D models and blueprints. (I've removed the dimension to protect my fathers IP). These blueprints allowed a shop to fabricate all the metalwork which provides the structure for the beautiful ride you see.</p>
            <ul className="list-inline">
                <li>Date: October 2020</li>
                <li>Client: Renaissance Rides Inc</li>
                <li>Profitability: High</li>
            </ul>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          
        </Modal.Footer>
        </Modal>
      </> 
      ,document.getElementById('portal'),
    )

    if (project == 4 ) return ReactDOM.createPortal(
      <>
        <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>ET Elephant Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Etee1 }
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Etee2 }
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Etee3 }
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Etee4 }
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

            <p className="item-intro text-muted">A Reservation and E-coommerce Site for Elephants</p>
            <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
            <p>This project was my first foray into E-commerce. My uncle tours the country allowing people to interact with elephants, yet due to COVID-19 ability to travel was uncertain. They wanted to establish a permanent tour location and needed a reservation and E-commerce site to do so. Wordpress is very well suited for this application. The E-commerce is ran with Woocommerce and the styling was done using the Divi theme. The site is operable and lucrative to this day.</p>
            <ul className="list-inline">
                <li>Date: January 2020</li>
                <li>Client: The East Texas Elephant Experience</li>
                <li>Profitability: High</li>
            </ul>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          
        </Modal.Footer>
        </Modal>
      </> 
      ,document.getElementById('portal'),
    )

    if (project == 5 ) return ReactDOM.createPortal(
      <>
        <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Associates Degree</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <p className="item-intro text-muted">AGS From The Community College of Denver</p>
            <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
            <p>Dispite being the culmination of 14 years of education, this degree is one of my least favorite accomplishments. My belief is that the US education system was created from a bygone time when maximizing human productivity meant cramming them into assembly lines. Today, having infinite leverage repeating the same thing isn't productive. A persons most important task is learning how to apply that leverage. In this I believe that our school system isn't just under-performing, but damaging the development of our children. The success we continue to experience from our greatest minds will be despite our education system, not because of it. Fundamentally, forcing children to learn the answers to the questions we think are important, rather than allowing them to pursuit their own answers is misguided and evil. </p>
            <ul className="list-inline">
                <li>Date: May 2020</li>
                <li>Client: Societal Pressure</li>
                <li>Profitability:(Ha!) Negative</li>
            </ul>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          
        </Modal.Footer>
        </Modal>
      </> 
      ,document.getElementById('portal'),
    )

    if (project == 6 ) return ReactDOM.createPortal(
      <>
        <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>CAD Certifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Solidworks1 }
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ Solidworks2 }
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>

            <p className="item-intro text-muted">I have Both the Solidworks Associate and Professional Certifications.</p>
            <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
            <p>I passed the Solidworks Associate and Professional certification exams in AP Engineering my last year of highschool. The exams were extensive and Solidworks is an incredible piece of software. Truthfully I wish I had more opportunities to do work with it. The Da Vinci ride project has been my only professional use of it but it's outcomes were wonderful so maybe ill get more projects in the future. </p>
            <ul className="list-inline">
                <li>Date: Waaaay back in Highschool</li>
                <li>Client: Self</li>
                <li>Profitability: Neutral</li>
            </ul>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          
        </Modal.Footer>
        </Modal>
      </> 
      ,document.getElementById('portal'),
    )
}
