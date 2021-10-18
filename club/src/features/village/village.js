import { Ground, Box } from './village.styled'
import { Wallpaper, Grid, TitleBox, Rox, GlobalStyle } from '../../app/app.styled'
import { Home } from './objects/House'
import { Character } from './objects/Character'
import { Plant } from './objects/Plant'
import { useEffect, useState } from 'react'
import { withTheme } from 'styled-components'
import { useTransition, animated, config } from 'react-spring'

const Houses = [
	{
		left: '3%',
		top: '30%',
		zIndex: '2',
		width: '30%',
		imageNight: '/homes/about_dark.png',
		imageDay: '/homes/about_light.png',

		slug: '/pages/about',
	},
	{
		left: '17%',
		top: '0%',
		zIndex: '1',
		width: '30%',
		imageNight: '/homes/tshirt_dark.png',
		imageDay: '/homes/tshirt_light.png',
		slug: '/shop/tshirts',
		pageId: 'tshirts',
	},
	{
		left: '63%',
		top: '0%',
		zIndex: '1',
		width: '37%',
		imageNight: '/homes/faq_dark.png',
		imageDay: '/homes/faq_light.png',
		slug: '/shop/prison',
	},
	{
		left: '72%',
		top: '50%',
		zIndex: '3',
		width: '30%',
		imageNight: '/homes/patch_dark.png',
		imageDay: '/homes/patches_light.png',
		slug: '/shop/patches',
	},
]
const Plants = [
	{
		id: 1,
		left: '35%',
		top: '-13%',
		zIndex: '0',
		width: '20%',
		image: 'roundtree.png',
		name: 'roundtree',
		type: 'tree',
	},
	{
		id: 2,

		left: '-3%',
		top: '10%',
		zIndex: '1',
		width: '20%',
		image: 'birchtree1.png',
		name: 'birchtree1',
		type: 'tree',
	},
	{
		id: 3,

		left: '0%',
		top: '70%',
		zIndex: '3',
		width: '20%',
		image: 'birchtree2.png',
		name: 'birchtree2',
		type: 'tree',
	},
	{
		id: 4,

		left: '65%',
		top: '5%',
		zIndex: '2',
		width: '20%',
		image: 'birchtree3.png',
		name: 'birchtree3',
		type: 'tree',
	},
	{
		id: 5,
		left: '83%',
		top: '84%',
		zIndex: '4',
		width: '7%',
		image: 'figtree.png',
		name: 'figtree',
		type: 'tree',
	},
]

const Characters = [
	{
		left: '43%',
		top: '30%',
		zIndex: '2',
		width: '5%',
		image: 'ghost.png',
		name: 'ghost',
	},
	{
		left: '26%',
		top: '70%',
		zIndex: '1',
		width: '9%',
		image: 'yellowman.png',
		name: 'yellowman',
	},
	{
		left: '16%',
		top: '83%',
		zIndex: '2',
		width: '17%',
		image: 'dogwalks.png',
		name: 'dogwalks',
	},
	{
		left: '6%',
		top: '100%',
		zIndex: '2',
		width: '5%',
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
		top: '53%',
		zIndex: '0',
		width: '15%',
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
const twopapes = [
	{ index: 0, url: '/grassnight' },
	{ index: 1, url: '/grassday' },
]
// #e1e1e1
const Village = theme => {
	console.log(theme, 'dldld')

	const [index, set] = useState(false)

	const transitions = useTransition(twopapes, {
		keys: twopapes.map((item, index) => index),
		from: { opacity: 0, position: 'absolute' },
		enter: { opacity: 1, position: 'absolute' },
		leave: { opacity: 0, position: 'absolute' },
		// reverse: show,
		// delay: 4000,
		// duration: 9000,
		config: { duration: 850 },
	})

	const p = () => {
		return transitions(styles =>
			theme.theme.nightMode ? (
				<animated.div style={styles}>
					<Wallpaper wallpaper='/grassnight.png' />
				</animated.div>
			) : (
				<animated.div style={styles}>
					<Wallpaper wallpaper='/grassday.png' />
				</animated.div>
			)
		)
	}

	// const { theme } = props
	console.log(theme)
	let currentImageIndex = 0
	const [activeIndex, setactiveIndex] = useState(0)
	// useEffect(() => {
	// 	setInterval(() => {
	// 		currentImageIndex === 0 ? setactiveIndex(1) : setactiveIndex(0)
	// 	}, 3000)
	// })
	return (
		<>
			{/* {theme.nightMode ? (
				
			) : (
			)} */}
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
								const { left, top, zIndex, width, imageDay, imageNight, slug, pageId } = home
								return (
									<Home
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
