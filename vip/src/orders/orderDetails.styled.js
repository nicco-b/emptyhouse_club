import styled from 'styled-components'

export const OrderDeets = styled.div`
	display: grid;
	/* max-width: 400px; */
	width: 100%;
	justify-self: center;
`
export const OrderDBox = styled.div`
	display: grid;
	border: 1px solid grey;
	background-color: white;
	border-radius: 4px;
	margin: 1em;
`
export const StatusBox = styled.div`
	display: grid;
	/* grid-template-columns: 1fr 10fr;
	 */
	grid-auto-flow: column;
	align-items: center;

	width: fit-content;
	gap: 0.5em;
	padding: 1em;
`
export const BackButton = styled.button`
	height: fit-content;
	width: fit-content;
`
