import styled from 'styled-components'

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
