import styled from 'styled-components'

export const SocialBox = styled.div`
	display: grid;
	padding-top: 1em;
	width: fit-content;
	justify-items: center;
	grid-template-columns: 1fr 1fr;
`
export const SocialGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1em;
	> a {
		width: 100%;
		height: auto;
	}
`

export const ATitle = styled.h1`
	font-weight: 700;
	font-size: 1.4em;
	padding-bottom: 0.5em;
	margin-left: -1px;
`
export const FHeader = styled.div`
	display: grid;
	font-weight: 900;
	font-size: 1rem;
`
export const FQGrid = styled.div`
	display: grid;
	gap: ${props => (props.gap ? props.gap : '1em')};
	max-width: 400px;
`
export const FQBlock = styled.div`
	display: grid;
	gap: ${props => (props.gap ? props.gap : null)};
	> div {
		font-size: 0.9rem;
	}
`
export const FQMiddle = styled.div`
	display: grid;
	justify-content: center;
	padding-top: 2em;
`
export const PageTitle = styled.h1`
	font-size: 1.2em;
	font-weight: 500;
	margin-top: 1vh;
	text-transform: uppercase;
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	gap: 0.5em;
`
export const PageTitleBox = styled.div`
	display: grid;
	width: fit-content;
`

export const BasePage = styled.div`
	position: relative;
	padding: 0.5em 1.3em 1.3em 1.3em;
	/* max-width: 1500px;
	justify-self: center; */
	/* display: grid;
	
	
	justify-items: center;
	align-content: space-between; */
	@media (max-width: 425px) {
		padding: 0em 1em 1em 1em;
	}
`

export const BasePGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	/* grid-template-rows: 1fr 3fr; */
	/* padding: 1em; */
	/* max-width: 1300px;
	align-items: center;
	justify-self: center; */
	grid-template-areas: 'pageheader' 'content';
`
export const PageHeader = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	/* grid-template-rows: minmax(20px, 200px); */
`
export const SocialImg = styled.img.attrs(props => ({
	src: props.src,
	key: props.i,
}))`
	width: 100%;
`
