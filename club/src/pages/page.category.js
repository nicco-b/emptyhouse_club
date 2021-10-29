import { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router'
import { BasePage, BasePGrid, PageHeader, PageTitle, PageTitleBox } from './page.styled'
import { CharacterHeader } from '../features/village/village.styled'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getPageById, setPageLoading } from '../actions/pageActions'
import Donut from '../components/Donuts/Donut3'
import { Page } from './Page'

export const PageCategory = () => {
	const { pageId } = useParams()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getPageById(pageId))
		return function cleanup() {
			dispatch(setPageLoading())
		}
	}, [pageId, dispatch])
	const pages = useSelector(state => state.pageReducer)
	const page = useSelector(state => state.pageReducer.page)

	const [error, setError] = useState('')

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
