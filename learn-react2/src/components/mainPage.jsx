const { useEffect, useState } = require("react");

const API_URL = 'https://hacker-news.firebaseio.com/v0/';

const MainPage = () => {

	// const[] = useEffect();
	const [inputValue, setinputValue] = useState(" ");

	const sendInfo = async () => {
		let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json', {
			method: "POST",
			headers: {
			"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({ body: inputValue }),
		});

		
		console.log(response);
	};

	sendInfo();

	// fetch(`${ API_URL }topstories.json`)
	// 	.then(res => res.json())
	// 	.then(ids => {
	// 		return fetchItems(ids);
	// 	})
	// 	.then(response => console.log(response))
	// 	.catch(() => {});

	// const fetchItems = (ids) => {
	// 	return Promise.all(
	// 		ids.slice(0, 30).map(
	// 			id => fetchItem(id)
	// 		)
	// 	);
	// }

	// const fetchItem = (id) => {
	// 	return fetch(`${ API_URL }item/${id}.json?print=pretty`)
	// 		.then(res => res.json())
	// }


	return (
		<ul>

		</ul>
	)
}

export default MainPage;