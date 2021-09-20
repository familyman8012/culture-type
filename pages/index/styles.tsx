import styled from "@emotion/styled";

export const IndexWrapper = styled.div`
	width: "100%";
	margin: "0";
`;

type ImageProps = {
	image: string;
};

export const MainVisual = styled.div<{ image: string }>`
	position: relative;
	width: 100%;
	height: 500px;
	background: url(${(props) => props.image}) black center;
	background-size: cover;
	background-position: top center;
	border: 1px solid;
`;

export const TextArea = styled.div`
	position: absolute;
	bottom: 2rem;
	max-width: 500px;
	margin-left: 2rem;
	h2 {
		color: white;
	}
	p {
		color: white;
		font-size: 1rem;
	}
`;

export const MovieList = styled.div`
	width: 85%;
	margin: 1rem auto;
`;
