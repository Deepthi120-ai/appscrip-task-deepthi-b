import { Navbar } from "../../componants/Navbar";
import { useWishList } from "../../context/wish-context";
import { HorizontalProductCard } from "../../componants/HorizontalProductCard";

export const WishList = () => {

    const { wishlist } = useWishList();

    return (
        <>
            <Navbar />
            <main >
                <h2>My WishList</h2>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", gap: "30px"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px", paddingTop:"13px"}}>
                {
                    wishlist.wishlist?.length > 0 ? wishlist.wishlist.map(product => <HorizontalProductCard key={product.id} product={product}/>) :
                    <p>WishList is empty, add product to WishList</p>
                }
                </div>
                </div>

            </main>
        </>
    )
}