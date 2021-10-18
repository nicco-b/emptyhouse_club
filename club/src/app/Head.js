import { Helmet } from 'react-helmet-async'
import { withTheme } from 'styled-components'
export const Head = ({ title, description, meta = [], color, mode, theme }) => {
	console.log(theme, 'lll')
	// console.log(mode.mode, 'k')
	const color2 = '#f234900'
	const color3 = '#000000'
	return (
		<Helmet
			title={title}
			htmlAttributes={{ lang: 'en' }}
			meta={[
				{
					name: `description`,
					content: description,
				},
			]}>
			{theme.nightMode && (
				<>
					<meta name='theme-color' media='(prefers-color-scheme: dark)' content={`#A9AEB3`} />
					{/* <meta name='theme-color' media='(prefers-color-scheme: light)' content={`${color2}`} /> */}
				</>
			)}

			{/* <meta name='theme-color' content={`${color}`} /> */}
		</Helmet>
	)
}

export default withTheme(Head)
