import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const ShopGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	/* max-width: 700px; */
	justify-self: center;
	padding: 2em;
`
export const ProductsGrid = styled.div`
	gap: 3em;
	display: grid;
	/* flex-wrap: wrap; */
	/* padding: 1em; */
	/* grid-auto-flow: column; */
	grid-template-rows: auto;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	/* > a {
		padding: 1rem;
		display: grid;
	}
	> a::before {
		content: '';
		padding-bottom: 100%;
		display: block;
	} */

	/* @media (min-width: 1200px) {
		grid-template-columns: repeat(auto-fit, minmax(170px, 365px));
	} */
`
export const ProductBox = styled.div`
	display: grid;
	/* width: fit-content; */
	/* aspect-ratio: 1; */
	/* gap: 0.5rem;
	height: auto;
	min-width: 100%; */
	gap: 1em;
`
export const ProductBoxDetail = styled.div`
	display: grid;
	font-size: 1.1em;
	gap: 0.4em;
	min-width: 100%;
	/* grid-template-rows: 1fr 1fr; */
`

export const ProductBoxImg = styled.div`
	display: grid;
	align-content: center;
	justify-content: center;
	max-width: 100%;
	height: auto;
	/* background-color: ${props => (props.theme.boxBG ? props.theme.boxBG : 'green')}; */
	aspect-ratio: 1;
	/* display: none; */
	/* background-color: #767a7c; */
	z-index: 999;
	/* > img::before {
		content: '';
		padding-bottom: 100%;
		display: block;
	}
	> img::before,
	> img > img {
		grid-area: 1 / 1 / 2 / 2;
	} */
`
export const DetailsBox = styled.div`
	display: grid;
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;
`

export const DetailsBoxTitle = styled.div`
	display: grid;
	padding-right: 0.6em;
	width: fit-content;
	grid-auto-flow: column;
	/* font-weight: 800; */
	text-decoration: underline;
	cursor: pointer;
	padding-bottom: 0.5em;
	> div {
		padding-left: 0.5em;
	}
`

export const ProductDetailGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 100%;
	padding: 2em;
	max-width: 1200px;
	justify-self: center;

	gap: 2em;
	@media (max-width: 825px) {
		grid-template-columns: 1fr 1fr;
		gap: 1em;
		/* grid-template-rows: 1fr 2fr; */
	}
	@media (max-width: 525px) {
		grid-template-columns: 1fr;
		gap: 1em;
		/* grid-template-rows: 1fr 2fr; */
	}
`

export const ProductDetailLeft = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	padding: 1em;
`
export const ProductDetailRight = styled.div`
	display: grid;
	height: fit-content;
	/* grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr; */
	/* padding: 1em; */
	gap: 1em;
	max-width: 400px;
	justify-self: end;
`

export const PDetail = styled.div`
	display: grid;
	height: 100%;
	grid-template-rows: 0.3fr 5fr;
	/* padding: 1em; */
`
export const A = styled(Link)`
	font-weight: 500;
	text-decoration: underline;
	&:hover {
		opacity: 50%;
	}
`
export const PDetailTitle = styled.h1`
	font-weight: 500;
	font-size: 1.3em;
	text-transform: uppercase;
`
export const PDetailPrice = styled.h3`
	font-weight: 500;
	font-size: 1.1em;
	text-transform: uppercase;
`
export const PDetailDescription = styled.p`
	display: grid;
`
export const PPageDescription = styled.ul`
	display: grid;
	> li {
		padding-bottom: 1em;
	}
`
export const PDetailBottomBox = styled.div`
	display: grid;
`
export const PThumbTitle = styled.div`
	font-weight: 500;
`

export const PThumbnail = styled.img.attrs(props => ({
	src: props.src,
	alt: props.alt,
}))`
	display: flex;
	width: 100%;
	height: auto;
	padding: 1em;
`
export const ProductNav = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: fit-content;
	gap: 0.5rem;
`
