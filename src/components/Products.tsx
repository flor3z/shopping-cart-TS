import currencyFormat from '../utilities/currencyFormat';

type ProductProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Products = ({ id, name, price, imgUrl }: ProductProps) => {
  let quantity = 1;
  return (
    <div
      key={id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img className="rounded-t-lg object-cover" src={imgUrl} alt="" />
      <div className="p-5 flex-col text-center items-center">
        <div className="flex justify-between mb-6">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {currencyFormat(price)}
          </p>
        </div>
        {quantity === 0 ? (
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to Cart
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        ) : (
          <div className="flex-col items-center">
            <div className="flex justify-evenly">
              <button className="text-xl font-semibold w-10 h-10 hover:bg-blue-500 bg-blue-600 text-white rounded-full active:bg-blue-700 transiton transform duration-200">
                -
              </button>
              <div>
                <span className="text-2xl font-semibold">{quantity}</span> in
                cart
              </div>
              <button className=" text-xl font-semibold w-10 h-10 hover:bg-blue-500 bg-blue-600 text-white rounded-full active:bg-blue-700 transiton transform duration-200">
                +
              </button>
            </div>
            <button className="bg-red-700 active:bg-red-800 font-semibold hover:bg-red-600 text-white px-2 py-3 rounded-md transiton transform duration-200">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
