import React from 'react'
import styled from 'styled-components'

const Status = styled.img`
	width: 20px;
	height: auto;
`
const UpdateIcon = () => {
	return <Status className='iconsmaller' alt='icon' src={'/updateiconpngred.png'} />
}
export default UpdateIcon
