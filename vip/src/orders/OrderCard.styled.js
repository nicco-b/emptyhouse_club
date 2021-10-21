import styled from 'styled-components'

export const SOrderCard = styled.div`
	display: grid;
	height: 3em;
	padding: 0%.5em;
	align-items: center;
	border: 0.5px solid #d0d0d0;
	border-radius: 4px;
	width: 400px;
	/* white-space: nowrap; */
	grid-template-columns: 1fr 2fr 1fr 1fr;
	/* width: fit-content; */
	background-color: #fcf9f9;
	cursor: pointer;
	&:hover {
		background-color: #e1e1;
	}
`
export const LongId = styled.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	/* display: inline-grid; */
`

export const LongName = styled.div`
	/* overflow: hidden; */
	white-space: nowrap;
	/* text-overflow: ellipsis; */
	/* display: inline-grid; */
`

export const ShortBox = styled.div`
	/* overflow: hidden; */
	/* white-space: nowrap; */
	/* text-overflow: ellipsis; */
	display: grid;
`
