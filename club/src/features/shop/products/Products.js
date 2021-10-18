import axios from 'axios'

import { useEffect, useState } from 'react'
import { useParams, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import {
	ProductBox,
	ProductBoxDetail,
	ProductBoxImg,
	ProductsGrid,
	PThumbnail,
	PThumbTitle,
	ShopGrid,
} from './products.styled'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllProducts, setProductsLoading } from '../../../actions/shopActions'
import Donut from '../../../components/Donuts/Donut3'

export const Products = ({ page }) => {
	const { path } = useRouteMatch()
	const dispatch = useDispatch()
	const { category } = useParams()
	const pag = useSelector(state => state.pageReducer.page.parent)
	console.log('category: ', category, pag)
	// const [cat, setCat] = useState([])
	useEffect(() => {
		if (pag && pag === 'shop') {
			console.log('why are you calling me')
			dispatch(getAllProducts(category))
		}
	}, [dispatch])
	const [prod, setProd] = useState([])
	const cat = useSelector(state => state.shopReducer.products)
	const loading = useSelector(state => state.shopReducer.loading)
	const [imgLoading, setImgLoading] = useState(true)
	useEffect(() => {
		setProd(cat)
	}, [cat])
	const convertToUsd = n => {
		const num = n
		const dollars = num / 100
		const usd = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		return usd
	}
	return loading ? (
		<Donut />
	) : (
		<ShopGrid>
			<ProductsGrid>
				{/* {page.parent} */}
				{prod &&
					prod.map(p => (
						<Link key={p._id} to={`${page.path}/${p._id}`}>
							<ProductBox>
								<ProductBoxImg>
									{p.thumbnail && (
										<PThumbnail
											onLoad={() => setImgLoading(false)}
											src={p.thumbnail.url}
											alt={p.title}
											css={`
												display: ${imgLoading ? 'none' : 'visible'};
											`}
										/>
									)}
									{imgLoading && <Donut />}
								</ProductBoxImg>
								<ProductBoxDetail>
									<PThumbTitle>{p.title}</PThumbTitle>
									{/* <div>{p.page}</div>
									<div>variants</div> */}
									<div>
										{p.shipping.width}" x {p.shipping.height}"
									</div>
									<PThumbTitle>{convertToUsd(p.pricing.price)}</PThumbTitle>
								</ProductBoxDetail>
							</ProductBox>
						</Link>
					))}
			</ProductsGrid>
		</ShopGrid>
	)
}
