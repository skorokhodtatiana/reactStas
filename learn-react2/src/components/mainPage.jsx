const { useEffect, useState } = require("react");

const API_URL = 'https://hacker-news.firebaseio.com/v0/';

const MainPage = () => {

	const [inputValue, setinputValue] = useState('');
	// const [inputValue, setinputValue] = useState({
	// 	by: "",
	// 	descendants: "",
	// 	kids: "",
	// 	score: "",
	// });

	let selectNews = [];
		// fetch(`${API_URL}topstories.json`)
		// 	.then(res => res.json())
		// 	.then(ids => {
		// 		return fetchIds(ids)
		// 	})
		// 	.catch(()=> {})

		// 	const fetchIds = (ids) => {
		// 		setinputValue(ids);
				
		// 		const date = Promise.all(
		// 			ids.slice(0, 5).map(id => fetchItem(id))
		// 		)
		// 		console.log(date);
				
		// 		setinputValue(date);
				
		// 	}

		// 	const fetchItem = async (id) => {
		// 		return await fetch(`${ API_URL }item/${id}.json?print=pretty`)
		// 			.then(res => res.json())
		// 	}
		useEffect(() => {
			fetch(`${ API_URL }topstories.json`)
				.then(res => res.json())
				.then(ids => {
					return fetchItems(ids);
				})
				// .then(response => setinputValue(response))
				.catch(() => {});
	
			const fetchItems = (ids) => {
				const selectNews = Promise.all(
					ids.slice(0, 5).map(
						id => fetchItem(id)
					)
				);
				//setinputValue(selectNews);
				//console.log(selectNews);
			}
	
			const fetchItem = async(id) => {
				//console.log(id);
				setinputValue(id);
				const result = await fetch(`${ API_URL }item/${id}.json?print=pretty`)
					.then(res => res.json())
					.then(res => {return res})
					.then(res => {setinputValue(res)});
					//.then(res => {console.log(res)})
					//.then(response => setinputValue(response));
					console.log(result)
					//selectNews.push(result);
			}	
			//setinputValue(fetchItem);
			// selectNews.push(fetchItem);

			// setinputValue(fetchItem)
			// 			console.log(fetchItem());
		}, [])


	return (
		<>
		<ul>
			{/* {inputValue.map((ne) => (
				<li>{ne.by}</li>
			))} */}
			{<li>
				<div>-{inputValue.by}</div>
				<div>-{inputValue.descendants}</div>
				<div>-{inputValue.kids}</div>
				<div>-{inputValue.score}</div>
			</li>}
		</ul>
		</>
	)
}

export default MainPage;