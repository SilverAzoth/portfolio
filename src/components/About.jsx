import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Contact from '../components/Contact'

const About = () => (


    <Row className="page-section" id="about">

      <Col lg={12}>

        <h2 className="section-heading text-uppercase">My Background</h2>
        <h3 className="section-subheading text-muted">Where I'm from and where I'm going.</h3>

      </Col>

      <Col lg={12}>

        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>September 1996</h4>
                <h4 className="subheading">My Unique Beginning</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">I was born in Topeka Kansas. My mother was a sothern belle from colorado and my father was an exotic animal trainer on the circus, who she had run away with.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>August 2002</h4>
                <h4 className="subheading">I Entered the US Education System.</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Living a nomadic lifestyle meant I only attended school about half the year, the principal allowed this because I increased test scores when I did.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>March 2020</h4>
                <h4 className="subheading">My Education Was interuppted By COVID-19</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Being halfway through a Batchelor of Computer Science I pivoted my online classes to lock in a Associate of General Studies.</p>
              </div>
            </div>
          </li>

          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>April 2020</h4>
                <h4 className="subheading">I Made the Leap to Freelance</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Seeing the massive need for businesses to transition online, I quickly picked up my first project which is already profitable.</p>
              </div>
            </div>
          </li>

          <li>
            <div className="timeline-image">
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Summer 2021</h4>
                <h4 className="subheading">Follow The Money</h4>
                <p className="text-muted">Following the capital flight pouring off of California and New York into Texas, I plan to make the move to Austin as it appears be the focal point. I believe that being in such a dynamic enviorment will have compounding benefits.</p>
              </div>              
            </div>
          </li>
        </ul>      
      </Col>

    </Row>
)

export default About;