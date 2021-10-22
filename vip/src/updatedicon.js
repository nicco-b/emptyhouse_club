import React from 'react'
import styled from 'styled-components'

const Status = styled.img`
	width: ${props => (props.width ? props.width : '20px')};
	height: auto;
`
const UpdateIcon = ({ width }) => {
	return <Status width={width} className='iconsmaller' alt='icon' src={'/updateiconpng.png'} />
}
export default UpdateIcon
