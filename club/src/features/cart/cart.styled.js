import styled from 'styled-components'

export const BaseCart = styled.div`
	display: grid;
	/* padding: 1em 1em 1em 1em; */
	padding: 2em;
	/* width: fit-content;
	justify-self: center; */
	gap: 1em;
	@media (max-width: 600px) {
		padding: 0;
		padding-top: 2em;
	}
`
//s
export const IncrementButtonBox = styled.div`
	background-color: var(--box-color);
	border: 1px solid var(--box-border);
	display: grid;
	cursor: pointer;
	border-radius: 2px;
`
export const CartProducts = styled.div`
	display: grid;
	gap: 1em;
	/* max-width: 80%; */
	min-width: 200px;
	max-width: 500px;
	grid-row: 1;
`
export const LineSeparator = styled.hr`
	border: unset;
	border-bottom: 1px ${props => (props.lineStyle ? props.lineStyle : 'solid')} rgba(0, 0, 0, 0.1);
	/* &:last-child {
		border: unset;
	} */
`
export const CartTotal = styled.div`
	display: grid;
	font-size: 2em;
	font-weight: 900;
`
export const CartItembox = styled.div`
	display: grid;
	/* background-color: green; */
	/* border: 1px solid grey; */
	grid-template-columns: 1fr 2fr;
	/* margin: 3em; */
	/* align-items: center; */
	grid-template-rows: 1fr;
	grid-column: 1;
`
export const CartPGrid = styled.div`
	display: grid;
	/* gap: 2em; */
	/* justify-content: center; */
	grid-template-columns: 1fr 1fr;
	min-width: 100%;
	gap: 2em;
	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`

export const CartItemTop = styled.div`
	display: grid;
	/* gap: 2em; */

	grid-template-columns: 2fr 1fr;
`

export const CartItemRight = styled.div`
	display: grid;
	/* grid-column-start: 2;
	grid-column-end: 4; */
	height: fit-content;
	grid-template-rows: 2fr 1fr 1fr 1fr;
	padding: 1em;
	/* border: 1px solid grey; */
	height: 100%;
	/* max-width: fit-content; */
`
export const BottomBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 4fr;
`
export const RightBottomBox = styled.div`
	display: grid;
	/*
	 */
	align-items: center;
	justify-content: end;
`
export const RightTopBox = styled.div`
	display: grid;
	/*
	 */
	/* align-items: center; */
	justify-content: end;
`
export const ButtonBox = styled.div`
	display: grid;
	grid-auto-flow: column;
	justify-items: center;
	align-items: center;
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;
`
export const CartItemTitle = styled.h3`
	font-weight: 700;
	font-size: 1.3em;
	text-transform: uppercase;
`
export const CartSummary = styled.div`
	display: grid;
	grid-column: 2;
	grid-row: ${props => (props.pay ? '1' : '1')};
	padding: 0.5em;
	height: fit-content;
	/* border: 1px solid grey; */
	min-width: 400px;
	background-color: ${props => (props.theme.boxBG ? props.theme.boxBG : 'green')};

	/* max-width: 400px; */
	/* overflow: hidden; */
	@media (max-width: 800px) {
		grid-column: 1;
		grid-row: 2;
		min-width: 100%;
	}
`
export const CartShipping = styled.div`
	display: grid;
	grid-column: 2;
	grid-row: 2;
	padding: 0.5em;
	height: fit-content;
	/* border: 1px solid grey; */
	min-width: 400px;
	background-color: ${props => (props.theme.boxBG ? props.theme.boxBG : 'green')};

	/* max-width: 400px; */
	/* overflow: hidden; */
	@media (max-width: 800px) {
		grid-column: 1;
		grid-row: 3;
		min-width: 100%;
	}
`
export const SumItemTitle = styled.div`
	font-weight: 700;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`
export const UnderSummary = styled.div`
	grid-column: 2;
	font-size: 1.3em;
	display: grid;
	justify-content: space-between;
	grid-auto-flow: column;
	padding-top: 2em;

	@media (max-width: 800px) {
		grid-column: 1;
		padding-bottom: 3em;
	}
`
export const CartSumTitle = styled.div`
	display: grid;
	/* height: 100%; */
	grid-auto-flow: column;
	justify-content: space-between;
	font-size: 1.4em;
	padding-bottom: 0.5em;
`
export const CartTitle = styled.div`
	font-weight: 600;
`

export const CartSumGrid = styled.div`
	display: grid;
	/* gap: 1em; */
`
export const CartSumProducts = styled.div`
	display: grid;
	background-color: rgba(196, 196, 196, 0.22);
`
export const CartSumProductItem = styled.div`
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	grid-template-columns: 0.5fr 2fr 1fr 1fr;
	height: 2em;
	padding: 0em 0.5em;
`
export const CartSumSubGrid = styled.div`
	display: grid;
	gap: 1em;
	padding-top: 1em;
`

export const CartSumSubHeader = styled.div`
	font-weight: 600;
	font-size: 1em;
	display: grid;
	grid-auto-flow: column;
	justify-content: space-between;
`
export const CartItemDWrap = styled.div`
	display: grid;
	height: 100%;
`

export const CartThumb = styled.img.attrs(props => ({
	src: props.src,
	alt: props.alt,
}))`
	width: 100%;
`
export const CartIcon = styled.img.attrs(props => ({
	src: props.src,
	alt: props.alt,
}))`
	width: 30px;
	align-items: center;
	height: auto;
	&:hover {
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.08));
	}
	&:active {
		filter: unset;
	}
`
export const SuccessThumb = styled.img.attrs(props => ({
	src: props.src,
	alt: props.alt,
}))`
	display: grid;
	width: 100%;
	padding-top: 2em;
	@media (max-width: 425px) {
		width: unset;
	}
`
