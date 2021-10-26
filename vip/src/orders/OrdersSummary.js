import { OrdersHeader, OrdersLiisst, StyledOrderList } from './orders'
import { useState } from 'react'
export const OrderSummary = ({ orders }) => {
	const reducer = (previousValue, currentValue) => previousValue + currentValue
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
		console.log('p: ', p)
		let total = p.reduce(function (acc, curr) {
			// console.log(p)
			return acc + +curr.price * +curr.amount
		}, 0)
		// console.log('total: ', total)
		const s = p.map(artist => {
			return p.filter(obj => artist)
		})
		console.log('s: ', s)
		// for (let i = 0; i < p.length; i++) {
		// 	let key = p[i].artist
		// for (let j = i + 1; j < p.length; j++) {
		// 	if (p[j].artist == key) {
		// 		p[i].price = [...p[i].price]
		// 		delete p.splice(j, 1)
		// 	}

		// 		}
		// }
		return p
	})
	// console.log('total: ', total)
	// const LL = ords.map(ea => {
	// 	const reducer = (previousValue, currentValue) => previousValue + currentValue
	// 	const price = []
	// 	price.push(ea.price)
	// 	const artist = ea.artist
	// 	const t = price

	// 	return {
	// 		price,
	// 	}
	// })
	// console.log('LL: ', LL)

	const NewOrds = orders.map(ea => ea)
	console.log('NewOrds: ', NewOrds)

	console.log('ords: ', ords)
	return (
		<StyledOrderList>
			<OrdersLiisst>
				{' '}
				<OrdersHeader>
					<div>
						<div>Ryn</div>08
					</div>
					<div>
						<div>Harim</div>234
					</div>
					<div>
						<div>Lun</div>234235
					</div>
				</OrdersHeader>
			</OrdersLiisst>
		</StyledOrderList>
	)
}
