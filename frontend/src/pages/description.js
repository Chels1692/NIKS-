import { useState, useEffect } from 'react';
import '../css/description.css';
import '../css/style.css';
import {useLocation} from "react-router-dom";
import ProductCard from "../components/productcard";

const Description = () => {
   const location = useLocation()
   const { productId } = location.state;
   
   const [product, setProduct] = useState("");
   const [retailers, setRetailers] = useState("");
   const [similars, setSimilars] = useState("");
   
   const getProduct = async () => {
      try {
         const response = await fetch(`http://localhost:8000/niks/product/${productId}`);
         const json = await response.json();
         setProduct(json);
      } catch(err) {
         console.log(err);
      }
   }
   const getRetailers = async () => {
      try {
         const response = await fetch('http://localhost:8000/niks/buy');
         const json = await response.json();
         setRetailers(json);
      } catch(err) {
         console.log(err);
      }
   }
   // let concerns = product && product?.map((info) => info.skin_concerns.split(", "))[0];
   // const type = productId.slice(-1);
   // const getSimilars = async () => {
   //    try {
   //       const response = await fetch(`http://localhost:8000/niks/${type}`);
   //       const json = await response.json();
   //       console.log(json)
   //       setSimilars(json);
   //    } catch(err) {
   //       console.log(err);
   //    }
   // }
   useEffect(() => {
      getProduct();
      getRetailers();
      // getSimilars();
   }, [])
   return(
      <main>
         {product && product?.map((info, i) => (
         <div key={i} id="productsPage">
            <div id="productDescription">
               <div id="left">
                  <picture className='product-img-container'>
                     <img id="productImg" src={info.picture_url} alt={info.name}></img>
                  </picture>
                  {(info.cruelty_free || info.vegan || info.fragrence_free)?
                     <div>
                        <h2 id="highlightText">HIGHLIGHTS</h2>
                        <ul className="highlights">
                           {info.cruelty_free? <li className="highlightList">Cruelty Free</li> : ""}
                           {info.vegan? <li className="highlightList">Vegan</li> : ""}
                           {info.fragrence_free? <li className="highlightList">Fragrance Free</li> : ""}
                        </ul>
                     </div>: ""}
               </div>
               <div id="right">
                  <h3>{info.brand.toUpperCase()}</h3>
                  <h1>{info.name}</h1>
                  <Tabs key={i} info={info}/>
                  <div className="retailers-container">
                     <h2 id="where">WHERE TO BUY</h2>
                     {retailers && retailers?.map((retailer, i) => (
                        <div key={i} id="places">
                           <a href={retailer.retailer_1_link} target="_blank">
                              <button className="button button--pandora retailer"><span>{retailer.retailer_1_price} at {retailer.retailer_1}</span></button>
                           </a>
                           <a href={retailer.retailer_2_link} target="_blank">
                              <button className="button button--pandora retailer"><span>{retailer.retailer_1_price} at {retailer.retailer_2}</span></button>
                           </a>
                           <a href={retailer.retailer_3_link} target="_blank">
                              <button className="button button--pandora retailer"><span>{retailer.retailer_1_price} at {retailer.retailer_3}</span></button>
                           </a>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className='similar-products-container'>
               <h2 id="similarText">Similar Products</h2>
               <div id="similar">
                  {/* {similars && similars?.map((similar, i) => (
                     <ProductCard 
                     key={i}
                     product={similar}
                     />
                  ))} */}
                  {/* <img className="similarProducts" src="https://m.media-amazon.com/images/I/71Z-Dmc7RoL._SX679_.jpg" alt="product1"></img>
                  <img className="similarProducts" src="https://m.media-amazon.com/images/I/71Z-Dmc7RoL._SX679_.jpg" alt="product2"></img>
                  <img className="similarProducts" src="https://m.media-amazon.com/images/I/71Z-Dmc7RoL._SX679_.jpg" alt="product3"></img>
                  <img className="similarProducts" src="https://m.media-amazon.com/images/I/71Z-Dmc7RoL._SX679_.jpg" alt="product4"></img> */}
               </div>
            </div>
         </div>
      ))}
      </main>
   )
}

function Tabs(info){
   const[toggle, setToggle] = useState(1);
   const updateToggle = (id) => {
      setToggle(id);
   }

   return(
      <div className="description-container">
         <div className="descriptTabs">
            <div id="descritpionText" className={toggle === 1 ? "desTabs active-tab" : "desTabs"} onClick={() => updateToggle(1)}>DESCRIPTION</div>
            <div id="ingredients" className={toggle === 2 ? "desTabs active-tab" : "desTabs"} onClick={() => updateToggle(2)}>INGREDIENTS</div>
            <div id="HowToUse"className={toggle === 3 ? "desTabs active-tab" : "desTabs"} onClick={() => updateToggle(3)}>HOW TO USE</div>
         </div>
         <div className="content-container">
            <div className={toggle === 1 ? "desText active-content" : "desText"}>
               <h4>Product Description</h4>
               <p>{info.info.description}</p>
               <p>Target Skin Concerns: {info.info.skin_concerns}</p>
            </div>
            <div className={toggle === 2 ? "desText active-content" : "desText"}>
               <h4>Ingredients</h4>
               <p>{info.info.ingredients}</p>
            </div>
            <div className={toggle === 3 ? "desText active-content" : "desText"}>
               <h4>How To Use</h4>
               <p>{info.info.use}</p>
            </div>
         </div>
      </div>
    )
}

export default Description;

