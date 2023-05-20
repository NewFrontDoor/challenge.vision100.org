/* eslint-disable */
import React, { Component } from "react";
//import logo from '../assets/img/logo.png';
import NavLogo from "../assets/img/Challenge Nav Logo w date.svg";
class Navigation extends Component {
	render() {
		return (
			<header className="header-1 region-0 block-0">
				<div className="container">
					<div className="row">
						<div id="logo-region" className="logo col-xs-12 col-md-3 text-center-sm">
							<a href="/">
								<img src={NavLogo} alt="Home" className="logo" />
							</a>
						</div>{" "}
						{/* /logo-region */}
						<div id="menu-region" className="col-xs-12 col-md-9">
							<div className="region region-header">
								<div className="block block-menu hidden-md hidden-lg">
									<div className="content">
										<nav className="navbar nestor-main-menu" role="navigation">
											{/* Menu button for mobile display */}
											<div className="navbar-header">
												<button
													type="button"
													className="navbar-toggle"
													data-toggle="collapse"
													data-target=".nav-collapse"
												>
													MENU
												</button>
											</div>
										</nav>
									</div>
								</div>
								<div className="block block-tb-megamenu">
									<div className="content">
										<div className="tb-megamenu tb-megamenu-main-menu">
											<div className="nav-collapse  always-show">
												<ul className="tb-megamenu-nav nav level-0 items-5">
													<li className="tb-megamenu-item level-1 mega">
														<a href="/Challenge2023">Event Details</a>
													</li>

													{/* 
                          <li className="tb-megamenu-item level-1 mega dropdown">
                            <a href="javascript:void(0);" className="dropdown-toggle" title="Visit Us">

                              More Information         <span className="caret"></span>
                            </a>
                            <div style={{ width: "750px" }} className="tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child">
                              <div className="mega-dropdown-inner">
                                <div className="tb-megamenu-row row-fluid">
                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <div className="tb-megamenu-block tb-block tb-megamenu-block">
                                        <div className="block-inner">

                                          <div className="block block-block">


                                            <div className="content">
                                              <h3>Learn more Challenge Conference...</h3>  </div>
                                          </div>  </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="tb-megamenu-column span4  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <ul className="tb-megamenu-subnav mega-nav level-1 items-4">


                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/AccomodationChildCare">Accommodation and Child Care</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/Interviews" >One to One Ministry Conversations</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/MinistryNetwork" >Ministry Network, Sharing and Evaluating</a>
                                        </li>
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/WhatWillBeHappening" >Timetable</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          */}
													{/*<li className="tb-megamenu-item level-1 mega">
                            <a href="https://vision100.brushfire.com/challenge/494592" rel="noopener noreferrer" target="_blank">Register Here</a>
                          </li>
                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/Register" >Register</a>
                          </li>*/}

													<li className="tb-megamenu-item level-1 mega">
														<a href="/Contact" title="Contact Us">
															Contact Us
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>{" "}
							</div>
						</div>{" "}
						{/* /menu-region */}
					</div>{" "}
					{/* /row */}
				</div>{" "}
				{/* /container */}
			</header>
		);
	}
}

export default Navigation;
