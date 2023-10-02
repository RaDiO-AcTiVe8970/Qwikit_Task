/*import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { useRouter } from 'next/router';
import axios from 'axios';

function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', handleScroll);
    fetchData();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the position of the Features section
    const productsSection = document.getElementById('abtdiv');
    if (productsSection) {
      const productsSectionTop = productsSection.getBoundingClientRect().top;

      // Check if the Features section is in the viewport
      if (productsSectionTop < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    }
  };

  const redirectToProduct = () => {
    router.push({
      pathname: '/products',
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/product/allproducts');
      setProducts(response.data); // Assuming the API response is an array of products
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <div data-theme="cupcake">
      <Element name="featuresSection">
        <div
          id="abtdiv"
          className="grid place-items-center w-full bg-base-100"
          data-theme="cupcake"
        >
          <div className="max-w-5xl py-24 content-center justify-center">
            <h1 className="text-4xl text-center text-black font-bold">
              Our Products
            </h1>
            <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {console.log(products)}
              {products.map((product, key) => (
                <motion.div
                  key={key}
                  className="card w-full bg-base-100 shadow-xl hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: key * 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card-body mt-4 items-center text-center">
                    <h2 className="card-title text-black">{product.name}</h2>
                    <p className="text-black">{product.description}</p>
                    <p className="text-black">Price: ${product.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={redirectToProduct}
                    >
                      Learn More!
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Element>
      </div>
    </>
  );
}

export default Features;*/

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Redux/cartRedux';

function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', handleScroll);
    fetchData();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
    setQuantity(1); // Reset quantity to 1 after adding to cart
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = () => {
    dispatch(addProduct({ ...product, quantity }));
    setIsModalOpen(false);
    setQuantity(1); // Reset quantity to 1 after adding to cart
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleProductClick = (selectedProduct) => {
    setProduct(selectedProduct);
    handleModalOpen();
  };

  const handleScroll = () => {
    const productsSection = document.getElementById('abtdiv');
    if (productsSection) {
      const productsSectionTop = productsSection.getBoundingClientRect().top;
      if (productsSectionTop < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    }
  };

  const redirectToProduct = () => {
    router.push({
      pathname: '/products',
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/product/allproducts'
      );
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div data-theme="cupcake">
        <Element name="featuresSection">
          <div
            id="abtdiv"
            className="grid place-items-center w-full bg-base-100 p-6"
            data-theme="cupcake"
          >
            <div className="max-w-5xl py-12 content-center justify-center">
              <h1 className="text-4xl text-center text-black font-bold">
                Our Products
              </h1><br/>
              <input
                type="text"
                placeholder="Search by product name"
                className="input input-bordered w-full p-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="grid mt-8 md:grid-cols-3 grid-cols-1 gap-4">
              {filteredProducts.map((product, key) => (
                <motion.div
                  key={key}
                  className="card bg-base-100 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: key * 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <figure>
                    <img src={product.image} alt={product.name} />
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="card-title text-xl font-bold">{product.name}</h2>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-gray-700">Price: ${product.price}</p>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => handleProductClick(product)}
                    >
                      Learn More!
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Element>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="modal modal-open">
            <div className="modal-box">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={handleModalClose}
                >
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="py-4">Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>
              <div className="modal-action">
                <button
                  className="btn btn-primary"
                  onClick={handleModalConfirm}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={handleModalCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Features;


