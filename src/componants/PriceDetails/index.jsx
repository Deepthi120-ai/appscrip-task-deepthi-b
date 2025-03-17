import { useCart } from "../../context/cart-context";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";

export const PriceDetails = () => {

    const { cart } = useCart();

    const totalCartAmount = getTotalCartAmount(cart);

    return (
        <div>
            <h3>Price Details</h3>
            <div>
                <p>Price {cart.cart.length} Items</p>
                <p></p>
            </div>
            <div style={{display:"flex", flexDirection:"row", gap:"8px"}}>
                <span>Total Amount</span>
                <span>{totalCartAmount}</span>
            </div>
        </div>
    )
}