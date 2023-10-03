import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="sidebar-wrapper" data-simplebar="true">
                <div className="sidebar-header">
                    <div>
                        <img src="/assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
                    </div>

                    <div>
                        <h4 className="logo-text">Logo</h4>
                    </div>

                    <div className="toggle-icon ms-auto">
                        <img src="/assets/images/menu.png"/>
                    </div>
                </div>
                        
                {/* <!--navigation--> */}
                <ul className="metismenu" id="menu">
                    <li className="mm-active">
                        <Link to="/">
                            <div className="parent-icon">
                                <i className='bx bxs-news' ></i>
                            </div>

                            <div className="menu-title">Article</div>
                        </Link>
                    </li>
                </ul>
                {/* <!--end navigation--> */}
            </div>
            {/* <!--end sidebar wrapper --> */}
            
            {/* <!--start header --> */}
            <header>
                <div className="topbar d-flex align-items-center">
                    <nav className="navbar navbar-expand">
                        <div className="mobile-toggle-menu"><i className='bx bx-menu'></i>
                        </div>

                        <div className="flex-grow-1">
                        <h4 className="text-menu">Article</h4>
                        </div>
                        
                        <div className="top-menu ms-auto">
                            <ul className="navbar-nav align-items-center">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                                    <div className="flag_icons">
                                        <img src="/assets/images/flag.png"/>
                                    </div>
                                </a>

                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#"><span>Indonesian</span></a>
                                    </li>
                                    <li><a className="dropdown-item" href="#"><span>English</span></a>
                                    </li>
                                </ul>
                            </li>

                                <li className="nav-item dropdown dropdown-large">
                                    <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                                        <span className="alert-count">8</span>
                                        <i className='bx bxs-bell'></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="#">
                                            <div className="msg-header">
                                                <p className="msg-header-title">Messages</p>
                                                <p className="msg-header-clear ms-auto">Marks all as read</p>
                                            </div>
                                        </a>

                                        <div className="header-message-list">
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img src="/assets/images/avatar.png" className="msg-avatar" alt="user avatar" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">Daisy Anderson <span className="msg-time float-end">5 sec
                                                    ago</span></h6>
                                                        <p className="msg-info">The standard chunk of lorem</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img src="/assets/images/avatar.png" className="msg-avatar" alt="user avatar" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">Althea Cabardo <span className="msg-time float-end">14
                                                    sec ago</span></h6>
                                                        <p className="msg-info">Many desktop publishing packages</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a href="#">
                                            <div className="text-center msg-footer">View All Messages</div>
                                        </a>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="user-box dropdown">
                            <a className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/assets/images/avatar.png" className="user-img" alt="user avatar" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#"><i className="bx bx-user"></i><span>Profile</span></a>
                                </li>
                                <li><a className="dropdown-item" href="#"><i className='bx bx-log-out-circle'></i><span>Logout</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;