import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { NavBox } from '../../app/app.styled'
import { CartIcon } from '../../features/cart/cart.styled'
import { getQuantity } from '../../reducers/cartss'
import {
	MainTitle,
	NavCart,
	NavLeftBox,
	NavRightBox,
	TempTwo,
	NavTemp,
	RightNav,
} from './Nav.styled'

const TopLinks = [
	{
		slug: '/shop/patches',
		title: 'shop',
	},
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
	return (
		<NavBox>
			<NavLeftBox>
				<MainTitle>
					<NavLink exact to='/' activeClassName='current'>
						empty house club
					</NavLink>
				</MainTitle>
			</NavLeftBox>
			<RightNav>
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
								{pathname !== '/checkout' && pathname !== '/cart' && e > 0 && (
									<div style={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center' }}>
										<CartIcon src={'/cartbag.png'} />{' '}
										<p style={{ paddingTop: '2px', fontSize: '1.2em' }}>{e}</p>
									</div>
								)}
							</NavLink>
						</NavCart>
					</TempTwo>
				</NavRightBox>
			</RightNav>
		</NavBox>
	)
}
