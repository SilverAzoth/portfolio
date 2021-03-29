import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'


const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={() => scroll.scrollToTop()} >Project: Portfolio</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fa fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">

                <ul className="navbar-nav text-uppercase ml-auto">

                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" href="services" to="services" smooth={true} duration={250}>Skills</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" href="portfolio" to="portfolio" smooth={true} duration={250}>Projects</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" href="about" to="about" smooth={true} duration={250}>About</Link>
                    </li>
            
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" href="contact" to="contact" smooth={true} duration={250}>Contact</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

)


    


export default Navbar;