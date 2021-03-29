import React from 'react'
import Etee1 from '../assets/img/Etee1.png'
import Davinci4 from '../assets/img/Davinci4.png'
import Fairbooks1 from '../assets/img/Fairbookst.png'
import Degree1 from '../assets/img/Degree1.png'
import Solidworksa from '../assets/img/Solidworksat.png'

const Portfolio = ({ onPick, onOpen }) => (

<>
    <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Projects</h2>
              <h3 className="section-subheading text-muted">Software/Hardware Development Projects &  Certifications.</h3>
            </div>
          </div>
          <div className="row">
            {
              <>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" onClick={() => {onPick(1); onOpen();}}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="portfolio_img" />
                </a>
                <div className="portfolio-caption">
                    <h4>Portfolio</h4>
                    <p className="text-muted">My Portfolio Application. Built in React and styled with React Bootstrap.</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" onClick={() => {onPick(2); onOpen();}}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={ Fairbooks1 } alt="portfolio_img" />
                </a>
                <div className="portfolio-caption">
                    <h4>Fairbooks</h4>
                    <p className="text-muted">A Stripped Down Woocommerce Contactless Payment Site.</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" onClick={() => {onPick(3); onOpen();}}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={ Davinci4 } alt="portfolio_img" />
                </a>
                <div className="portfolio-caption">
                    <h4>Da Vinci Ride</h4>
                    <p className="text-muted">Solidworks 3D model and blueprints for Renaissance Fair Ride.</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" onClick={() => {onPick(4); onOpen();}}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={ Etee1 } alt="portfolio_img" />
                </a>
                <div className="portfolio-caption">
                    <h4>ET Elephant Experience</h4>
                    <p className="text-muted">A Reservation and E-coommerce Site for Elephants</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" onClick={() => {onPick(5); onOpen();}}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={ Degree1 } alt="portfolio_img" />
                </a>
                <div className="portfolio-caption">
                    <h4>Associates Degree</h4>
                    <p className="text-muted">AGS From The Community College of Denver</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" onClick={() => {onPick(6); onOpen();}}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={ Solidworksa } alt="portfolio_img" />
                </a>
                <div className="portfolio-caption">
                    <h4>CAD Certifications</h4>
                    <p className="text-muted">I have Both the Solidworks Associate and Professional Certifications.</p>
                </div>
              </div>

              </>
            }
          </div>
        </div>
    </section>
</>  
)

export default Portfolio;