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

	return (
		<div className="event-information__buttons">
			
			<a  rel="noopener noreferrer" href="https://allforthekingdom.org/rego/tasmania/" target="_blank">
				<span>Registration now open!</span>
			</a>
			<a href="https://allforthekingdom.org/wp-content/uploads/2025/06/TAS-Challenge-2025-Website-Version-180625-compressed.pdf" target="_blank">
				<span>Find out more</span>
			</a>
		</div>
	);
}

export default LinksBlock;
