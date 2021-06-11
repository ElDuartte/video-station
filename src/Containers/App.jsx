import React, { useState, useEffect } from "react";

import Header from "../Components/Header";
import Search from "../Components/Search";
import Categories from "../Components/Categories";
import Carousel from "../Components/Carousel";
import CarouselItem from "../Components/CarouselItem";
import Footer from "../Components/Footer";

import "../assets/styles/App.scss";

const App = () => {
	// const [videos, setVideos] = useState([]);

	// useEffect(() => {
	// 	fetch({ API })
	// 		.then((response) => response.json())
	// 		.then((data) => setVideos(data));
	// }, []);

	// console.log(videos);

	return (
		<div className="App">
			<Header />
			<Search />

			<Categories title="Mi lista">
				<Carousel>
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
				</Carousel>
			</Categories>

			<Categories title="Tendencias">
				<Carousel>
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
				</Carousel>
			</Categories>

			<Categories title="Originales de Video Station">
				<Carousel>
					<CarouselItem />
					<CarouselItem />
				</Carousel>
			</Categories>
			<Footer />
		</div>
	);
};

export default App;
