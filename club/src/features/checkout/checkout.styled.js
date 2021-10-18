import styled from 'styled-components'

export const BaseCheckout = styled.div`
	display: grid;
`
export const Form = styled.form`
	display: grid;
	gap: 1em;
`

export const Fieldz = styled.div`
	@media (max-width: 800px) {
		grid-row: 4;
		display: grid;
		gap: 1em;
		/* padding-bottom: 3em; */
	}
`

export const StateDrop = styled.div`
	margin: 0;
	padding: 0;

	> select {
		font-weight: 500;
		width: 100%;
		height: auto;

		padding: 10px 12px 10px 12px;
		outline: 0;
		/* padding: 0 12px; */

		border: 1px solid var(--box-border);
		border-radius: 4px;
		background: var(--box-color);
		color: var(--font-color);
		font-size: 19px;
		/* background: white; */
		font-weight: 500;
		/* font-family: 'Helvetica Neue'; */
		font-family: 'Nunito', sans-serif;

		box-sizing: border-box;

		/* -webkit-box-shadow: 0 0 0 30px white inset !important;
	border: 1px solid rgba(138, 170, 137, 0.733) !important; */
	}

	> input {
		margin-bottom: 0px;
		height: 100%;
	}
`
export const CardBox = styled.div`
	font-weight: 500;
	width: 100%;
	height: auto;
	padding: 15px 0px 13px 8px;
	outline: 0;
	/* padding: 0 12px; */
	display: grid;
	border: 1px solid var(--box-border);
	border-radius: 4px;
	background: var(--box-color);
	color: var(--font-color);
`
