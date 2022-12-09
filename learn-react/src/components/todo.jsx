import { useEffect, useState } from "react";

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
		<form>
			<input
				type="text"
				name="newTask"
				placeholder="add todo"
				value={inputs}
				className="input"
				id="inputTodo"
				onChange={(e) => onChaneInput(e)}
			></input>
			<label htmlFor="inputTodo">Add todo</label>
			<button onClick={showListToDo}>Send</button>
		</form>
		<div>
			<ul>
				{arrListToDo.map(item => 
					<li>{item}</li>
				)}
			</ul>
		</div>
		</>
	)
}

export default ToDoInput;
