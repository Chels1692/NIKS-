import { useState, useEffect } from 'react';
import '../css/description.css';
import '../css/style.css';
import {useLocation} from "react-router-dom";
import ProductCard from "../components/productcard";
import leaf from "../img/leaf.png";
import perfume from "../img/perfume.png";
import rabbit from "../img/rabbit.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Description = () => {
   const location = useLocation()
   const { productId } = location.state;

   const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 1023, min: 740 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 739, min: 600 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 599, min: 0 },
        items: 1
      }
    };
   
   const [product, setProduct] = useState("");
   const [retailers, setRetailers] = useState("");
   const [similars, setSimilars] = useState([]);
   
   const getProduct = async () => {
      try {
         const response = await fetch(`http://localhost:8000/niks/product/${productId}`);
         const json = await response.json();
         setProduct(json);
         getSimilars(json)
      } catch(err) {
         console.log(err);
      }
      
   }
   const getRetailers = async () => {
      try {
         const response = await fetch(`http://localhost:8000/niks/buy/${productId}`);
         const json = await response.json();
         setRetailers(json);
      } catch(err) {
         console.log(err);
      }
   }
   const getSimilars = async (json) => {
      const concerns = json && json?.map((info) => info.skin_concerns)[0];
      const type = productId.slice(-1);
      try {
         const response = await fetch("http://localhost:8000/niks/similar/" + type + "/" + concerns);
         const json = await response.json();
         setSimilars(json);
      } catch(err) {
         console.log(err);
      }
   }
   useEffect(() => {
      getProduct();
      getRetailers();
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
                           {info.cruelty_free? <li className="highlightList"><img src={rabbit} alt='rabbit'/>Cruelty Free</li> : ""}
                           {info.vegan? <li className="highlightList"><img src={leaf} alt='leaf'/>Vegan</li> : ""}
                           {info.fragrence_free? <li className="highlightList"><img src={perfume} alt='perfume bottle'/>Fragrance Free</li> : ""}
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
               <Carousel 
               containerClass="results-cards"
               itemClass="product-card"
               responsive={responsive}
               swipeable={true}
               draggable={true}
               removeArrowOnDeviceType={["superLargeDesktop"]}
               >
                  {similars.map((similar, i) => (
                     <ProductCard 
                     key={i}
                     product={similar}
                     />
                  ))}
               </Carousel>
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

