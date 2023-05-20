/* eslint-disable */
import React, { Component } from "react";

class Register extends Component {
	render() {
		return (
			<section className="event-information">
				<div className="event-information__container">
					<div className="event-information__year gradient-text">2022</div>
					<div className="event-information__time-location gradient-text">
						<span>
							Friday August 12
							<br />
							1:30pm-8:30pm
						</span>
						<span>
							Saturday August 13
							<br />
							9:30am-5:30pm
						</span>
						<hr className="event-information__separator" />
						<span>
							Wellspring Anglican Church building
							<br />
							43-47 Grosvenor Street Sandy Bay
						</span>
					</div>
					<div className="event-information__theme gradient-text">
						<h2>Work</h2>
						<p>
							<em>Work of</em> the Lord
						</p>
						<span>and</span>
						<p>
							<em>Working for</em> the Lord
						</p>
					</div>
					<div className="event-information__buttons">
						<a href="https://brushfire.com/vision100/challenge/528718" rel="noreferrer noopener">
							Register
						</a>
						<a href="/Challenge2023">Event details</a>
					</div>
				</div>
			</section>
		);
	}
}

export default Register;
