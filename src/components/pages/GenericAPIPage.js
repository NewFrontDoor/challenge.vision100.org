/* eslint-disable */
import React, { Component } from 'react';
import _ from 'lodash';
import { getPageFromDrupal } from '../../utils/fetchJSON';

class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            loading: true,
            pageFound: false
        }
    }

    componentWillMount() {
        var that = this;
        getPageFromDrupal(this.props.match.params.slug, function (data) {
            if (data[0] !== []){
              that.setState({ page: data[0], pageFound: true, loading: false });
            }
            else{
              that.setState({ page: null, pageFound: false, loading: false });
            }
        });
    }
    render() {
        var title, content;
        if (this.state.loading === false && this.state.page) {
            title = this.state.page.title;
            content = this.state.page.content;
        }
        else  {
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
                                        {this.state.loading === false && this.state.pageFound ? <span dangerouslySetInnerHTML={{ __html: title }} /> : ''}
                                        {this.state.loading === false && this.state.page == null ? <span>Page not found</span> : ''}
                                        {console.log(this.state.page)}
                                    </h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        {this.state.page ? 
                                        <><a href="/">Home</a><span className="delimiter">›</span><span title="" className="nolink">{title}</span></> : 
                                        <><a href="/">Home</a><span className="delimiter">›</span><span title="" className="nolink"></span></>}
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
                                                    {this.state.loading ? <h2><i className="fa fa-spinner"></i></h2> : ''}
                                                    {this.state.page ?
                                                     <section dangerouslySetInnerHTML={{ __html: this.state.page.content }} /> : '' }
                                                     

                                                    {this.state.loading === false && this.state.page == null ? 'Sorry this page is still under construction, or does not exist.' : ''}
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

export default EventDetails;
