import React from "react";
//import styled from "styled-components";

// const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	gap: 20px;
// 	align-items: center;
// 	justify-content: center;
// 	padding-top: 50px;
// 	a {
// 		font-size: 2em;
// 		color: #000;
// 		font-family: "Arial", sans-serif;
// 		text-align: center;
// 		border-radius: 15px;
// 		margin-bottom: 40px;
// 		padding: 18px 40px;
// 		width: min(100%, 450px);
// 		background: #e5e5e5;
// 	}
// `;

function LinksBlock({ registrationLink, moreInfoLink, isBlank = true }) {
	const target = isBlank ? "_blank" : "";
	return (
		<div className="event-information__buttons">
			
			<a  rel="noopener noreferrer">
				<span>Registration and more information coming soon!</span>
			</a>
			<a  rel="noopener noreferrer">
				<span>Find out more</span>
			</a>
		</div>
	);
}

export default LinksBlock;
