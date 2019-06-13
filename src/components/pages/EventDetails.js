/* eslint-disable */
import React, { Component } from 'react';
import flyerImage from '../../assets/img/slider1.jpg';

class EventDetails extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Event Details</h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        <a href="/">Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content-region">
                    <div className="container">
                        <div className="row">
                            <div id="main-content-region" className="main-content col-xs-12">
                                <div className="region region-content">
                                    <div className="content">
                                        <div className="node node-page clearfix">
                                            <div className="content">
                                                <img className="img img-responsive" src={flyerImage} alt="" /> <br /><br />
                                                <p>We are all full-time gospel ministers, regardless of whether or not we are being paid for the privilege. The Challenge Conference is a time for all of us as gospel ministers to think through and put into action, the most effective, fruitful and godly way to be serving.
                                                        Challenge Conference’s aim is to <strong>raise up and support upcoming new leaders</strong> (whether into fulltime paid ministry, or into unpaid ministry) and <strong>encourage and equip current leaders</strong> (elders, deacons, overseers, ministry leaders) to keep going and keep growing in their various ministries (in church and in life). This is the challenge we want to put forward.
                                                    </p>

                                                <ul>
                                                    <li><strong>When: 16-17th August 2019</strong></li>
                                                    <li><strong>Where: The Old Woolstore, Hobart</strong></li>
                                                    <li><strong>Speakers: John Woodhouse and Mikey Lynch</strong></li>
                                                    <li><strong><a href="https://vision100.org/challengeregistration" target="_blank" rel="noreferrer noopener">Register here</a> for Challenge Conference 2019.</strong></li>
                                                </ul>

                                                <p><strong>More information</strong></p>

                                                <ul>
                                                    <li><a href="/AccomodationChildCare">Accommodation and Child Care</a></li>
                                                    <li><a href="/Register">Register</a></li>
                                                    <li><a href="/Interviews">Interviews</a></li>
                                                    <li><a href="/MinistryNetwork">Ministry Network, Sharing and Evaluating</a></li>
                                                </ul>
                                            </div>



                                        </div>
                                    </div>
                                </div>



                            </div>




                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default EventDetails;
