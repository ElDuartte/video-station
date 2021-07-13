import React from "react";

import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Carousel from "../Components/Carousel";
import CarouselItem from "../Components/CarouselItem";
import Footer from "../Components/Footer";
import { v4 as uuid_v4 } from "uuid";

import useInitialState from "../hooks/useInitialState";

const Perfil = () => {
	const [videos, categories] = useInitialState();
	return (
		<div>
			<Header />
			<div className="container-info__perfil">
				<div className="info-perfil">
					<h2>No tienes nada en tu Lista personal! 😮</h2>
					<p>Aquí tienes lo mas visto en tu país.</p>
				</div>
			</div>
			{categories
				.filter((categories) => categories.includes("trends"))
				.map(
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

export default Perfil;
