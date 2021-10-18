const Checkbox = props => <input type='checkbox' {...props} />

export const RadioInput = ({ value, type, onChange, placeholder, name, required, checked }) => {
	return (
		<div>
			<label id={name} htmlFor={name}>
				<Checkbox
					name={name}
					type={type}
					id={value}
					// placeholder={placeholder}
					value={value}
					checked={checked}
					onChange={onChange}
					required={required}
				/>

				{placeholder}
			</label>
		</div>
	)
}
