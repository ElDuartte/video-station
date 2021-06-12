import React, { useState, useEffect } from "react";

import Header from "../Components/Header";
import Search from "../Components/Search";
import Categories from "../Components/Categories";
import Carousel from "../Components/Carousel";
import CarouselItem from "../Components/CarouselItem";
import Footer from "../Components/Footer";

import useInitialState from "../hooks/useInitialState";

import "../assets/styles/App.scss";

const API = "https://api-video-station.herokuapp.com/initalState";

const App = () => {
	const [videos, categories] = useInitialState(API);
	return (
		<div className="App">
			<Header />
			<Search />
			{categories.map(
				(category) =>
					videos[category].length > 0 && (
						<Categories title={category}>
							<Carousel>
								{videos[category].map((item) => (
									<CarouselItem key={item.id} {...item} />
								))}
							</Carousel>
						</Categories>
					)
			)}
			<Footer />
		</div>
	);
};

export default App;
