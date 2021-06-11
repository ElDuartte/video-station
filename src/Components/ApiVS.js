import React from "react";

import "../assets/styles/components/ApiVS.scss";
import "../assets/styles/components/CarouselItem.scss";

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
					<div className="carousel__details-container">
						<div className="carousel-item__details--title">
							{this.state.trends.title}
						</div>
						<div className="carousel-item__details--info">
							{this.state.trends.year} {this.state.trends.contentRating}{" "}
							{this.state.trends.duration} minutos
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default ApiVS;
