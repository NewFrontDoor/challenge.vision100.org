/* eslint-disable */
import React, { Component } from 'react';
import _ from 'lodash';
import { getPageFromDrupal } from '../../utils/fetchJSON';

class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
            page: null,
            breadcrumbs: `<a href="/">Home</a>
          <span className="delimiter">›</span>
          <span title="" className="nolink">Contact Us</span>`
        }
    }

    componentWillMount() {
        var that = this;
        getPageFromDrupal('ContactUsChallenge', function (data) {
            that.setState({ page: data[0] });
        });
    }
    render() {
        var title, content;
        if (this.state.page) {
            title = this.state.title;
            content = this.state.content;
            console.log(this.state);
        }
        else {
            title = "";
            content = "";
        }
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>
                                        {this.state.page ? <span dangerouslySetInnerHTML={{ __html: this.state.page.title }} /> : ""}
                                    </h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        {this.state.breadcrumbs ? <section dangerouslySetInnerHTML={{ __html: this.state.breadcrumbs }} /> : ""}
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
                                    <div id="block-system-main" className="block block-system">
                                        <div className="content">
                                            <div className="node node-page clearfix">
                                                <div className="content">
                                                    {this.state.page ? <section dangerouslySetInnerHTML={{ __html: this.state.page.content }} /> : <h2><i className="fa fa-spinner"></i></h2>}
                                                </div>



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

export default ContactUs;