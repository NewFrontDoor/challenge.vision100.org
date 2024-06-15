import React, { Component } from "react";
import GoogleMap from "../models/GoogleMap";

class WhereToFindUs extends Component {
	render() {
		return (
			<section>
				<div className="col-md-4 col-xs-12">
					<div className="region region-content-2-2">
						<div className="block block-block">
							<h2>Location</h2>
							<div className="content">
								<GoogleMap id="map_canvas" height="360px" />
								<div>
									<a href="https://goo.gl/maps/k6ujLwrrA47VGugK7" target="_blank" rel="noopener noreferrer">
										Wellspring Anglican Church
									</a>
								</div>
								<div>43-47 Grosvenor St</div>
								<div>Sandy Bay, Tasmania 7005</div>{" "}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default WhereToFindUs;
