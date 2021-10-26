import styled from 'styled-components'
const RadioBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	border: 1px solid grey;
	border-radius: 4px;
	/* padding: 1em;
	 */
	height: 44px;
	cursor: pointer;
	/* position: relative; */
`
const RadioBtn = styled.input`
	cursor: pointer;
	width: 100%;
	/* height: 100%; */
	grid-column: 1;
	/* position: absolute; */
`
const Label = styled.label`
	cursor: pointer;
	grid-column: 2;
`

const Checkbox = props => <RadioBtn type='checkbox' {...props} />

export const RadioInput = ({ value, type, onChange, placeholder, name, required, checked }) => {
	return (
		<RadioBox>
			<Checkbox
				name={name}
				type={type}
				id={value}
				placeholder={placeholder}
				value={value}
				checked={checked}
				onChange={onChange}
				required={required}
			/>
			<Label id={name} htmlFor={name}>
				{placeholder}
			</Label>
		</RadioBox>
	)
}
