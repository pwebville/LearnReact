import Button from './button';
import InputText from './input-text';
import './style.scss';

function AutoComplete() {
	return (
		<>
			<div className='todo_field'>
				<InputText />
				<Button label="Add ToDo"></Button>
		  </div>
		</>
	)
}

export default AutoComplete;