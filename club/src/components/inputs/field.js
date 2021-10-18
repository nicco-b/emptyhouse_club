import './textInput.css'
// import { useState } from 'react'
import useForm from '../../../hooks/useForm'
import { useEffect, useState } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { Rectangle } from '../shapes/mainRectangle'
import useEditor from '../../../hooks/useEditor'
import { convertFromHTML, convertToHTML, blockToHTML } from 'draft-convert'

export const Field = ({
	data,
	label,
	value,
	onChange,
	values,
	handleChanges,
	clearForm,
	active,
	setActive,
	setItem,
	item,

	setValues,
}) => {
	const [inputs, setInputs] = useState([])
	useEffect(() => {
		setInputs(Object.entries(values))
	}, [values])
	const [text, setText] = useState()
	const [editorState, setEditorState, handleKeyCommand, editorChange, ite] = useEditor(values)
	// const changeOn = e => {
	// 	const { target } = e
	// 	// setInputs(target.value)
	// 	handleChanges(target, text)
	// }
	console.log(ite, 'ite')
	useEffect(() => {
		ite &&
			setItem({
				...item,
				description: ite.description,
			})
	}, [ite])
	// console.log(text, 'label')
	// const html = convertToHTML({
	// 	styleToHTML: style => {
	// 		if (style === 'BOLD') {
	// 			return <span style={{ color: 'blue' }} />
	// 		}
	// 	},
	// 	blockToHTML: block => {
	// 		if (block.type === 'unstyled') {
	// 			return <h1 />
	// 		}
	// 	},
	// 	entityToHTML: (entity, originalText) => {
	// 		if (entity.type === 'LINK') {
	// 			return <a href={entity.data.url}>{originalText}</a>
	// 		}
	// 		return originalText
	// 	},
	// })(editorState.getCurrentContent())

	// console.log(html, 'html')
	return (
		<div className='field-input' id='field-input'>
			{/* <input
					name={i[0]}
					id={i[0]}
					className='text-field'
					type='text'
					// placeholder={value}
					value={i[1]}
					onChange={handleChanges}
				/> */}

			<div className='field'>
				<label
					className={active || editorState.getCurrentContent().hasText() ? 'Active' : ''}
					id={label}
					htmlFor={label}>
					{label}
				</label>
				<div className='editor'>
					<Editor
						name={label}
						handleKeyCommand={handleKeyCommand}
						// placeholder={label}
						editorState={editorState}
						onChange={editorChange}
						key={value}
					/>

					{/* <textarea
							name={i[0]}
							id={i[0]}
							className='text-field'
							placeholder={value}
							value={i[1]}
							onChange={handleChanges}
						/> */}
				</div>
			</div>
		</div>
	)
}

// const [] = useState(false)
// const [value, setValue] = useState(data)
// useEffect(() => {
// 	const V = values[0].map(v => Object.entries(v))
// 	const L = V.map(b => b)

// 	console.log('L : ', L)
// }, [values])

// useEffect(() => {
// 	handleChanges(text)
// }, [text])
// useEffect(() => {
// 	setText(value.value)
// }, [value])
