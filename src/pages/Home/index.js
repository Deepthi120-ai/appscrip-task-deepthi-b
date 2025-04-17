import { Navbar } from "../../componants/Navbar";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { ProductCard } from "../../componants/ProductCard";
import { SidebarFilters } from "../../componants/SidebarFilters";
import { useFilters } from "../../context/filter-context";
import { Footer } from "../../componants/Footer";
import { useRef } from "react";

export const Home = () => {

    const [selected, setSelected] = useState({});
    const [products, setProducts] = useState([]);
    const [filterOn, setFilterOn] = useState(true);
    const selectRef = useRef(null);

    const { filters } = useFilters();
  
    
        // for now we only filter by "Ideal For"
    const selectedCategory = filters["Ideal For"];


    // map UI labels like "Men" to API values like "men's clothing"
    const labelToCategory = {
    "Men": "men's clothing",
    "Women": "women's clothing",
    "Baby & Kids": "baby & kids", 
    };

    const allLabels = Object.keys(labelToCategory);
    const isAllSelected = selectedCategory.length === allLabels.length;

    const selectedCategories = selectedCategory.map(label => labelToCategory[label]);
    //console.log(selectedCategory,"cats",selectedCategories);
    
    const filteredProducts = isAllSelected?products:products.filter(product =>
        selectedCategories.includes(product.category.toLowerCase())
        );
    console.log("filtered",filteredProducts);

    const options = [
        'RECOMMENDED',
        'NEWEST FIRST',
        'POPULAR',
        'PRICE:HIGH TO LOW',
        'PRICE:LOW TO HIGH',
    ];

    const handleChange = (e) => {
        setSelected(e.target.value);
        applyBoldStyle(e.target);
    };

    const applyBoldStyle = (selectElement) => {
        Array.from(selectElement.options).forEach((option) => {
          option.style.fontWeight = option.value === selectElement.value ? "bold" : "normal";
        });
      };

    useEffect(() => {
        (async () => { //Since useEffect itself cannot be async, an Immediately Invoked Function Expression (IIFE)
                        //Without useEffect, the fetch request would likely run on every render
            const data = await getAllProducts();
            console.log(data);
            setProducts(data);
        })();
        
    }, []);

    return (
        <>
            <Navbar />
            <div className="home">
                <div className="home-inner">
                    <h1 className="home-title">DISCOVER OUR PRODUCTS</h1>
                    <p className="home-body">Lorem ipsum dolor sit amet cansectetur. Amet est posuere rhoncus
                        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                    </p>
                </div>
            </div>
            <div className="products-body">
                <div className="filter-bar">
                    <span className="total-items">{filteredProducts?.length} ITEMS </span>
                    <span className="filter-button" onClick={()=>setFilterOn(!filterOn)}>FILTER</span>
                    <span className="filter-switch" onClick={() => setFilterOn(!filterOn)}>
                    <span>{filterOn === true ? `< ` : `> `}</span>
                    <span style={{ textDecoration: "underline" }}>
                        {filterOn === true ? "HIDE FILTER" : "SHOW FILTER"}
                    </span>
                    </span>
                    <div className="sort-dropdown">
                        <select  ref={selectRef} value={selected} onChange={handleChange} style={{
                        fontWeight: selected ? "bold" : "normal"}} onFocus={() => applyBoldStyle(selectRef.current)}>
                            {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="productfilter-parent" style={{ display: "flex" }}>
                    {filterOn && <SidebarFilters filterOn={filterOn} />}
                    
                    <main
                        className={`products-container ${filterOn ? 'with-sidebar' : 'full-width'}`}
                        style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "13px",
                        justifyContent: "center",
                        paddingTop: "13px",
                        transition: "width 0.3s ease"
                        }}
                    >
                        {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                        ) : (
                        <p>No matching products found.</p>
                        )}
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}