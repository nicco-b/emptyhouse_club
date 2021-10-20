import { Ground, Box } from './village.styled'
import { Wallpaper, Grid, Rox } from '../../app/app.styled'
import { Home } from './objects/House'
import { Character } from './objects/Character'
import { Plant } from './objects/Plant'
import { withTheme } from 'styled-components'
import { HomeBubble } from './objects/HouseBubble'

const Houses = [
	{
		left: '3%',
		top: '23%',
		zIndex: '2',
		width: '30%',
		imageNight: '/homes/about_dark.png',
		imageDay: '/homes/about_light.png',
		disabled: false,
		slug: '/pages/about',
	},
	{
		left: '17%',
		top: '-10%',
		zIndex: '1',
		width: '40%',
		imageNight: '/homes/tshirt_dark.png',
		imageDay: '/homes/tshirt_light.png',
		slug: '/shop/tshirts',
		pageId: 'tshirts',
		disabled: true,
	},
	{
		left: '67%',
		top: '5%',
		zIndex: '1',
		width: '37%',
		imageNight: '/homes/faq_dark.png',
		imageDay: '/homes/faq_light.png',
		slug: '/pages/faq',
		disabled: false,
	},
	{
		left: '72%',
		top: '50%',
		zIndex: '3',
		width: '35%',
		imageNight: '/homes/patch_dark.png',
		imageDay: '/homes/patches_light.png',
		slug: '/shop/patches',
		disabled: true,
	},
]
const HouseBubbles = [
	{
		left: '-2%',
		top: '5%',
		zIndex: '2',
		width: '20%',
		imageNight: '/homes/about_bubble.png',
		imageDay: '/homes/about_bubble.png',

		slug: '/pages/about',
	},
	{
		left: '33%',
		top: '-33%',
		zIndex: '1',
		width: '26%',
		imageNight: '/homes/construction_bubble.png',
		imageDay: '/homes/construction_bubble.png',
		slug: '/shop/tshirts',
		pageId: 'tshirts',
	},
	{
		left: '59%',
		top: '-20%',
		zIndex: '1',
		width: '22%',
		imageNight: '/homes/faq_bubble.png',
		imageDay: '/homes/faq_bubble.png',
		slug: '/pages/faq',
	},
	{
		left: '83%',
		top: '36%',
		zIndex: '3',
		width: '17%',
		imageNight: '/homes/patches_bubble.png',
		imageDay: '/homes/patches_bubble.png',
		slug: '/shop/patches',
	},
	{
		left: '12%',
		top: '9%',
		zIndex: '2',
		width: '80%',
		imageNight: '/storeclosed.png',
		imageDay: '/storeclosed.png',
		slug: '/pages/about',
	},
]
const Plants = [
	{
		id: 1,
		left: '45%',
		top: '-7%',
		zIndex: '0',
		width: '20%',
		image: 'roundtree.png',
		name: 'roundtree',
		type: 'tree',
	},
	{
		id: 2,

		left: '-7%',
		top: '10%',
		zIndex: '1',
		width: '20%',
		image: 'birchtree1.png',
		name: 'birchtree1',
		type: 'tree',
	},
	{
		id: 3,

		left: '-5%',
		top: '50%',
		zIndex: '2',
		width: '25%',
		image: 'birchtree2.png',
		name: 'birchtree2',
		type: 'tree',
	},
	{
		id: 4,

		left: '55%',
		top: '23%',
		zIndex: '1',
		width: '20%',
		image: 'birchtree3.png',
		name: 'birchtree3',
		type: 'tree',
	},

	{
		id: 5,
		left: '83%',
		top: '88%',
		zIndex: '4',
		width: '10%',
		image: 'figtree.png',
		name: 'figtree',
		type: 'tree',
	},
	{
		id: 6,
		left: '69%',
		top: '83%',
		zIndex: '4',
		width: '5%',
		image: 'firehydrant.png',
		name: 'firehydrant',
		type: 'prop',
	},
	{
		id: 7,
		left: '30%',
		top: '98%',
		zIndex: '4',
		width: '8%',
		image: 'pumpkin1.png',
		name: 'pumpkin1',
		type: 'prop',
	},
	{
		id: 7,
		left: '28%',
		top: '100%',
		zIndex: '4',
		width: '8%',
		image: 'pumpkin2.png',
		name: 'pumpkin2',
		type: 'prop',
	},
	{
		id: 7,
		left: '22%',
		top: '80%',
		zIndex: '1',
		width: '8%',
		image: 'garbage.png',
		name: 'garbage',
		type: 'prop',
	},
]
const Characters = [
	{
		left: '33%',
		top: '44%',
		zIndex: '1',
		width: '7%',
		image: 'ghost.png',
		name: 'ghost',
	},
	{
		left: '40%',
		top: '82%',
		zIndex: '2',
		width: '11%',
		image: 'shortredboots.png',
		name: 'shortredboots',
	},
	{
		left: '44%',
		top: '102%',
		zIndex: '2',
		width: '12%',
		image: 'greenplantman.png',
		name: 'greenplantman',
	},
	{
		left: '30%',
		top: '70%',
		zIndex: '1',
		width: '9%',
		image: 'yellowman.png',
		name: 'yellowman',
	},
	{
		left: '19%',
		top: '87%',
		zIndex: '2',
		width: '16%',
		image: 'dogwalks.png',
		name: 'dogwalks',
	},
	{
		left: '50%',
		top: '37%',
		zIndex: '1',
		width: '7%',
		image: 'proudpersonamask.png',
		name: 'proudpersonamask',
	},
	{
		left: '57%',
		top: '60%',
		zIndex: '2',
		width: '9%',
		image: 'saddoghuman.png',
		name: 'saddoghuman',
	},
	{
		left: '6%',
		top: '80%',
		zIndex: '2',
		width: '7%',
		image: 'spiky.png',
		name: 'spiky',
	},
	{
		left: '80%',
		top: '-19%',
		zIndex: '0',
		width: '15%',
		image: 'creepygiant.png',
		name: 'creepygiant',
	},
	{
		left: '60%',
		top: '82%',
		zIndex: '0',
		width: '25%',
		image: 'stripecatmananddog.png',
		name: 'stripecatmananddog',
	},
]
// function Toggle() {
// 	const [toggle, set] = useState(false)
// 	const transitions = useTransition(toggle, {
// 		from: { position: 'absolute', opacity: 0 },
// 		enter: { opacity: 1 },
// 		leave: { opacity: 0 },
// 		reverse: toggle,
// 		delay: 200,
// 		config: config.molasses,
// 		onRest: () => set(!toggle),
// 	})
// 	return transitions(({ opacity }, props) => {
// 		return props.nightMode ? (
// 			<animated.div
// 				style={{
// 					position: 'absolute',
// 					opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
// 				}}>
// 				<Wallpaper wallpaper='/grass_dark.png' />
// 			</animated.div>
// 		) : (
// 			<animated.div
// 				style={{
// 					position: 'absolute',
// 					opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
// 				}}>
// 				<Wallpaper wallpaper='/grass_dark.png' />
// 			</animated.div>
// 		)
// 	})
// }

const Village = theme => {
	return (
		<>
			{theme.theme.nightMode ? (
				<Wallpaper wallpaper={'/grassnight.png'} />
			) : (
				<Wallpaper wallpaper='/grassday.png' />
			)}
			{/* {p()} */}
			<Grid>
				<Rox>
					<Ground>
						<Box>
							{Houses.map(home => {
								const { left, top, zIndex, width, imageDay, imageNight, slug, pageId, disabled } = home
								return (
									<Home
										disabled={disabled}
										key={slug}
										absolute
										left={left}
										top={top}
										width={width}
										image={theme.theme.nightMode ? imageNight : imageDay}
										zIndex={zIndex}
										slug={slug}
										pageId={pageId}
									/>
								)
							})}
							{HouseBubbles.map(home => {
								const { left, top, zIndex, width, imageDay, imageNight, slug, pageId } = home
								return (
									<HomeBubble
										key={slug}
										absolute
										left={left}
										top={top}
										width={width}
										image={theme.theme.nightMode ? imageNight : imageDay}
										zIndex={zIndex}
										slug={slug}
										pageId={pageId}
									/>
								)
							})}
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
							{Plants.map(plant => {
								const { left, top, zIndex, width, image, name, type, id } = plant
								return (
									<Plant
										key={id}
										absolute
										left={left}
										top={top}
										width={width}
										image={image}
										zIndex={zIndex}
										name={name}
										type={type}
									/>
								)
							})}
						</Box>
					</Ground>
				</Rox>
			</Grid>
		</>
	)
}
export default withTheme(Village)
