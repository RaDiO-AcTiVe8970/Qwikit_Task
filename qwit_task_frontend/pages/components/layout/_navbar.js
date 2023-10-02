import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from '../../Redux/cartRedux';
import { useEffect } from "react";
import { resetCart } from "../../Redux/cartRedux";


const _NavBar = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let resetCartTimeout; 

  /*const handleRemoveProduct = (productId) => {
    dispatch(removeProduct({ id: productId }));
  };*/

  const resetCartAfterTimeout = () => {
    // Dispatch the resetCart action
    dispatch(resetCart());
  };

  const handleRemoveProduct = (productId) => {
    const updatedCart = [...cart.products]; // Create a copy of the cart products
    const productIndex = updatedCart.findIndex((product) => product.id === productId);
  
    if (productIndex !== -1) {
      const removedProduct = updatedCart[productIndex];
  
      if (removedProduct.quantity > 1) {
        updatedCart[productIndex] = {
          ...removedProduct,
          quantity: removedProduct.quantity - 1,
        };
      } else {
        updatedCart.splice(productIndex, 1);
      }
  
      dispatch(removeProduct({ id: productId, updatedCart }));
    }
  };

  const redirectToDiv = function () {
    const element = document.getElementById("abtdiv");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

   // Set a timeout to reset the cart after 20 seconds
   useEffect(() => {
    resetCartTimeout = setTimeout(resetCartAfterTimeout, 60000); // 20 seconds
    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(resetCartTimeout);
    };
  }, []);
  

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Opekkha Store</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
         <ul className="menu menu-horizontal px-1" onClick={redirectToDiv}>
          <li>
            <a>Products</a>
          </li>
         </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              {/*<p>Cart</p>*/}
              <span className="badge badge-sm indicator-item">
                {cart.quantity}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{cart.quantity}</span>
              <span className="text-info">
                Subtotal: <p>{cart.total}</p>
              </span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
              {cart.products.map((product) => (
                <div key={product.id} className="mb-4">
                  <p className="text-white">{product.name}</p>
                  <p className="text-white">Price: ${product.price}</p>
                  <p className="text-white">Quantity: {product.quantity}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default _NavBar;

