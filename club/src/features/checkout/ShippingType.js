import { Button } from '../../app/app.styled'
// import { RadioInput } from '../../components/inputs/RadioInput'
import { CartSumSubHeader } from '../cart/cart.styled'
import styled from 'styled-components'
import { Form } from './checkout.styled'
import * as RadioGroup from '@radix-ui/react-radio-group'

const StyledRadio = styled(RadioGroup.Item)`
	all: unset;
	background-color: white;
	width: 20px;
	height: 20px;
	border-radius: 100%;
	cursor: pointer;
	border: 1px solid grey;
`
const StyledIndicator = styled(RadioGroup.Indicator)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: relative;
	cursor: pointer;

	&:after {
		content: '';
		display: block;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #2b0e0f;
		cursor: pointer;
	}
`
const Flex = styled.div`
	display: grid;
	grid-template-columns: auto 5fr;
	margin: 10px 0;
	align-items: center;
	height: 45px;
	border: 1px solid grey;
	border-radius: 4px;
	padding: 0px 10px 0px 10px;
`
const Label = styled.label`
	/* display: grid;  */
	cursor: pointer;
	/* padding-left: 15px; */

	user-select: none;
	/* width: 100%; */
`
const RadioGroupBox = styled.div`
	/* width: 180px; */
`

const TextBox = styled.div`
	/* width: 180px; */
	display: grid;
	padding-left: 15px;
`

export const ShippingType = ({
	setPay,
	values,
	handleChanges,
	clearForm,
	ShippingTypeInit,
	SetShippingTypeInit,
	change,
}) => {
	const onChange = v => {
		change(v)
		// SetShippingTypeInit(value)
	}
	return (
		<Form onSubmit={() => setPay(true)}>
			<legend>choose shipping option</legend>
			<RadioGroupBox>
				<RadioGroup.Root onValueChange={v => onChange(v)} defaultValue='50' aria-label='View  density'>
					<Label htmlFor='r1'>
						<Flex>
							<StyledRadio value='50' id='r1'>
								<StyledIndicator />
							</StyledRadio>
							<TextBox>$0.50 without tracking</TextBox>
						</Flex>
					</Label>
					<Label htmlFor='r2'>
						<Flex>
							<StyledRadio onValueChange={onChange} value='500' id='r2'>
								<StyledIndicator />
							</StyledRadio>
							<TextBox>$5.00 USPS Priority Mail</TextBox>
						</Flex>
					</Label>
					<Label htmlFor='r3'>
						<Flex>
							<StyledRadio onValueChange={onChange} value='1000' id='r3'>
								<StyledIndicator />
							</StyledRadio>
							<TextBox>$10.00 USPS Overnight</TextBox>
						</Flex>
					</Label>
				</RadioGroup.Root>
			</RadioGroupBox>
			{/* 
			<RadioInput
				name='notracking'
				type='radio'
				placeholder='$0.50 no tracking'
				value={'50'}
				checked={ShippingTypeInit.shippingType === '50'}
				onChange={onChange}
			/>

			<RadioInput
				name='tracking'
				type='radio'
				placeholder='
            $5.00 with tracking
            '
				onChange={onChange}
				value={'500'}
				checked={ShippingTypeInit.shippingType === '500'}
			/> */}
			<CartSumSubHeader>
				<div></div>
				<Button>next</Button>
			</CartSumSubHeader>
		</Form>
	)
}
