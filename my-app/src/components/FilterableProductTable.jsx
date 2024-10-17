import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import PRODUCTS from '../date';
import { useState } from 'react';

const FilterableProductTable = () => {
	const [filterText, setFilterText] = useState('');
	const [inStockOnly, setInStockOnly] = useState(false);

	return (
		<>
			<div>
				<SearchBar
					filterText={filterText}
					inStockOnly={inStockOnly}
					onFilterTextChange={setFilterText}
					onInStockOnlyChange={setInStockOnly}
					></SearchBar>
				<ProductTable
					products={PRODUCTS}
					filterText={filterText}
					inStockOnly={inStockOnly}
				></ProductTable>
			</div>
		</>
	);
}

export default FilterableProductTable;
