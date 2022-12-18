import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import './todo.scss';

const ToDoInput = () => {
	const [inputs, setInputs] = useState('');
	const [arrListToDo, setArrListToDo] = useState([]);
	const [index, setIndex] = useState(0);

	console.log(index);

	const onChaneInput = (e) => {
		setInputs(e.target.value);
	}

	const showListToDo = () => {
		const val = inputs;
		setArrListToDo([...arrListToDo, inputs]);
		// arrListToDo.push(val);
		setInputs('');
		setIndex(index + 1);
	}

	const handleClickButton = (id) => {
		console.log();
		setArrListToDo(arrListToDo.filter(item => item.id !== id));
		// setArrListToDo([...newArr, inputs]);
	}

	return (
		<>
			<div className="block-form">
				<label>
					<input
						id={index}
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
				<div className="block-list__toDo">
					<label><input id={item.index} type="checkbox" value={item}></input>{item}</label>
					<button value={item.index} onClick={(val)=>handleClickButton(val)} className="block-list__icon-delete">
						<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
					</button>
				</div>
				)}
			</form>
		</div>
		</>
	)
}

export default ToDoInput;
