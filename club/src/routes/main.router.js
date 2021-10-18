import { Route, Switch, Redirect } from 'react-router'
import { PageCategory } from '../pages/page.category'
import { ShopHome } from '../features/shop/shop.home'

import Village from '../features/village/village'
import { PageId } from '../pages/Page'
import { NotFound } from '../components/NotFound'
import { ProductDetail } from '../features/shop/products/ProductDetail'
import { Cart } from '../features/cart/Cart'
import { BasePage } from '../pages/page.styled'
import { Checkout } from '../features/checkout/checkout'
import { SuccessPage } from '../features/checkout/SuccessPage'

export const MainRouter = () => {
	return (
		<Switch>
			<Route exact path='/' component={Village} />
			<Route exact path={'/cart'} component={Cart} />

			<Route exact path={`/pages/:category`} component={PageCategory} />
			<Route exact path='/shop' component={ShopHome} />
			<Route exact path='/checkout'>
				{/* <Checkout cart={cart} setCart={setCart} cartTotal={cartTotal} /> */}
				<Checkout />
			</Route>
			<Route exact path={'/success'}>
				<SuccessPage />
			</Route>

			<Route exact path={`/shop/:category`} component={PageCategory} />
			<Route exact path={`/shop/:category/:id`} component={ProductDetail} />
			<Route path='/404' component={NotFound} />

			{/* <Route exact path='/shop/prison' component={PrisonHouse} />
			<Route exact path='/shop/patches' component={PatchesHouse} /> */}
			<Redirect to='/404' />
		</Switch>
	)
}
