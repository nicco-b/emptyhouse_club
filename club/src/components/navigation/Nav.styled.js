import styled from 'styled-components'
export const NavLeftBox = styled.div`
	display: grid;
	grid-column-start: 1;
	grid-column-end: 1;
	width: fit-content;
	/* grid-template-columns: repeat(4, 1fr); */
`
export const NavRightBox = styled.div`
	display: grid;
	grid-column-start: 2;

	grid-column-end: 2;
	font-size: 0.6em;
	justify-self: end;
	/* grid-template-columns: repeat(3, 1fr); */
	gap: 2.5em;
	width: fit-content;
	align-items: center;

	a {
		&:hover {
			/* opacity: 40%; */
			color: ${props => (props.theme.fontActive ? props.theme.fontActive : '#2c2b2b')};

			transition: color 0.3s ease-out;
		}
	}
	.current {
		color: ${props => (props.theme.fontActive ? props.theme.fontActive : '#2c2b2b')};
	}
`
export const TempTwo = styled.div`
	display: grid;
	justify-items: right;
	padding-right: 1em;
	height: 35px;
	align-items: center;
`
export const ToggleText = styled.div`
	cursor: pointer;
`
export const NavCart = styled.div`
	grid-column: 2;
`
export const MainTitle = styled.div`
	font-size: 0.6em;
	font-weight: 900;
	text-transform: uppercase;
	width: fit-content;
	white-space: nowrap;
	padding-left: 1em;

	&:hover {
		/* opacity: 40%; */
		color: ${props => (props.theme.fontActive ? props.theme.fontActive : '#2c2b2b')};

		transition: color 0.3s ease-out;
	}
	.current {
		color: ${props => (props.theme.fontActive ? props.theme.fontActive : '#2c2b2b')};
	}
`
export const NavTemp = styled.div`
	display: grid;
	font-size: 0.6em;
	/* grid-template-columns: repeat(3, 0.2fr); */
	grid-auto-flow: column;
	/* width: fit-content; */
	align-content: center;
	/* justify-self: center; */
	height: 100%;
	gap: 1em;
	/* justify-self: center; */
`
export const RightNav = styled.div`
	display: grid;
	gap: 1em;
	/* grid-template-columns: 1fr 0.2fr; */
	width: fit-content;
	justify-self: end;
	text-transform: uppercase;
	font-weight: 300;
	font-size: smaller;
`
