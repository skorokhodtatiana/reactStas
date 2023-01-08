const { useEffect, useState } = require("react");

const API_URL = 'https://hacker-news.firebaseio.com/v0/';

const MainPage = () => {

	//const [inputValue, setinputValue] = useState('');
	const [inputValue, setinputValue] = useState({
		by: "",
		descendants: "",
		kids: "",
		score: "",
	});

	//let selectNews;
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
				
				// setinputValue("");
				const result = await fetch(`${ API_URL }item/${id}.json?print=pretty`)
					.then(res => res.json())
					.then(res => console.log(res))
					//.then(response => setinputValue(response))
					setinputValue(result);
					//console.log(id);
					return result;
			}	
		})


	return (
		<>
		<ul>
			{/* {inputValue.map((ne) => (
				<li>{ne}</li>
			))} */}
			{<li>{inputValue.by}</li>}
		</ul>
		</>
	)
}

export default MainPage;