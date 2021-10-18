import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Donut from '../components/Donuts/Donut3'
import { TopNav } from '../components/navigation/TopNav'
import Village from '../features/village/village'
import { BasePage, BasePGrid } from '../pages/page.styled'
import { MainRouter } from '../routes/main.router'
import {
	Wallpaper,
	H1,
	Padding,
	Main,
	BaseGrid,
	Grid,
	TitleBox,
	Rox,
	NavTemp,
	GlobalStyle,
} from './app.styled'
import Head from './Head'

const App = () => {
	// Wallpaper.defaultProps = {
	// 	src: 'http:localhost:3000/artificialcrapgrass.png',
	// }
	const def = {
		nightMode: false,
		boxBG: '#F7F7F790',
		wallpaperBg: '#dfc9a6',
		bg: '#E1E1E1',
		// wallpaper: '/grass4.jpg',
		objFilter: 'brightness(100%)',
	}
	const day = {
		mainFont: '#505252',
		nightMode: false,
		fontActive: '#5a6865',
		boxBG: '#F7F7F790',
		wallpaperBg: '#dfc9a6',
		bg: '#E1E1E1',
		wallpaper: '/grass4.jpg',
		objFilter: 'brightness(100%)',
	}
	const night = {
		boxBG: '#e6e6e630',
		mainFont: '#151515',
		fontActive: '#5a6865',
		nightMode: true,
		wallpaperBg: '#5a6865',
		bg: '#aaa',
		wallpaper: '/grass_dark.png',
		objFilter: 'brightness(74%)',
	}
	var hr = new Date().getHours()

	const [theme, setTheme] = useState(day)
	useEffect(() => {
		if (hr > 6 && hr < 20) {
			setTheme(day)
		}
	}, [hr])
	return (
		<ThemeProvider theme={theme}>
			<Head theme={theme} title={'emptyhouseclub'} />

			<GlobalStyle />
			<Main>
				<BaseGrid>
					<TopNav theme={theme} setTheme={setTheme} day={day} night={night} />
					{/* <BasePage> */}
					{/* <BasePGrid> */}
					<MainRouter />
					{/* </BasePGrid> */}
					{/* </BasePage> */}
				</BaseGrid>
			</Main>
		</ThemeProvider>
	)
}

export default App
