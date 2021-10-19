import { Button } from '../../app/app.styled'
import { RadioInput } from '../../components/inputs/RadioInput'
import { CartSumSubHeader } from '../cart/cart.styled'
import { Form } from './checkout.styled'
export const ShippingType = ({
	setPay,
	values,
	handleChanges,
	clearForm,
	ShippingTypeInit,
	SetShippingTypeInit,
	change,
}) => {
	const onChange = e => {
		const { value } = e.target
		change(value)
		// SetShippingTypeInit(value)
	}
	return (
		<Form onSubmit={() => setPay(true)}>
			<legend>choose shipping option</legend>
			{/* <br /> */}
			<div style={{ border: '1px solid grey', padding: '1em', borderRadius: '4px' }}>
				<RadioInput
					name='notracking'
					type='radio'
					placeholder='$0.50 no tracking'
					value={'50'}
					checked={ShippingTypeInit.shippingType === '50'}
					onChange={onChange}
				/>
			</div>
			<div style={{ border: '1px solid grey', padding: '1em', borderRadius: '4px' }}>
				<RadioInput
					name='tracking'
					type='radio'
					placeholder='
            $5.00 with tracking
            '
					onChange={onChange}
					value={'500'}
					checked={ShippingTypeInit.shippingType === '500'}
				/>
			</div>
			<CartSumSubHeader>
				<div></div>
				<Button>next</Button>
			</CartSumSubHeader>
		</Form>
	)
}
