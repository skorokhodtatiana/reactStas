import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	BrowserRouter
} from "react-router-dom";

import MainPage from './components/mainPage';
import PageNews from './components/pageNews';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<MainPage/>}></Route>
					<Route exact path="pageNews" element={<PageNews/>}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
