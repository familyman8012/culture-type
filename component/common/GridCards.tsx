import { Col } from "antd";
import React from "react";
import { GridCard, NoImage } from "./styles";

type Props = {
	landingPage: boolean;
	movieId: number;
	image: string | null;
	movieName?: string;
	characterName?: string;
};

function GridCards({ landingPage, movieId, image, movieName, characterName }: Props) {
	return (
		<Col lg={6} md={8} xs={24}>
			<GridCard>
				{image !== null ? (
					<>
						{landingPage ? (
							<a href={`/movie/${movieId}`}>
								<img style={{ width: "100%", height: "320px" }} src={image} alt={movieName} />
							</a>
						) : (
							<img style={{ width: "100%" }} src={image} alt={characterName} />
						)}
					</>
				) : (
					<NoImage>사진 준비 중입니다.</NoImage>
				)}
			</GridCard>
		</Col>
	);
}

export default GridCards;
