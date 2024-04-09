import { useCartContext } from '../context/CartContext';
import products from '../data/items.json';

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeItem } = useCartContext();
  const item = products.find((item) => item.id === id);

  if (item === null) return null;

  console.log(id, quantity);
  return (
    <div className="flex flex-col max-w-sm">
      <img src={item?.imgUrl} />
      <div className="flex justify-between">
        <span>{item?.price}</span>
        <button onClick={() => removeItem(id)}>X</button>
      </div>
    </div>
  );
};

export default CartItem;
