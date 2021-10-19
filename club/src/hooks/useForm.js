import { useState, useEffect } from 'react'
import { reach } from 'yup'
import schema from '../utils/formSchema'
const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key))
		}

		localStorage.setItem(key, JSON.stringify(initialValue))
		return initialValue
	})

	const setLocalStorageValue = value => {
		setValue(value)
		localStorage.setItem(key, JSON.stringify(value))
	}

	return [value, setLocalStorageValue]
}

const useForm = initValues => {
	const [formErrors, setFormErrors] = useLocalStorage('formErrors', initValues.errors)
	const [disabled, setDisabled] = useState(true)

	const validate = (name, value) => {
		reach(schema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: '' }))
			.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
	}
	const [values, setValues] = useLocalStorage('form', initValues.info)
	const [active, setActive] = useState(false)

	const handleChanges = e => {
		validate(e.target.name, e.target.value)

		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
		if (values[e.target.name] !== '') {
			setActive(true)
		} else {
			setActive(false)
		}
	}

	const clearForm = e => {
		e.preventDefault()
		setValues(initValues)
	}
	useEffect(() => {
		// 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
		schema.isValid(values).then(valid => setDisabled(!valid))
	}, [values])

	return [values, handleChanges, clearForm, setValues, active, setActive, disabled, formErrors]
}

export default useForm
