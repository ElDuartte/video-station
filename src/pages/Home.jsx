import React from "react";

import Header from "../Components/Header";
import Search from "../Components/Search";
import Categories from "../Components/Categories";
import Carousel from "../Components/Carousel";
import CarouselItem from "../Components/CarouselItem";
import Footer from "../Components/Footer";
import { v4 as uuid_v4 } from "uuid";

import useInitialState from "../hooks/useInitialState";

import "../assets/scss/main.scss";

const App = () => {
	const [videos, categories] = useInitialState();
	return (
		<div className="App">
			<Header />
			<Search />
			{categories.map(
				(category) =>
					videos[category].length > 0 && (
						<Categories title={category} key={uuid_v4()}>
							<Carousel key={uuid_v4()}>
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
