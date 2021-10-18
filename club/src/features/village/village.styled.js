import styled from 'styled-components'

export const Ground = styled.div`
	display: grid;
	/* overflow: hidden; */
	/* position: relative; */
	/* justify-content: center; */
	min-width: 20em;
	max-width: 20em;
	height: 100%;
	cursor: grab;

	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;
	/* @media (min-width: 700px) {
		min-width: 30em;
		height: 20em;
	}
	@media (min-width: 800px) {
		min-width: 36em;
		height: 22em;
	}
	@media (min-width: 100px) {
		min-width: 40em;
		height: 25em;
	} */
	@media (min-height: 300px) {
		min-width: 12em;
		height: 8em;
	}
	@media (min-height: 400px) {
		min-width: 15em;
		height: 10em;
	}
	@media (min-height: 500px) {
		min-width: 20em;
		height: 13em;
	}
	@media (min-height: 600px) {
		min-width: 25em;
		height: 17em;
	}
	@media (min-height: 800px) {
		min-width: 30em;
		height: 17em;
	}
	@media (max-width: 600px) {
		min-width: 20em;
		height: 12.5em;
	}
	@media (max-width: 500px) {
		min-width: 17em;
		height: 11em;
	}
	@media (min-width: 800px) and (min-height: 800px) {
		min-width: 36em;
		height: 22em;
	}
	@media (min-width: 1000px) and (min-height: 800px) {
		min-width: 40em;
		height: 24em;
	}
	@media (min-width: 1100px) and (min-height: 1100px) {
		min-width: 50em;
		height: 30em;
	}
	@media (min-width: 1200px) and (max-height: 1100px) {
		min-width: 40em;
		height: 24em;
	}
	@media (min-width: 1300px) and (min-height: 1100px) {
		min-width: 50em;
		height: 32em;
	}
	@media (min-width: 1500px) and (min-height: 1000px) {
		min-width: 50em;
		height: 32em;
	}
	/* height: 40%; */
	/* grid-template-rows: 1fr;
	grid-template-columns: 1fr 1fr 1fr 1fr; */
	/* @media (max-height: 1100px) and (min-width: 700px) {
		min-width: 55%;
	}
	@media (max-height: 700px) and (min-width: 700px) {
		min-width: 45%;
	}
	@media (max-height: 500px) and (min-width: 700px) {
		min-width: 25%;
	}
	@media (max-height: 400px) and (min-width: 700px) {
		min-width: 15%;
	}
	@media (max-height: 300px) and (min-width: 700px) {
		min-width: 5em;
	}
	@media (max-width: 500px) {
		height: 20em;
		min-width: 100%;} */
`
export const Box = styled.div`
	/* display: grid;
	padding-bottom: 100%;
	height: 0; */
	width: 100%;
	height: 100%;
	position: relative;
	/* min-width: 600px; */
	/* grid-template-rows: 1fr;
	grid-template-columns: 1fr 1fr 1fr 1fr; */
	display: grid;
`

export const CharacterHeader = styled.div`
	display: grid;
	align-items: center;
	justify-items: center;
`
export const Card = styled.div`
	/* display: grid;
	padding-bottom: 100%;
	height: 0;
	width: 100%;
	position: relative; */

	position: ${props => (props.absolute ? 'absolute' : null)};
	/* min-width: 600px; */
	/* grid-template-rows: 1fr;
	grid-template-columns: 1fr 1fr 1fr 1fr; */
	/* width: auto; */
	/* height: ${props => props.height || '200px'}; */
	width: ${props => props.width || '200px'};

	left: ${props => props.left || null};
	right: ${props => props.right || null};

	top: ${props => props.top || null};
	z-index: ${props => props.zIndex || null};
`
export const CardImg = styled.div`
	/* display: grid;
	padding-bottom: 100%;
	height: 0;
	position: relative;

	width: 100%;
	position: relative; */
	/* min-width: 600px; */
	/* grid-template-rows: 1fr;
	grid-template-columns: 1fr 1fr 1fr 1fr; */
	padding-bottom: ${props => props.bottonPadding || null};
	position: relative;
	height: 0%;
`
export const PlantBox = styled.img.attrs(props => ({
	src: props.src,
	alt: props.alt,
}))`
	height: auto;
	max-width: 100%;

	filter: drop-shadow(1px 21px 4px rgba(0, 0, 0, 0.11));
	filter: ${props => (props.theme.objFilter ? props.theme.objFilter : null)};
	transition: 1.2s;
`
export const CharacterBox = styled.img.attrs(props => ({
	src: props.src,
	alt: props.alt,
}))`
	height: auto;
	max-width: 100%;
	filter: ${props => (props.theme.objFilter ? props.theme.objFilter : null)};
	transition: 0.7s;
`

export const House = styled.img.attrs(props => ({
	src: props.src,
	alt: props.alt,
}))`
	cursor: pointer;
	height: auto;
	width: 100%;
	transition-delay: 2s;

	transition: 0.9s;

	filter: ${props => (props.theme.objFilter ? props.theme.objFilter : null)};
	&:hover {
		filter: ${props => (props.theme.nightMode ? 'brightness(100%) ' : 'brightness(80%)')};
	}

	/* filter: drop-shadow(1px 21px 4px rgba(0, 0, 0, 0.11)); */
`
