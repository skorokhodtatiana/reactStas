const SearchBar = ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) => {
	return(
		<>
			<form>
				<input type="text" value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} placeholder="Search..."></input>
				<input type="checkbox" value={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.value)} id="stoxkGoods"></input>
				<label htmlFor="stoxkGoods">Only show products in stock</label>
			</form>
		</>
	);
}

export default SearchBar;