// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
	firstName: yup.string().required('Username is required'),

	lastName: yup.string().required('Username is required'),

	email: yup.string().email('Must be a valid email address').required('Email is required'),
	address1: yup.string().required('Address is required'),
	address2: yup.string(),

	city: yup.string().required('City is required'),
	state: yup.string().required('State is required'),
	postalCode: yup.string().required('Postal Code is required').min(5, 'incorrect format'),
})

export default formSchema
