import { Card, CardImg, CharacterBox } from '../village.styled'

//Character model
// character theming with styled components for states??
//
//

export const Character = character => {
	const { left, top, zIndex, width, image, name, absolute } = character

	return (
		//Card is loyout
		<Card absolute={absolute} left={left} top={top} zIndex={zIndex} width={width}>
			<CardImg>
				<CharacterBox src={image} alt={name} />
			</CardImg>
		</Card>
	)
}
