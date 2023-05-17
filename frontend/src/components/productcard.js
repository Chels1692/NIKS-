import {Link} from "react-router-dom";
import vegan from "../img/vegan.png";

function ProductCard(product) {
    return (
        <Link className="product-card" to={`/product/${product.product.id}`} state={{productId: product.product.id}}>
            {product.product.vegan ? <div className="image-container"><img src={product.product.picture_url} alt={product.product.name}/><img className="vegan-tag" src={vegan} alt="Vegan tag"/></div> 
            : <div className="image-container"><img src={product.product.picture_url} alt={product.product.name}/></div>
            }
            <div className="name-container">
                <h6>{product.product.brand.toUpperCase()}</h6>
                <p>{product.product.name}</p>
            </div>
        </Link>
    );
}



export default ProductCard;