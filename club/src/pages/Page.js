// import { NotFound } from '../components/NotFound.js'
import { AboutPage } from './about'
import { FaqPage } from './faq'

export const Page = ({ page }) => {
	return (
		<>
			{page.pageTitle === 'faq' ? (
				<FaqPage />
			) : page.pageTitle === 'about' ? (
				<AboutPage page={page} />
			) : page.pageTitle === 'f' ? (
				'hello f u'
			) : (
				<>no page data</>
			)}
		</>
	)
}
