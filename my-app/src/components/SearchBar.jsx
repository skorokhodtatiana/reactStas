const SearchBar = () => {
	return(
		<>
			<form>
				<input type="text" placeholder="Search..."></input>
				<input type="checkbox" id="stoxkGoods"></input>
				<label htmlFor="stoxkGoods">Only show products in stock</label>
			</form>
		</>
	);
}

export default SearchBar;