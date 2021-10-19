import { useState, useEffect } from 'react'
import axios from 'axios'
// import { Footer } from './footer'
import { FQBlock, FQMiddle, FQGrid, ATitle } from './page.styled'
import { Artist } from './Artist'
import { LineSeparator } from '../features/cart/cart.styled'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const AboutPage = ({ page }) => {
	const [artists, setArtists] = useState([])
	useEffect(() => {
		axios.get(`${API_ENDPOINT}/api/artists`).then(res => {
			return setArtists(res.data)
		})
	})
	return (
		<FQMiddle>
			<FQGrid gap={'3em'}>
				<FQBlock gap={'1em'}>
					<ATitle>Empty House Club</ATitle>
					{page.pageDescription.map(ea => {
						return <li>{ea}</li>
					})}
					<LineSeparator />
				</FQBlock>
				{artists.map(artist => {
					return (
						<>
							<Artist artist={artist} />
							<LineSeparator />
						</>
					)
				})}
			</FQGrid>

			{/* <Footer /> */}
		</FQMiddle>
	)
}
