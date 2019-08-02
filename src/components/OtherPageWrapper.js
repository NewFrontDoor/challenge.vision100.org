/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OtherPageContent from './OtherPageContent';

import AllSermons from './pages/AllSermons';
import Sermons from './pages/Sermons';
import SermonPage from './pages/SermonPage';
import SermonSeriesPage from './pages/SermonSeriesPage';


import OurPeople from './pages/OurPeople';


import ContactUs from './pages/ContactUs';
import EventDetails from './pages/EventDetails';
import AccomodationChildCare from './pages/MoreInformation/AccomodationChildCare';
import Interviews from './pages/MoreInformation/Interviews';
import MinistryNetwork from './pages/MoreInformation/MinistryNetwork';
import Register from './pages/Register';
import SermonPlaceholder from './pages/SermonPlaceholder';
import WhatsHappening from './pages/MoreInformation/WhatsHappening';


class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/AllSermons" component={AllSermons} />
          <Route exact path="/Sermons" component={Sermons} />
          <Route exact path="/sermon/:nid" component={SermonPage} />
          <Route exact path="/sermon/:nid/:title" component={SermonPage} />
          <Route exact path="/series/:nid" component={SermonSeriesPage} />
          <Route exact path="/series/:nid/:title" component={SermonSeriesPage} />

          <Route exact path="/OurPeople" component={OurPeople} />
          <Route exact path="/Contact" component={ContactUs} />

          <Route exact path="/EventDetails" component={EventDetails} />

          <Route exact path="/AccomodationChildCare" component={AccomodationChildCare} />
          <Route exact path="/Interviews" component={Interviews} />
          <Route exact path="/MinistryNetwork" component={MinistryNetwork} />
          <Route exact path="/WhatWillBeHappening" component={WhatsHappening} />

          <Route exact path="/Register" component={Register} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
