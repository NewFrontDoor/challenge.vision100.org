/* eslint-disable */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import Navigation from "../Navigation";
import Slider from "./Slider";
import WhatIsChallenge from "./WhatIsChallenge";
//import Register from "./Register";
import NoRegistration from "./NoRegistration";
import LinksBlock from "./LinksBlock";

class HomePageWrapper extends Component {
	render() {
		return (
			<section>
				<div className="main-wrapper wide">
					<Slider />
					<WhatIsChallenge />
					{/* <Register /> */}
					<NoRegistration />
					{/* <LinksBlock /> */}
				</div>
			</section>
		);
	}
}

export default HomePageWrapper;
