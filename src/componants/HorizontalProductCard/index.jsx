import { useCart } from "../../context/cart-context"

export const HorizontalProductCard = ({product}) => {
    
    const { cartDispatch } = useCart();

    const onRemoveClick =(product) =>{
        cartDispatch({//when you're adding, you want to pass the entire product, when you're removing id is enough to locate and remove
            type: 'REMOVE_FROM_CART',
            payload: { id: product.id }
        })
    }

    return (
        <div className="card-horizontal d-flex shadow">
     <div className="card-hori-image-container relative">
          <img className="card-image" src={product.images[0]} alt="shoes" />
     </div>
     <div className="card-details d-flex direction-column">
          <div className="card-title">{product.title}</div>
          <div className="card-description">
               <p className="card-price">Rs. {product.price}
               </p>
          </div>
          <div className="quantity-container d-flex gap">
          </div>
          <div className="cta-btn d-flex gap">
               <div className="cta-btn">
                   <button onClick={()=>onRemoveClick(product)} className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">Remove from Cart</button>
               </div>
          </div>
     </div>
</div>
    )
}
