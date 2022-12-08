import { useEffect, useState } from "react";

const ToDoInput = () => {
	const [inputs, setInputs] = useState('');

	const onChaneInput = (e) => {
		setInputs(e.target.value);
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
		</form>
		</>
	)
}

export default ToDoInput;
