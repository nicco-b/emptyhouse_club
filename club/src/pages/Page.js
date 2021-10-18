import { useEffect, useState } from 'react'
import Donut from '../components/Donuts/Donut3'
import { Products } from '../features/shop/products/Products.js'

export const Page = ({ page }) => {
	const [pageTitle, setPageTitle] = useState('')

	useEffect(() => {
		setPageTitle(page.parent)
	}, [page.parent])

	if (page.parent === 'pages') {
		return <div>im dumb</div>
	} else if (page.parent === 'shop') {
		return (
			<>
				{' '}
				<Products page={page} />
			</>
		)
	}
}
