import styled from 'styled-components'
import { BasePage, BasePGrid, PageHeader, PageTitleBox, PageTitle } from '../../pages/page.styled'
import { SuccessThumb } from '../cart/cart.styled'
const Full = styled.div`
	display: grid;
	justify-items: center;
	min-height: 100vh;
	grid-template-rows: 0.5fr 2fr 2fr;
`
const Centered = styled.div`
	display: grid;
	align-content: center;
	grid-row: 2;
	justify-items: center;
	gap: 1em;
`

export const SuccessPage = () => {
	return (
		<BasePage>
			<BasePGrid>
				<PageHeader>
					<PageTitleBox>
						<PageTitle>ORDER SUCCESSFUL</PageTitle>
					</PageTitleBox>
				</PageHeader>
				<Full>
					<Centered>
						<div style={{ fontWeight: 800, fontSize: '1.2em' }}>thank you for your purchase</div>
						<div>check email for receipt and updates</div>
						<SuccessThumb src='/shortredboots.png' alt='success' />
					</Centered>
				</Full>
			</BasePGrid>
		</BasePage>
	)
}
