import { useState, useEffect } from "react";

const useInitialState = () => {
	const [videos, setVideos] = useState({
		mylist: [],
		trends: [],
		originals: [],
	});
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const APIMovies = "https://api-video-station.herokuapp.com/initalState";

		fetch(APIMovies)
			.then((response) => response.json())
			.then((data) => {
				setVideos(data);
				setCategories(Object.keys(data));
			})
			.catch((Error) => {
				console.log("Error");
			});
	}, []);
	return [videos, categories];
};

export default useInitialState;
