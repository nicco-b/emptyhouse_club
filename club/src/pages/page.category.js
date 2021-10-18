import axios from 'axios'
import { useEffect, useState } from 'react'
import { Redirect, useLocation, useParams } from 'react-router'
import { Grid } from '../app/app.styled'
import { BasePage, BasePGrid, PageHeader, PageTitle, PageTitleBox } from './page.styled'
import { Character } from '../features/village/objects/Character'
import { CharacterHeader } from '../features/village/village.styled'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getPage, getPageById, setPageLoading } from '../actions/pageActions'
import Donut from '../components/Donuts/Donut3'
import { Page } from './Page'

export const PageCategory = () => {
	const [api, setApi] = useState()
	const { pageId, id, category } = useParams()
	console.log(pageId, id, 'll')
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
	const { pathname } = useLocation()

	useEffect(() => {
		setError(pages.error.message)
	}, [pages])
	return (
		<>
			<BasePage>
				<BasePGrid>
					{pages.loading ? (
						<Donut />
					) : error ? (
						<Redirect to={'/404'} />
					) : (
						page && (
							<>
								<PageHeader>
									<PageTitleBox>
										<PageTitle> {page.pageTitle}</PageTitle>
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
								<Page page={page} />
							</>
						)
					)}
				</BasePGrid>
			</BasePage>
		</>
	)
}
