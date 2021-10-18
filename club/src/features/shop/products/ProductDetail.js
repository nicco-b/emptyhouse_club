import axios from 'axios'
import { prominent } from 'color.js'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getProductById, setProductsLoading } from '../../../actions/shopActions'
import { Button } from '../../../app/app.styled'
import { Box } from '../../village/village.styled'
import Donut from '../../../components/Donuts/Donut3'
import {
	A,
	PDetail,
	PDetailBottomBox,
	PDetailDescription,
	PDetailPrice,
	PDetailTitle,
	ProductDetailDetails,
	ProductDetailGrid,
	ProductDetailImages,
	ProductDetailLeft,
	ProductDetailRight,
	ProductNav,
	PThumbnail,
} from './products.styled'
import { addToCart } from '../../../actions/cartActions'
import {
	BasePage,
	BasePGrid,
	PageHeader,
	PageTitle,
	PageTitleBox,
} from '../../../pages/page.styled'

export const ProductDetail = () => {
	const { category, id, pageId } = useParams()
	const dispatch = useDispatch()
	console.log('category: ', category, pageId, id)
	// const [product, setProduct] = useState([])
	useEffect(() => {
		dispatch(getProductById(id, category))
		return function cleanup() {
			dispatch(setProductsLoading())
		}
	}, [dispatch])
	const product = useSelector(state => state.shopReducer.product)
	const shop = useSelector(state => state.shopReducer)
	const [error, setError] = useState('')

	useEffect(() => {
		setError(shop.error.message)
	}, [shop])
	const convertToUsd = n => {
		const num = n
		const dollars = num / 100
		const usd = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		return usd
	}
	return (
		<BasePage>
			<BasePGrid>
				{shop.loading ? (
					<Donut />
				) : error ? (
					<Redirect to={'/404'} />
				) : (
					product && (
						<>
							<PageHeader>
								<PageTitleBox>
									<PageTitle>
										<div>back to:</div>
										{'  '}
										{product.parentPage && <A to={product.parentPage.path}>{product.parentPage.pageTitle}</A>}
									</PageTitle>
								</PageTitleBox>
							</PageHeader>
							<ProductDetailGrid>
								<ProductDetailLeft>
									{product.productImages &&
										product.productImages.map(image => {
											return <PThumbnail key={image.url} src={image.url} alt={'alttemp'} />
										})}
								</ProductDetailLeft>
								<ProductDetailRight>
									<PDetailTitle>{product.title}</PDetailTitle>
									<div
										style={{
											display: 'grid',
											gap: '1em',
											gridAutoFlow: 'column',
											width: '100%',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}>
										<PDetailPrice>{convertToUsd(product.pricing.price)}</PDetailPrice>
										<Button onClick={() => dispatch(addToCart(product))}>add to cart</Button>
									</div>
									<PDetailDescription>
										{product.shipping.width}" x {product.shipping.height}"
									</PDetailDescription>
									<PDetailDescription>
										<b>{product.description}</b>
									</PDetailDescription>

									<PDetailDescription>{product.parentPage.pageDescription}</PDetailDescription>
									<PDetailBottomBox>
										<PDetailDescription>
											<div
												style={{
													display: 'grid',
													whiteSpace: 'nowrap',
													gridAutoFlow: 'column',
													width: 'fit-content',
													gap: '1em',
												}}>
												artist:
												{product.artists.map(artist => (
													<div style={{ cursor: 'pointer', fontWeight: 800, textDecoration: 'underline' }}>
														{artist}
													</div>
												))}
											</div>
										</PDetailDescription>
									</PDetailBottomBox>
								</ProductDetailRight>
							</ProductDetailGrid>
						</>
					)
				)}
			</BasePGrid>
		</BasePage>
	)
}
