import styled from 'styled-components'
export const MainMiddle = styled.div`
	display: grid;
	gap: 1em;
	/* width: 100%; */
	/* max-width: 400px; */
	justify-content: center;
	grid-template-columns: 1fr;
	padding: 1em;
	padding-bottom: 6em;
	@media (min-width: 600px) {
		grid-template-columns: 1fr 2fr 1fr;
	}
`
