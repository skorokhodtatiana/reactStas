import { useState } from "react";

import './todo.scss';

const ToDoInput = () => {
	const [inputs, setInputs] = useState('');
	const [arrListToDo, setArrListToDo] = useState([]);

	const onChaneInput = (e) => {
		setInputs(e.target.value);
	}

	const showListToDo = () => {
		const val = inputs;
		arrListToDo.push(val);
		setInputs('');
	}

	return (
		<>
			<div className="block-form">
				<label>
					<input
						type="text"
						name="newTask"
						placeholder="add todo"
						value={inputs}
						className="block-form__input"
						onChange={(e) => onChaneInput(e)}
					></input>
				</label>
				<button className="block-form__button" onClick={showListToDo}>Send</button>
			</div>
		<div>
			<form className="block-list">
				{arrListToDo.map(item => 
					<label><input type="checkbox" value={item}></input>{item}</label>
				)}
			</form>
		</div>
		</>
	)
}

export default ToDoInput;
