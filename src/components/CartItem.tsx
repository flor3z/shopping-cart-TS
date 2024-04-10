import { useCartContext } from '../context/CartContext';
import products from '../data/items.json';
import currencyFormat from '../utilities/currencyFormat';

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeItem } = useCartContext();
  const item = products.find((item) => item.id === id);

  if (item === null) return null;

  return (
    <div className="flex justify-between items-center">
      <img src={item?.imgUrl} className="h-28 w-28 object-contain" />
      <div>
        {item?.name}
        {quantity > 0 && <span className="text-gray-400"> x{quantity}</span>}
      </div>
      <span className="font-bold">
        Total : ${item ? Math.round(item.price * quantity * 100) / 100 : ''}
      </span>
      <button
        onClick={() => removeItem(id)}
        className="border border-solid border-red-300 hover:bg-red-100 rounded-sm px-1.5 py-1 transition transform ease-in-out duration-150 text-gray-400 hover:text-black"
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
