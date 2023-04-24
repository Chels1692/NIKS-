// import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
// import {useState, useEffect} from 'react';

const Results = () => {
    // const location = useLocation();
    // const answers = location.state?.answers;

    return (
        <main>
            <div className="title-container" id="results-page">
                <h1 className="title-page">RESULTS</h1>
            </div>
            <div className="quiz-results">
                 <ProductSections title="Cleansers" product="cleansers"/>
                 <ProductSections title="Treatments, Toners & Serums" product="treatments"/>
                 <ProductSections title="Exfoliators" product="exfoliators"/>
                 <ProductSections title="Moisturizers" product="moisturizers"/>
                 <ProductSections title="SPF" product="spf"/>
            </div>
        </main>
    );
};

function ProductSections(props) {
    return (
        <div className="results-products">
            <div className="results-container">
                <h2>{props.title}</h2>
                <hr/>
                <Link to="/products" id={props.product}>See All</Link>
            </div>
            <div className="results-cards">
                <Link className="product-card" to="/products">
                    <div className="image-container"></div>
                    <div className="name-container">
                        <h6>BRAND NAME</h6>
                        <p>Product Name</p>
                    </div>
                </Link>
                <Link className="product-card" to="/products">
                    <div className="image-container"></div>
                    <div className="name-container">
                        <h6>BRAND NAME</h6>
                        <p>Product Name</p>
                    </div>
                </Link>
                <Link className="product-card" to="/products">
                    <div className="image-container"></div>
                    <div className="name-container">
                        <h6>BRAND NAME</h6>
                        <p>Product Name</p>
                    </div>
                </Link>
                <Link className="product-card" to="/products">
                    <div className="image-container"></div>
                    <div className="name-container">
                        <h6>BRAND NAME</h6>
                        <p>Product Name</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Results;