import { useWishList } from "../../context/wish-context";
import { findProductInWishList } from "../../utils/findProductInWishList";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({product}) => {

    const navigate = useNavigate();

    const { wishlist, wishDispatch } = useWishList();

    const isProductInWishList = findProductInWishList(wishlist, product.id);

    const onWishClick = (product) => {
        !isProductInWishList?
        wishDispatch({
            type:'ADD_TO_WISHLIST',
            payload: {product}
        }) : wishDispatch({
          type: 'REMOVE_FROM_WISHLIST',
            payload: { id: product.id }
        })
    }
    
    return (
 <div className="card">
     <div className="card-image-container">
          <img className="card-image" src={product.image} alt="product-image" />
     </div>
     <div className="card-details">
          <div className="card-title">{product.title}</div>
          <div className="card-details-bottom">
            <p className="auth-options">
                <span className="card-signin-link" onClick={() => navigate('/auth/login')}><u>Sign in </u></span>
                    or Create an account to see pricing
            </p>
            
            <img className="card-wishlist" src={isProductInWishList?"./heart.png":"/wishlist.png"} onClick={() => onWishClick(product)} style={{height:"20px"}} alt="wishlist" /> 
          </div>
          
     </div>
</div>
    )
}