import { Products } from '../features/shop/products/Products.js'
import { AboutPage } from './about'
import { FaqPage } from './faq'

export const Page = ({ page }) => {
	if (page.parent === 'pages') {
		if (page.pageTitle === 'faq') {
			return <FaqPage />
		} else if (page.pageTitle === 'about') {
			return <AboutPage page={page} />
		}
	} else if (page.parent === 'shop') {
		return (
			<>
				<Products page={page} />
			</>
		)
	}
}
