import { Card, CardImg, House } from '../village.styled'
import { Link } from 'react-router-dom'
export const HomeBubble = home => {
	const { left, top, zIndex, width, image, slug, absolute } = home

	return (
		<>
			<Card absolute={absolute} left={left} top={top} zIndex={zIndex} width={width}>
				<CardImg>
					<Link to={slug}>
						<House src={image} alt='house' />
					</Link>
				</CardImg>
			</Card>
		</>
	)
}
