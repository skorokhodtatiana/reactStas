import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import PRODUCTS from '../date';

const FilterableProductTable = () => {
	return (
		<>
			<div>
				<SearchBar></SearchBar>
				<ProductTable products={PRODUCTS}></ProductTable>
			</div>
		</>
	);
}

export default FilterableProductTable;
