import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";


function App() {
  const [products,setProducts] = useState([]);
  const [isLoading,setLoading] = useState(false);
  const [isError,setError]     = useState(false);

  useEffect(()=>{
    getProducts();
  },[]);

  const getProducts = async () =>{
    try{
      setLoading(true)
    const response = await fetch("https://fakestoreapi.com/products");
    if(!response.ok){throw new Error('No products found.Come back soon.')}
    const products = await response.json();

    setProducts(products);
    
    }
    catch(error){
      setError(error.message);
      
    }
    setLoading(false);
  };
  
  return (
    <>
    <h1 className="title">Welcome Alice Stoe !</h1>
    <section className="flex-ctr">
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </section>

    {/* Show loading spinner if data is not yet loaded */}
    {isLoading && <div className="loader">Load products</div>}
    {/* Show error message if there was an issue retrieving the data */}
    {isError && <p> {isError} </p> }
    </>
  );
  }

export default App;
