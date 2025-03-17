import { Navbar } from "../../componants/Navbar";
import { useCart } from "../../context/cart-context";
import { HorizontalProductCard } from "../../componants/HorizontalProductCard";
import { PriceDetails } from "../../componants/PriceDetails";

export const Cart = () => {

    const { cart } = useCart();

    return (
        <>
            <Navbar />
            <main >
                <h2>My Cart</h2>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", gap: "30px"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px", paddingTop:"13px"}}>
                {
                    cart.cart?.length > 0 ? cart.cart.map(product => <HorizontalProductCard key={product.id} product={product}/>) :
                    <p>Cart is empty, add product to cart</p>
                }
                </div>
                <PriceDetails/>
                </div>

            </main>
        </>
    )
}