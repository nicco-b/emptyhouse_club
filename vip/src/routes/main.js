import { Route, Switch } from 'react-router'
import useOrderState from '../hooks/useOrderState'
import { ListContainer } from '../list/ListContainer'
import { OrderDetail } from '../orders/OrderDetail'

export const MainRouter = () => {
	const [orders, selectedOrder, handleOrder] = useOrderState()

	return (
		<Switch>
			<Route exact path='/'>
				<ListContainer orders={orders} handleOrder={handleOrder} />
			</Route>
			<Route exact path='/:id'>
				<OrderDetail selectedOrder={selectedOrder} />
			</Route>
		</Switch>
	)
}
