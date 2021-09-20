import React, { useState, useEffect } from "react";
import { IndexWrapper, MovieList } from "./index/styles";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "component/Config";
import { MovieData } from "@typings/db";
import { Row } from "antd";
import MainImage from "./index/MainImage";
import GridCards from "component/common/GridCards";

const index = () => {
	const [Movies, setMovies] = useState<MovieData[]>([]);
	const [MainMovieImage, setMainMovieImage] = useState<MovieData | null>(null);
	const [currentPage, setcurrentPage] = useState(0);

	useEffect(() => {
		const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
		fetchMovies(endPoint);
	}, []);

	const fetchMovies = (endPoint: string) => {
		fetch(endPoint)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setMovies([...Movies, ...response.results]);
				setMainMovieImage(response.results[0]);
				setcurrentPage(response.page);
			});
	};

	const loadMoreItems = () => {
		const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
		fetchMovies(endPoint);
	};

	return (
		<IndexWrapper>
			{MainMovieImage && (
				<MainImage
					image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
					title={MainMovieImage.original_title}
					text={MainMovieImage.overview}
				/>
			)}
			<MovieList>
				<h2>Movies by latest</h2>
				<hr />
				<Row gutter={[16, 16]}>
					{Movies?.map((movie, i) => (
						<React.Fragment key={i}>
							<GridCards
								landingPage
								image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
								movieId={movie.id}
								movieName={movie.original_title}
							/>
						</React.Fragment>
					))}
				</Row>
			</MovieList>
		</IndexWrapper>
	);
};

export default index;
