import {Link} from "react-router-dom";

function ProductCard(product) {
    //{`/products/${product._id}`}
    return (
        <Link className="product-card" to={`/product/${product.product.id}`} state={{productId: product.product.id}}>
            <div className="image-container"><img src={product.product.picture_url} alt={product.product.name}/></div>
            <div className="name-container">
                <h6>{product.product.brand.toUpperCase()}</h6>
                <p>{product.product.name}</p>
            </div>
        </Link>
    );
}



export default ProductCard;