import { NotFound } from '../components/NotFound.js'
import { AboutPage } from './about'
import { FaqPage } from './faq'

export const Page = ({ page }) => {
	if (page.parent === 'pages') {
		if (page.pageTitle === 'faq') {
			return <FaqPage />
		} else if (page.pageTitle === 'about') {
			return <AboutPage page={page} />
		}
	} else {
		return <NotFound />
	}
}
