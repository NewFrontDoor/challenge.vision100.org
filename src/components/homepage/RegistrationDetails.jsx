/* eslint-disable */
import React, { Component } from "react";
import styled from "styled-components";
import LinksBlock from "./LinksBlock";

const Container = styled.section`
	background-color: #222222;
	> div {
		display: flex;
		padding: 40px 20px;
		gap: 40px;
		max-width: 1300px;
		margin: 0 auto;
		flex-direction: row;
	}
	@media (max-width: 600px) {
		> div {
			flex-direction: column;
		}
	}
`;

const Year = styled.div`
	font-family: "Bitter", sans-serif;
	font-weight: 900;
	font-size: 4.5em;
	margin-bottom: 20px;
	writing-mode: vertical-rl;
	text-orientation: upright;
	vertical-align: middle;
	justify-content: center;
	line-height: 2.5em;
	letter-spacing: -15px;
	@media (max-width: 600px) {
		writing-mode: horizontal-tb;
		text-align: center;
		margin: 0;
		letter-spacing: 5px;
	}
`;

const Info = styled.div`
	display: flex;
	font-family: "Bitter", sans-serif;
	font-weight: 700;
	flex-direction: column;
	font-size: 1.5em;
	justify-content: center;
	align-items: center;
	flexgrow: 1;
	gap: 10px;
	span {
		font-size: 2em;
		text-align: center;
	}
`;

const Seperator = styled.hr`
	border: 1px solid #c20000;
	width: min(100%, 420px);
`;
class NoRegistration extends Component {
	render() {
		return (
			<Container>
				<div>
					<Year className="gradient-text">2024</Year>
					<Info className="gradient-text">
						<span>Friday August 9 & Saturday August 10</span>
						<Seperator />
						<span>Murray Capill & Richard Condie</span>
					</Info>
				</div>
				<div className="event-information__buttons">
					<LinksBlock
						registrationLink="https://mtsrecruit.com/taschallenge/"
						moreInfoLink="https://mtsrecruit.com/wp-content/uploads/2024/05/TAS-Challenge-2024-Conference-Information.pdf"
						isBlank={true}
					/>
				</div>
			</Container>
		);
	}
}

export default NoRegistration;
