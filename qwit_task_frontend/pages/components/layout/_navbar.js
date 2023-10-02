import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from '../Redux/cartRedux';

const _NavBar = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId) => {
    // Dispatch the removeProduct action with the productId
    dispatch(removeProduct({ id: productId }));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">QwiKit.ca</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* ... (your SVG path data) */}
              </svg>
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
                  <p className="text-black">{product.name}</p>
                  <p className="text-black">Price: ${product.price}</p>
                  <p className="text-black">Quantity: {product.quantity}</p>
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

