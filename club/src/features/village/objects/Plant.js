import { Card, CardImg, PlantBox } from '../village.styled'

export const Plant = plant => {
	const { left, top, zIndex, width, image, name, absolute } = plant

	return (
		<Card absolute={absolute} left={left} top={top} zIndex={zIndex} width={width}>
			<CardImg>
				<PlantBox src={image} alt={name} />
			</CardImg>
		</Card>
	)
}
