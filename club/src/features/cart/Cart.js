import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeCart, removeFromCart } from '../../actions/cartActions'
import { getAllProducts, getProductById } from '../../actions/shopActions'
import { BasePage, BasePGrid, PageHeader, PageTitle, PageTitleBox } from '../../pages/page.styled'
import { getCartProducts, getTotal } from '../../reducers'
import { getCartQuantity, getQuantity } from '../../reducers/cartss'
import { ProductBox, ProductBoxImg, PThumbnail } from '../shop/products/products.styled'
import Donut from '../../components/Donuts/Donut3'
import { Line } from 'react-lineto'
import {
	BaseCart,
	BottomBox,
	ButtonBox,
	CartItembox,
	CartItemDWrap,
	CartItemRight,
	CartItemTitle,
	CartItemTop,
	CartPGrid,
	CartProducts,
	CartSumGrid,
	CartSummary,
	CartSumProductItem,
	CartSumProducts,
	CartSumSubGrid,
	CartSumSubHeader,
	CartSumTitle,
	CartThumb,
	CartTitle,
	CartTotal,
	LineSeparator,
	RightBottomBox,
	RightTopBox,
	SumItemTitle,
	UnderSummary,
} from './cart.styled'
import { Line15 } from '../../components/Line 14'
import { CartSummaryContainer } from '../checkout/CartSummary/CartSummaryContainer'
import { Button } from '../../app/app.styled'
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const Cart = () => {
	const [prod, setProd] = useState([])
	const [stateCart, setStateCart] = useState([])
	const [pagesV, setPagesV] = useState([])
	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart)
	const p = cart.addedIds.map(id => {
		const arr = getQuantity(cart, id.id)
		return arr
	})
	const e = p.reduce(function (acc, val) {
		return acc + val
	}, 0)
	// useEffect(() => {

	// 	setPagesV(u)
	// }, [])
	// useEffect(() => {
	// 	const Pro = cart.addedIds.map(i => {
	// 		return i
	// 	})
	// 	const pp = dispatch(getProductById(Pro))
	// }, [])
	// useEffect(() => {
	// 	console.log(getCartProducts(cart))
	// }, [])
	//:ahhd
	useEffect(() => {
		const getRegistrations = async event => {
			// (async () => {
			const p = cart.addedIds.map(p => p.page)
			const u = [...new Set(p)]
			const promises = u.map(p => {
				// const w = [... Set(p)]
				// console.log(w, 'omg')

				return axios
					.get(`${API_ENDPOINT}/api/shop/${p}`)
					.then(res => {
						return res.data
					})
					.catch(error => {
						console.log(error, 'sdffs')
						return error
					})
			})
			const registrations = await Promise.all(promises).then(values => {
				console.log(values, 'kl')
				return values
			})

			// })
			//need more redux actions for this cart stuff
			console.log(registrations, 'rrrr')

			setProd(registrations.flat())
		}

		getRegistrations()
		// return function cleanup() {
		// 	setProd([])
		// }
	}, [cart.addedIds])
	useEffect(() => {
		const getCarrt = async () => {
			const prodf = await prod
			const e = cart.addedIds.map(p => {
				return prodf.find(f => f._id === p.id)
			})
			setStateCart(e)
		}
		getCarrt()
	}, [prod])

	const [imgLoading, setImgLoading] = useState(true)

	console.log(prod, 'ppp')
	const handleRemove = c => {
		const q = getQuantity(cart, c._id)
		console.log(q, 'sdf')
		if (q === 1) {
			console.log('gdfgdfgfdg')
			// dispatch(removeCart(c._id))
		} else {
			dispatch(removeFromCart(c))
		}
	}
	const [cartToat, setCartToat] = useState()
	useEffect(() => {
		const sub =
			stateCart &&
			stateCart.map((c, i, arr) => {
				const subd = c && getQuantity(cart, c._id) * c.pricing.price
				return subd
			})
		const total = stateCart && sub.reduce((total, sub) => total + sub, 0)
		setCartToat(total)
		console.log(sub)
	}, [cart, stateCart])
	const convertToUsd = n => {
		const num = n
		const dollars = num / 100
		const usd = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		return usd
	}
	return (
		<BasePage>
			<BasePGrid>
				<PageHeader>
					<PageTitleBox>
						{cart.addedIds.length > 0 ? <PageTitle>CART</PageTitle> : <PageTitle>CART EMPTY</PageTitle>}
					</PageTitleBox>
					{/* <CharacterHeader> */}
					{/* <Character
										left={'0%'}
										top={'0%'}
										width={'calc(10% + 1vmin)'}
										image={page.headerImg || null}
										zIndex={'2'}
										name={'temp'}
									/> */}
					{/* </CharacterHeader> */}
				</PageHeader>

				<BaseCart>
					<CartPGrid>
						<CartProducts>
							{stateCart
								? stateCart.map(c => {
										return (
											c && (
												<>
													<CartItembox>
														{/* {c._id} */}
														{/* <Link to={`/shop/${c.page}/${c._id}`}>
														{c.thumbnail ? <CartThumb src={c.thumbnail.url} alt={c.title} /> : <Donut />}
													</Link> */}

														<ProductBox>
															<Link to={`/shop/${c.page}/${c._id}`}>
																<ProductBoxImg>
																	{c.thumbnail && (
																		<PThumbnail
																			onLoad={() => setImgLoading(false)}
																			src={c.thumbnail.url}
																			alt={c.title}
																			css={`
																				display: ${imgLoading ? 'none' : 'visible'};
																			`}
																		/>
																	)}
																	{/* {imgLoading && <Donut />} */}
																</ProductBoxImg>
															</Link>
														</ProductBox>
														<CartItemDWrap>
															<CartItemRight>
																<CartItemTop>
																	<CartItemTitle>{c.title}</CartItemTitle>
																	<RightTopBox>{convertToUsd(c.pricing.price)}</RightTopBox>
																</CartItemTop>
																<div>{c.page}</div>
																{c.artists[0]}
																<BottomBox>
																	<ButtonBox>
																		{getQuantity(cart, c._id) > 1 && (
																			<button onClick={() => handleRemove(c)} style={{ cursor: 'pointer' }}>
																				-
																			</button>
																		)}
																		<div>
																			<b style={{ fontSize: '0.8em' }}>{getQuantity(cart, c._id)}</b>
																		</div>
																		<button onClick={() => dispatch(addToCart(c))} style={{ cursor: 'pointer' }}>
																			+
																		</button>
																	</ButtonBox>
																	<RightBottomBox>
																		<div
																			style={{ textDecoration: 'underline', cursor: 'pointer' }}
																			onClick={() => dispatch(removeCart(c))}>
																			remove
																		</div>
																	</RightBottomBox>
																</BottomBox>
															</CartItemRight>
														</CartItemDWrap>
													</CartItembox>
													<LineSeparator />
												</>
											)
										)
								  })
								: 'd'}
						</CartProducts>
						<div>
							{cart.addedIds.length > 0 && (
								<CartSummaryContainer
									// pay={pay}
									stateCart={stateCart}
									cart={cart}
									cartToat={cartToat}
									e={e}
									shippingType={{ shippingType: '0' }}
								/>
							)}
							{cart.addedIds.length > 0 ? (
								<UnderSummary>
									<div style={{ textDecoration: 'underline', cursor: 'pointer' }}>
										<Link to={'/'}>
											<Button>continue shopping</Button>
										</Link>
									</div>

									<div style={{ textDecoration: 'underline', cursor: 'pointer' }}>
										<Link to={'/checkout'}>
											<Button>checkout</Button>
										</Link>
									</div>
								</UnderSummary>
							) : (
								<Button>continue shopping</Button>
							)}
						</div>
					</CartPGrid>
				</BaseCart>
			</BasePGrid>
		</BasePage>
	)
}
