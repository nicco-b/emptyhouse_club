import styled from 'styled-components'

export const SOrderCard = styled.div`
	display: grid;
	/* height: 3em; */
	padding: 0.5em;
	align-items: center;
	border: 0.5px solid #d0d0d0;
	/* border-radius: 4px; */
	/* width: 100vw; */
	/* white-space: nowrap; */
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	/* width: fit-content; */
	cursor: pointer;
	&:hover {
		background-color: #ecf1ec;
	}
`
export const LongId = styled.div`
	overflow: hidden;
	width: 100px;
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
	justify-items: center;
`
