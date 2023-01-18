import { Link } from "react-router-dom";

import './mainPage.css';

const { useEffect, useState } = require("react");

const MainPage = () => {
	const API_URL = 'https://hacker-news.firebaseio.com/v0/';

	const [inputValue, setinputValue] = useState([]);
	const [arrNews, setArrNews] = useState([]);

	useEffect(() => {
		fetch(`${ API_URL }topstories.json`)
			.then(res => res.json())
			.then(ids => {
				return fetchItems(ids);
			})
			.then(response => setinputValue(response))
			.catch(() => {});

		const fetchItems = (ids) => {
			return Promise.all(
				ids.slice(0, 30).map(
					id => fetchItem(id)
				)
			);
		}

		const fetchItem = async(id) => {
			return await fetch(`${ API_URL }item/${id}.json?print=pretty`)
				.then(res => res.json())
		}
	}, [])

	const updateData = (val) => {
		setinputValue(val);
		setArrNews(val);
	}

	const updateRating = (val) => {
		setinputValue(val);
		setArrNews(val);
	}

	return (
		<>
		<div>
			<FilterDate onClickFilterDate={(val) => updateData(val)} item={inputValue}></FilterDate>
			<FilterRating onClickFilterRating={(val) => updateRating(val)} item={inputValue}></FilterRating>
		</div>
		<ol>
			{inputValue.map((result) => (
				<li key={result.id}><Link className="item-list" to="pageNews">{result.title + "  " + result.score + "  " +  result.by + "  " +result.time}</Link></li>
			))}
		</ol>
		</>
	)
}

const Button = ({onClickButton, children}) => {
	return(
		<button onClick={() => onClickButton()}>{children}</button>
	)
}

const FilterDate = ({item, onClickFilterDate}) => {
	const handleClickFilterDate = () => {
		const filteredArray = item.sort((a, b) => (b.time - a.time));
		onClickFilterDate(filteredArray);
	}

	return(
		<Button onClickButton={() => handleClickFilterDate()}>Сортировка по дате</Button>
	)
}

const FilterRating = ({item, onClickFilterRating}) => {
	const handleClickFilterRating = () => {
		const sortArrRating = item.sort((a, b) => (b.score - a.score))
		onClickFilterRating(sortArrRating);
	}

	return(
		<Button onClickButton={() => handleClickFilterRating()}>Сортировка по рейтингу</Button>
	)
}

export default MainPage;
