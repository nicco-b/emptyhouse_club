import { useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Main, NavBox } from '../../app/app.styled'
import { CartIcon } from '../../features/cart/cart.styled'
import { getTotal } from '../../reducers'
import { getQuantity } from '../../reducers/cartss'
import {
	MainTitle,
	NavCart,
	NavLeftBox,
	NavRightBox,
	TempTwo,
	ToggleText,
	NavTemp,
} from './Nav.styled'

const TopLinks = [
	// {
	// 	slug: '/',
	// 	title: 'home',
	// },
	{
		slug: '/pages/about',
		title: 'about',
	},
	{
		slug: '/pages/faq',
		title: 'faq',
	},
]
export const TopNav = ({ setTheme, theme, day, night }) => {
	const cart = useSelector(state => state.cart)
	const p = cart.addedIds.map(id => {
		const arr = getQuantity(cart, id.id)
		return arr
	})
	const e = p.reduce(function (acc, val) {
		return acc + val
	}, 0)
	const { pathname } = useLocation()
	// const cartQuantity = getQuantity(cart, '6160fdd1b1464786c699e300')
	const cartTotal = useSelector(state => state.cartReducer.total)
	console.log(e)
	return (
		<NavBox>
			<NavLeftBox>
				<MainTitle>
					<NavLink exact to='/' activeClassName='current'>
						empty house club
					</NavLink>
				</MainTitle>
			</NavLeftBox>
			<NavTemp>
				{/* <ToggleText onClick={() => setTheme(day)}>day</ToggleText>
				<ToggleText onClick={() => setTheme(night)}>night</ToggleText> */}
				{pathname !== '/checkout' &&
					pathname !== '/cart' &&
					TopLinks.map(link => {
						return (
							<NavLink activeClassName='current' key={link.slug} to={link.slug}>
								{link.title}
							</NavLink>
						)
					})}
			</NavTemp>
			<NavRightBox>
				<TempTwo>
					<NavCart>
						<NavLink activeClassName='current' to='/cart'>
							{/* <CartIcon src={'/cart2.png'} alt='cart' /> */}
							{pathname !== '/checkout' && pathname !== '/cart' && e > 0 && `cart ${e}`}
						</NavLink>
					</NavCart>
				</TempTwo>
			</NavRightBox>
		</NavBox>
	)
}
