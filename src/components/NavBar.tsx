import { Link, NavLink } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import { useCartContext } from '../context/CartContext';

export const NavBar = () => {
  const { cartAmount } = useCartContext();

  return (
    <nav className="shadow-md mb-3 bg-white sticky">
      <div className="container mx-auto flex justify-between">
        <ul>
          <Link to={'/'}>Home</Link>
          <NavLink
            className={({ isActive }) =>
              [isActive ? ' bg-blue-300 p-2 rounded-md' : 'p-2'].join(' ')
            }
            to={'/store'}
          >
            Store
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              [isActive ? ' bg-blue-300 p-2 rounded-md' : 'p-2'].join(' ')
            }
            to={'/about'}
          >
            About
          </NavLink>
        </ul>
        <div className="mr-4 md:mr-0">
          <button className="bg-transparent hover:bg-blue-500 p-3 border border-blue-500 rounded-full relative hover:border-transparent text-blue-500 hover:text-white">
            <BsCartFill className="w-6 h-6" />
            <div className="absolute -bottom-2 -right-2 z-40  bg-red-500 text-white rounded-full px-2 flex justify-center items-center">
              {cartAmount}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
