import './style.scss';

function InputText(value, onChange) {
	function handleChange(e) {
		onChange(e.target.value)
	}
	return (
		<>
			<input className='input_filed' type='text' placeholder='What do you want to do today?' onChange={handleChange} />
		</>
	)
}

export default InputText;