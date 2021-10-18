import { BasePage, PageTitle } from '../pages/page.styled'

export const NotFound = () => {
	return (
		<BasePage>
			<div style={{ padding: '2em 1em' }}>
				<PageTitle>
					<b>404</b> not found
				</PageTitle>
			</div>
		</BasePage>
	)
}
