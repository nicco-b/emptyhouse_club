import { useState } from 'react'

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
	const [values, setValues] = useLocalStorage('form', initValues)
	const [active, setActive] = useState(false)

	const handleChanges = e => {
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

	return [values, handleChanges, clearForm, setValues, active, setActive]
}

export default useForm
