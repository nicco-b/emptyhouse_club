import { OrdersHeader, OrdersLiisst, StyledOrderList } from './orders'
import styled from 'styled-components'

const ArtistLeaderBoard = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
	justify-items: center;
`

export const OrderSummary = ({ orders }) => {
	const convertToUsd = n => {
		const num = n
		const dollars = num / 100
		const usd = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		return usd
	}
	let good = orders.filter(o => o.status === 'succeeded')
	const ords = good.map(ea => {
		const p = ea.cart.map(c => {
			return {
				price: c.pricing.price,
				artist: c.artists[0],
				amount: c.amount,
				status: ea.status,
			}
		})

		const result = p.reduce((r, { artist, amount, price }) => {
			r[artist] = r[artist] || { artist: artist, price: 0 }
			r[artist].price += +price

			return r
		}, {})

		const o = Object.values(result)

		return o
	})

	const tots = ords.flat()
	const results = tots.reduce((r, { artist, amount, price }) => {
		r[artist] = r[artist] || { name: artist, price: 0 }
		r[artist].price += +price

		return r
	}, {})
	const os = Object.values(results)

	return (
		<StyledOrderList>
			<OrdersLiisst>
				{' '}
				<OrdersHeader>
					<ArtistLeaderBoard>
						{os.map(a => {
							return (
								<div key={a.name}>
									<div>{a.name}</div>
									<div>
										<b>{convertToUsd(a.price)}</b>
									</div>
								</div>
							)
						})}
					</ArtistLeaderBoard>
				</OrdersHeader>
			</OrdersLiisst>
		</StyledOrderList>
	)
}
