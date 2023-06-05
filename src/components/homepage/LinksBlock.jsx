import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: center;
	padding-top: 50px;
	a {
		font-size: 2em;
		color: #000;
		font-family: "Arial", sans-serif;
		text-align: center;
		border-radius: 15px;
		margin-bottom: 40px;
		padding: 18px 40px;
		width: min(100%, 450px);
		background: #e5e5e5;
	}
`;

function LinksBlock() {
	return (
		<Container>
			<a href="/challenge2023">
				<span className="gradient-text">Register</span>
			</a>
			<a href="/challenge2023">
				<span className="gradient-text">Find out more</span>
			</a>
		</Container>
	);
}

export default LinksBlock;
