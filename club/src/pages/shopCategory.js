import { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router'
import { BasePage, BasePGrid, PageHeader, PageTitle, PageTitleBox } from './page.styled'
import { CharacterHeader } from '../features/village/village.styled'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getPageById, setPageLoading } from '../actions/pageActions'
import Donut from '../components/Donuts/Donut3'
import { Products } from '../features/shop/products/Products'

export const ShopCategory = () => {
	const { category } = useParams()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getPageById(category))
		return function cleanup() {
			dispatch(setPageLoading())
		}
	}, [category, dispatch])
	const pages = useSelector(state => state.pageReducer)
	const page = useSelector(state => state.pageReducer.page)

	const [error, setError] = useState('')
	const [pa, setPa] = useState('')

	useEffect(() => {
		setError(pages.error.message)
	}, [pages])

	useEffect(() => {
		const parent = page && page.parent
		setPa(parent)
	}, [page])
	console.log('PA', pa)
	return (
		<>
			<BasePage>
				<BasePGrid>
					{pages.loading ? (
						<Donut />
					) : error ? (
						<Redirect to={'/404'} />
					) : pa === 'shop' ? (
						<>
							<PageHeader>
								<PageTitleBox>
									<PageTitle>
										{page.pageTitle} {page.parent}
									</PageTitle>
								</PageTitleBox>
								<CharacterHeader>
									{/* <Character
										left={'0%'}
										top={'0%'}
										width={'calc(10% + 1vmin)'}
										image={page.headerImg || null}
										zIndex={'2'}
										name={'temp'}
									/> */}
								</CharacterHeader>
							</PageHeader>
							<Products page={page} />
						</>
					) : (
						pa && pa !== 'shop' && <Redirect to={'/404'} />
					)}
				</BasePGrid>
			</BasePage>
		</>
	)
}
