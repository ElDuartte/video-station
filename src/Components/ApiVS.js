import React from "react";

import "../assets/styles/components/ApiVS.scss";

class ApiVS extends React.Component {
	state = {
		loading: true,
		trends: null,
	};
	async componentDidMount() {
		const url = "https://api-video-station.herokuapp.com/initalState";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ trends: data.trends[0], loading: false });
	}
	render() {
		return (
			<div>
				{this.state.loading || !this.state.trends ? (
					<div>loading...</div>
				) : (
					<div className="prueba">
						<div>{this.state.trends.title}</div>
						<div>{this.state.trends.type}</div>
						<div>{this.state.trends.language}</div>
						<div>{this.state.trends.year}</div>
						<div>{this.state.trends.contentRating}</div>
						<div>{this.state.trends.duration} min</div>
						<div>{this.state.trends.description}</div>
					</div>
				)}
			</div>
		);
	}
}

export default ApiVS;
