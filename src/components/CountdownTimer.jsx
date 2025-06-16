import React, { Component } from "react";

class CountdownTimer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeLeft: this.calculateTimeLeft()
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ timeLeft: this.calculateTimeLeft() });
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	calculateTimeLeft() {
		const difference = +new Date(this.props.targetDate) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		} else {
			timeLeft = {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			};
		}

		return timeLeft;
	}

	render() {
		const { days, hours, minutes, seconds } = this.state.timeLeft;

		return (
			<div style={styles.banner}>
				<span className="gradient-text" style={styles.text}>
					{this.props.countdownPrefix} {days}d {hours}h {minutes}m {seconds}s
				</span>
				&nbsp;&nbsp;

				<span className="gradient-text" style={styles.text}>
					<a href="https://allforthekingdom.org/rego/tasmania/" rel="noreferrer noopener" target="_blank">
					Registration now open! →
					</a>
				</span>

			</div>
		);
	}
}

const styles = {
	banner: {
		width: "100%",
		backgroundColor: "#2b2b2b",
		textAlign: "center",
		padding: "10px 0",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "10px"
	},
	text: {
		margin: "0",
		fontSize: "24px",
		fontWeight: "bold",
		color: "white"
	}
};

export default CountdownTimer;
