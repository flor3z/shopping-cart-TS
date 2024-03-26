import products from '../data/items.json';
import Products from '../components/Products';

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="sm:columns-1 md:columns-2 lg:columns-2">
        {products.map((item) => (
          <div key={item.id}>
            <Products {...item} />
          </div>
        ))}
      </div>
    </>
  );
};
