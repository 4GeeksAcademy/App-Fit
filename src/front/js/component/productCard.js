import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({ title, price, image, id }) => {
  const navigate = useNavigate();

  const { store, actions } = useContext(Context)

 const addToCart = () => {
  actions.addToCart(title, price, image, id, 1)
  toast.info('Added to Cart!', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }


  return (
    <div className="card bg-vital-black m-1" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt={`Photo of ${title}`}
        // Pendiente por optimizar la imagen, que ocupe todo el ancho de la card
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h5
          className="card-title fw-bold fs-5 text-vital-orange"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/product-detail/${id}`)}
        >
          {title}
        </h5>
        <p className="card-text text-vital-white">${price}</p>
        <button
          onClick={() => addToCart()}
          className="btn btn-vital-orange rounded-pill text-vital-white fw-bold"
        >
          Add to cart
        </button>
      </div>
      <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
    </div>
  );
};

export default ProductCard;