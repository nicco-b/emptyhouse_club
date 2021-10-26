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
		console.log('new object array: ', p)
		let total = p.reduce(function (acc, curr) {
			// console.log(p)
			return acc + +curr.price * +curr.amount
		}, 0)
		// console.log('total: ', total)
		// const s = p.map(nOrder => {
		// 	return p.filter(artist => nOrder.artist === 'Lun')
		// })

		// console.log('s: ', s)
		console.log('total', total)
		const result = p.reduce((r, { artist, amount, price }) => {
			r[artist] = r[artist] || { artist: artist, price: 0 }
			r[artist].price += +price

			return r
		}, {})

		const o = Object.values(result)

		return o
	})

	const NewOrds = orders.map(ea => ea)
	console.log('NewOrds: ', NewOrds)
	const tots = ords.flat()
	const results = tots.reduce((r, { artist, amount, price }) => {
		r[artist] = r[artist] || { name: artist, price: 0 }
		r[artist].price += +price

		return r
	}, {})
	const os = Object.values(results)

	console.log('results: ', os)
	console.log('tots: ', tots)
	console.log('ords: ', ords)

	return (
		<StyledOrderList>
			<OrdersLiisst>
				{' '}
				<OrdersHeader>
					<ArtistLeaderBoard>
						{os.map(a => {
							console.log(a)
							return (
								<div>
									<div>{a.name}</div>
									<div>{convertToUsd(a.price)}</div>
								</div>
							)
						})}
					</ArtistLeaderBoard>
				</OrdersHeader>
			</OrdersLiisst>
		</StyledOrderList>
	)
}
