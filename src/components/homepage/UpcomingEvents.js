import React, { Component } from "react";
import _ from "lodash";
import { decode } from "he";
import UpcomingEvent from "../models/UpcomingEvent";

//import { getFromDrupalAPI } from '../../utils/fetchJSON';
const placeholderEvents = [
	{
		title: "Challenge Conference 2019",
		startdate: "16-17th August 2019"
	}
];

class UpcomingEvents extends Component {
	constructor(props) {
		super(props);
		this.state = { events: null };
	}

	/*componentWillMount() {
    var that = this;
    getFromDrupalAPI('upcoming_events_api', function (data) {
      that.setState({ events: data })
    });
  }*/

	render() {
		var upcomingEvents = <div>Loading, please wait...</div>;
		if (this.state.events) {
			upcomingEvents = _.map(this.state.events, (event) => {
				return <UpcomingEvent key={_.uniqueId()} title={event.title} startdate={event.startdate} />;
			});
		}

		var upcomingEvents = _.map(placeholderEvents, (event) => {
			return <UpcomingEvent key={_.uniqueId()} title={event.title} startdate={event.startdate} />;
		});

		return (
			<section>
				<div className="col-md-4 col-xs-12">
					{" "}
					<div className="region region-content-2-3">
						<div className="block block-block">
							<h2 className="header">Upcoming Events</h2>

							<div className="content">
								<div className="upcoming-events">{upcomingEvents}</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default UpcomingEvents;
