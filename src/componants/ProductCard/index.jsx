import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { findProductInCart } from "../../utils/findProductInCart";

export const ProductCard = ({product}) => {

    const { cart, cartDispatch } = useCart();

    const navigate = useNavigate();

    const isProductInCart = findProductInCart(cart, product.id);

    const onCartClick = (product) => {
        !isProductInCart?
        cartDispatch({
            type:'ADD_TO_CART',
            payload: {product}
        }) : navigate('/cart');
    }
    
    return (
        <div className="card card-vertical d-flex direction-column relative shadow">
     <div className="card-image-container">
          <img className="card-image" src={product.images[0]} alt="shoes" />
     </div>
     <div className="card-details">
          <div className="card-title">{product.title}</div>
          <div className="card-description">
               <p className="card-price">
                  Rs. {product.price}
               </p>
          </div>
          <div className="cta-btn">
               <button onClick={() => onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
               <img src="/shopping_cart.png" style={{height:"20px"}} alt="cart" /> 
                 Add To Cart
               </button>
          </div>
     </div>
</div>
    )
}