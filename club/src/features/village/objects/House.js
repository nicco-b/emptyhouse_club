import { Card, CardImg, House } from '../village.styled'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const ALink = styled(Link)`
	pointer-events: none;
`
export const Home = home => {
	const { left, top, zIndex, width, image, slug, absolute, disabled } = home

	return (
		<>
			<Card absolute={absolute} left={left} top={top} zIndex={zIndex} width={width}>
				<CardImg>
					<ALink to={disabled ? '#' : slug}>
						<House src={image} alt='house' />
					</ALink>
				</CardImg>
			</Card>
		</>
	)
}
