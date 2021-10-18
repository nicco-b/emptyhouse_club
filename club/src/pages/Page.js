import { useEffect, useState } from 'react'
import Donut from '../components/Donuts/Donut3'
import { Products } from '../features/shop/products/Products.js'
import { AboutPage } from './about'
import { FaqPage } from './faq'

export const Page = ({ page }) => {
	const [pageTitle, setPageTitle] = useState('')

	useEffect(() => {
		setPageTitle(page.parent)
	}, [page.parent])

	if (page.parent === 'pages') {
		if (page.pageTitle === 'faq') {
			return <FaqPage />
		} else if (page.pageTitle === 'about') {
			return <AboutPage />
		}
	} else if (page.parent === 'shop') {
		return (
			<>
				{' '}
				<Products page={page} />
			</>
		)
	}
}
