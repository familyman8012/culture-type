import React from "react";
import styled from "@emotion/styled";
import { MainVisual, TextArea } from "./styles";

type Props = {
	[key: string]: string;
};

function MainImage({ image, title, text }: Props) {
	return (
		<MainVisual image={image}>
			<TextArea>
				<h2>{title}</h2>
				<p>{text}</p>
			</TextArea>
		</MainVisual>
	);
}

export default MainImage;
