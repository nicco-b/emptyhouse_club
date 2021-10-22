import { MainRouter } from './routes/main'
import styled from 'styled-components'
export const App = () => {
	const Tytle = styled.h1`
		padding: 1em;
		font-size: 1em;
	`
	return (
		<div>
			<Tytle>emptyhouse vip</Tytle>
			<br />
			<MainRouter />
		</div>
	)
}
