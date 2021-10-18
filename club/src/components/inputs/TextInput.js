import './textInput.css'

export const TextInput = ({ value, type, onChange, placeholder, name, required, active }) => {
	return (
		<div className='text-input' id='text-input'>
			<input
				name={name}
				type={type}
				// id={name}
				className='text-field'
				// placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
			/>
			<label className={active || value ? 'Active' : ''} id={name} htmlFor={name}>
				{placeholder}
			</label>
		</div>
	)
}

// const [] = useState(false)
// const [value, setValue] = useState(data)
// useEffect(() => {
// 	const V = values.map(v => Object.entries(v))
// 	const L = V.map(b => b)

// 	console.log('L : ', L)
// }, [values])

// useEffect(() => {
// 	handleChanges(text)
// }, [text])
// useEffect(() => {
// 	setText(value.value)
// }, [value])
