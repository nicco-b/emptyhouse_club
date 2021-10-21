import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { TopNav } from '../components/navigation/TopNav'

import { MainRouter } from '../routes/main.router'

import { Main, BaseGrid, GlobalStyle } from './app.styled'
import Head from './Head'

const App = () => {
	const { pathname } = useLocation()
	console.log('pathname: ', pathname)

	const day = {
		mainFont: '#505252',
		nightMode: false,
		fontActive: '#5a6865',
		boxBG: '#F7F7F790',
		wallpaperBg: '#dfc9a6',
		bg: '#EFEDE7',
		wallpaper: '/grass4.jpg',
		objFilter: 'brightness(100%)',
	}
	const night = {
		boxBG: '#e6e6e630',
		mainFont: '#151515',
		fontActive: '#5a6865',
		nightMode: true,
		wallpaperBg: '#5a6865',
		bg: '#D6D5D0',

		wallpaper: '/grass_dark.png',
		objFilter: 'brightness(74%)',
	}
	var hr = new Date().getHours()

	const [theme, setTheme] = useState(day)
	useEffect(() => {
		if (hr > 6 && hr < 20) {
			setTheme(day)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
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
					{/* {pathname === '/pages/about' && <Footer />}
					{pathname === '/pages/faq' && <Footer />} */}
				</BaseGrid>
			</Main>
		</ThemeProvider>
	)
}

export default App
