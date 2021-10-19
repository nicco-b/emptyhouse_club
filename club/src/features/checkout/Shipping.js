import { useState } from 'react'
import { Button } from '../../app/app.styled'
import { TextInput } from '../../components/inputs/TextInput'
import { CartSumSubHeader } from '../cart/cart.styled'
import { Form, StateDrop } from './checkout.styled'

const Shipping = ({ setShipping, values, handleChanges, clearForm, active }) => {
	const [succeeded] = useState(false)
	const [disabled] = useState(false)
	// const [error, setError] = useState(null)
	// const [processing, setProcessing] = useState('')

	return (
		<Form id='payment-formf' onSubmit={() => setShipping(true)}>
			{/* <TextInput
				type={'text'}
				value={values.firstName}
				onChange={handleChanges}
				placeholder='name'
				name={'firstName'}
				required
			/> */}
			<TextInput
				type='text'
				value={values.firstName}
				onChange={handleChanges}
				placeholder='First name'
				name='firstName'
				required
				active={active}
			/>
			<TextInput
				type='text'
				value={values.lastName}
				onChange={handleChanges}
				placeholder='Last name'
				name='lastName'
				required
				active={active}
			/>
			<TextInput
				type='text'
				value={values.email}
				onChange={handleChanges}
				placeholder='Email'
				name='email'
				required
				active={active}
			/>

			<TextInput
				type='text'
				value={values.address1}
				onChange={handleChanges}
				placeholder='Address 1'
				name='address1'
				required
				active={active}
			/>
			<TextInput
				type='text'
				value={values.address2}
				onChange={handleChanges}
				placeholder='Address 2'
				name='address2'
				active={active}
			/>
			<TextInput
				type='text'
				value={values.city}
				onChange={handleChanges}
				placeholder='City'
				name='city'
				required
				active={active}
			/>
			{/* 
<input
	type='text'
	value={state}
	onChange={e => setState(e.target.value)}
	placeholder='State'
/> */}
			<StateDrop>
				<select name='state' value={values.state} required onChange={handleChanges}>
					<option defaultValue disabled value=''>
						State
					</option>
					<option value='AL'>Alabama</option>
					<option value='AK'>Alaska</option>
					<option value='AZ'>Arizona</option>
					<option value='AR'>Arkansas</option>
					<option value='CA'>California</option>
					<option value='CO'>Colorado</option>
					<option value='CT'>Connecticut</option>
					<option value='DE'>Delaware</option>
					<option value='DC'>District Of Columbia</option>
					<option value='FL'>Florida</option>
					<option value='GA'>Georgia</option>
					<option value='HI'>Hawaii</option>
					<option value='ID'>Idaho</option>
					<option value='IL'>Illinois</option>
					<option value='IN'>Indiana</option>
					<option value='IA'>Iowa</option>
					<option value='KS'>Kansas</option>
					<option value='KY'>Kentucky</option>
					<option value='LA'>Louisiana</option>
					<option value='ME'>Maine</option>
					<option value='MD'>Maryland</option>
					<option value='MA'>Massachusetts</option>
					<option value='MI'>Michigan</option>
					<option value='MN'>Minnesota</option>
					<option value='MS'>Mississippi</option>
					<option value='MO'>Missouri</option>
					<option value='MT'>Montana</option>
					<option value='NE'>Nebraska</option>
					<option value='NV'>Nevada</option>
					<option value='NH'>New Hampshire</option>
					<option value='NJ'>New Jersey</option>
					<option value='NM'>New Mexico</option>
					<option value='NY'>New York</option>
					<option value='NC'>North Carolina</option>
					<option value='ND'>North Dakota</option>
					<option value='OH'>Ohio</option>
					<option value='OK'>Oklahoma</option>
					<option value='OR'>Oregon</option>
					<option value='PA'>Pennsylvania</option>
					<option value='RI'>Rhode Island</option>
					<option value='SC'>South Carolina</option>
					<option value='SD'>South Dakota</option>
					<option value='TN'>Tennessee</option>
					<option value='TX'>Texas</option>
					<option value='UT'>Utah</option>
					<option value='VT'>Vermont</option>
					<option value='VA'>Virginia</option>
					<option value='WA'>Washington</option>
					<option value='WV'>West Virginia</option>
					<option value='WI'>Wisconsin</option>

					<option value='WY'>Wyoming</option>
				</select>
			</StateDrop>
			<TextInput
				type='text'
				value={values.postalCode}
				onChange={handleChanges}
				placeholder='Postal code'
				name='postalCode'
			/>
			<CartSumSubHeader>
				{!succeeded && (
					<Button className='submit' onClick={clearForm}>
						clear!
					</Button>
				)}

				<Button className='submit' disabled={disabled}>
					next
				</Button>
			</CartSumSubHeader>
		</Form>
	)
}
export default Shipping
