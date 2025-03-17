import { Navbar } from "../../componants/Navbar";
import { useEffect, useState } from "react";//??
import { getAllProducts } from "../../api/getAllProducts";
import { ProductCard } from "../../componants/ProductCard";
import { useCart } from "../../context/cart-context";

export const Home = () => {

    const [products, setProducts] = useState([]);
    const { cart } = useCart();

    console.log(cart);

    useEffect(() => {
        (async () => { //Since useEffect itself cannot be async, an Immediately Invoked Function Expression (IIFE)
                        //Without useEffect, the fetch request would likely run on every render
            const data = await getAllProducts();
            setProducts(data);
        })();
        
    }, []);

    return (
        <>
            <Navbar />
            <main style={{display:"flex", flexWrap:"wrap", gap:"13px", justifyContent:"center", paddingTop:"13px"}}>
                {
                    products?.length > 0 && products.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </main>
        </>
    )
}