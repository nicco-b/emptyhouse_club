import {
	CartSumGrid,
	CartSummary,
	CartSumTitle,
	CartTitle,
	LineSeparator,
	CartSumProducts,
	CartSumProductItem,
	SumItemTitle,
	CartSumSubGrid,
	CartSumSubHeader,
} from '../../cart/cart.styled'
import { getQuantity } from '../../../reducers/cartss'

export const CartSummaryContainer = props => {
	const { pay, stateCart, cart, cartToat, e, shippingType } = props
	const convertToUsd = n => {
		const num = n
		const dollars = num / 100
		const usd = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		return usd
	}
	const addNum = (num1, num2) => {
		const r = num1 + num2
		return r
	}
	return (
		<>
			<CartSummary pay={pay}>
				<CartSumGrid>
					<CartSumTitle>
						<CartTitle>Summary</CartTitle>{' '}
						<div style={{ fontSize: '0.8em' }}>
							{e} {e > 1 ? 'items' : 'item'}
						</div>
					</CartSumTitle>
					<LineSeparator />
					<CartSumProducts>
						{stateCart
							? stateCart.map((c, i, arr) => {
									return (
										c && (
											<>
												<CartSumProductItem key={c.title}>
													<div>
														<b style={{ fontSize: '0.8em' }}>{getQuantity(cart, c._id)}</b>
													</div>
													<SumItemTitle>{c.title}</SumItemTitle>
													<div style={{ color: '#acadac ' }}>{c.page}</div>

													<div style={{ display: 'grid', justifyItems: 'end', color: '#acadac ' }}>
														{convertToUsd(c.pricing.price)}
													</div>
													<div style={{ display: 'grid', justifyItems: 'end', fontWeight: '700' }}>
														{convertToUsd(getQuantity(cart, c._id) * c.pricing.price)}
													</div>
												</CartSumProductItem>
												{arr.length - 1 !== i && (
													<div style={{ padding: '0em 0.6em 0em 0.6em' }}>
														<LineSeparator key={c._id} lineStyle={'dashed'} />
													</div>
												)}
											</>
										)
									)
							  })
							: 's'}
					</CartSumProducts>
					{/* <LineSeparator /> */}
					<LineSeparator />

					<CartSumSubGrid>
						<CartSumSubHeader>
							subtotal: <div>{convertToUsd(cartToat)}</div>
						</CartSumSubHeader>
						<CartSumSubHeader>
							shipping:<div>{convertToUsd(shippingType.shippingType)}</div>
						</CartSumSubHeader>
						<LineSeparator />
						<CartSumSubHeader>
							Order Total: <div>{convertToUsd(addNum(+cartToat, +shippingType.shippingType))}</div>
						</CartSumSubHeader>
					</CartSumSubGrid>
				</CartSumGrid>
			</CartSummary>
		</>
	)
}
