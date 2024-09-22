// navbar code
import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-expand-m-bg-dark">
            <div className="container-fluid mx-lg-5 ">
                <a className="navbar-brand text-light" href="#">Alecta</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-light dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Home
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Agency Home</a></li>
                                <li><a className="dropdown-item" href="#">Parallax showcase</a></li>
                                <li><a className="dropdown-item" href="#">Interactive Links</a></li>
                                <li><a className="dropdown-item" href="#">Portfolio Gallery</a></li>
                                <li><a className="dropdown-item" href="#">Blog Home</a></li>
                                <li><a className="dropdown-item" href="#">Pinterest Portfolio</a></li>
                                <li><a className="dropdown-item" href="#">Freelancer Home</a></li>
                                <li><a className="dropdown-item" href="#">Video Home</a></li>
                                <li><a className="dropdown-item" href="#">Fullscreen showcase</a></li>
                                <li><a className="dropdown-item" href="#">Landing</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="text-light nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">About Us</a></li>
                                <li><a className="dropdown-item" href="#">About Me</a></li>
                                <li><a className="dropdown-item" href="#">Our Offices</a></li>
                                <li><a className="dropdown-item" href="#">Meet the Team</a></li>
                                <li><a className="dropdown-item" href="#">Work Process</a></li>
                                <li><a className="dropdown-item" href="#">Our Services</a></li>
                                <li><a className="dropdown-item" href="#">Pricing Plans</a></li>
                                <li><a className="dropdown-item" href="#">Careers</a></li>
                                <li><a className="dropdown-item" href="#">Our Clients</a></li>
                                <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                <li><a className="dropdown-item" href="#">FAQ</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="text-light nav-link active" aria-current="page" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="text-light nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">List With Sidebar</a></li>
                                <li><a className="dropdown-item" href="#">List No Sidebar</a></li>
                                <li><a className="dropdown-item" href="#">Masonry List</a></li>
                                <li><a className="dropdown-item" href="#">Single Post</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="text-light nav-link active" href="#">Shop</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="text-light nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Elements
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Classic</a></li>
                                <li><a className="dropdown-item" href="#">Interactive</a></li>
                                <li><a className="dropdown-item" href="#">Presentational</a></li>
                                <li><hr className="dropdown-divider" /></li> {/* Updated hr tag , just added a closing tag -> '/' */}
                                <li><a className="dropdown-item" href="#">Typography</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav