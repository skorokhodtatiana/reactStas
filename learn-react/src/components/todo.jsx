import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import './todo.scss';

const ToDoInput = () => {
	const [inputs, setInputs] = useState({value: '', id: ''});
	const [arrListToDo, setArrListToDo] = useState([]);
	const [index, setIndex] = useState(0);

	const onChaneInput = (e) => {
		setInputs({value: e.target.value, id: arrListToDo.length});
		setIndex(index + 1);
	}

	const showListToDo = () => {
		setArrListToDo([...arrListToDo, inputs]);
		setInputs({value: '', id: ''});
	}

	const handleClickButton = (id) => {
		setArrListToDo(arrListToDo.filter(item => item.id !== id));
		
	}

	return (
		<>
			<div className="block-form">
				<label>
					<input
						id={inputs.id}
						type="text"
						name="newTask"
						placeholder="add todo"
						value={inputs.value}
						className="block-form__input"
						onChange={(e) => onChaneInput(e)}
					></input>
				</label>
				<button className="block-form__button" onClick={showListToDo}>Send</button>
			</div>
		<div>
			<div className="block-list">
				<ol>
					{arrListToDo.map(item =>
						<li className="block-list__toDo" id={item.id}>
							<label>
								<input type="checkbox"></input>
								{item.value}
								
							</label>
							<button value={item.id} onClick={()=>handleClickButton(item.id)} className="block-list__icon-delete">
									<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
								</button>
						</li>
					)}
				</ol>
			</div>
		</div>
		</>
	)
}

export default ToDoInput;
