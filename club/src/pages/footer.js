import {
	FooterBox,
	FooterImg,
	FooterSocial,
	FooterSocialGrid,
	FooterField,
	FieldSpots,
} from './footer.styled'
import { Character } from '../features/village/objects/Character'
const Characters = [
	{
		// left: '40%',
		// top: '100%',
		zIndex: '2',
		width: '100%',
		image: '/shortredboots.png',
		name: 'shortredboots',
	},
	{
		// left: '19%',
		// top: '87%',
		zIndex: '2',
		width: '100%',
		image: '/dogwalks.png',
		name: 'dogwalks',
	},
	{
		left: '80%',
		top: '-720%',
		zIndex: '2',
		width: '20%',
		image: '/creepygiant.png',
		name: 'creepygiant',
	},
]
export const Footer = () => {
	return (
		<FooterBox>
			<FooterField>
				<div style={{ position: 'relative' }}>
					<FieldSpots>
						{Characters.map(character => {
							const { left, top, zIndex, width, image, name } = character
							return (
								<Character
									key={name}
									absolute
									left={left}
									top={top}
									width={width}
									image={image}
									zIndex={zIndex}
									name={name}
								/>
							)
						})}
					</FieldSpots>
				</div>
			</FooterField>
			<FooterSocial>
				<FooterSocialGrid>
					<img src='/social/email.png' alt='alt' />
					<img src='/social/twitter.png' alt='alt' />
					<img src='/social/instagram.png' alt='alt' />
				</FooterSocialGrid>
			</FooterSocial>
			<FooterImg src={'/grass4.jpg'} />
		</FooterBox>
	)
}
