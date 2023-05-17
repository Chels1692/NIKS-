import {Link, useLocation} from "react-router-dom";
import ProductCard from "../components/productcard";
import {useState, useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Results = () => {
    const location = useLocation();
    const answers = location.state?.answers;

    return (
        <main>
            <div className="title-container" id="results-page">
                <h1 className="title-page">RESULTS</h1>
            </div>
                <div className="quiz-results">
                    <ProductSections title="Cleansers" type="c"/>
                    {answers[2] == "Expanded" ?<ProductSections title="Treatments, Toners & Serums" type="t"/> : ""}
                    {answers[2] == "Expanded" ?<ProductSections title="Exfoliators" type="e"/> : ""}
                    <ProductSections title="Moisturizers" type="m"/>
                    <ProductSections title="SPF" type="s"/>
                </div>
        </main>
    );
};

function ProductSections(props) {
    const location = useLocation();
    const answers = location.state?.answers;
    const concern = answers[1].toLowerCase();
    const type = answers[0].toLowerCase();
    const product = props.type;
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch(`http://localhost:8000/niks/results/${concern}/${type}/${product}?limit=4`);
            const json = await response.json();
            setProducts(json);
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        getProducts();
    }, [])

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

    return (
        <div className="results-products">
            <div className="results-container">
                <h2>{props.title}</h2>
                <hr/>
                <Link to={`/products/results/${type}`} state={{resultsSkinType: type, resultsSkinConcern: concern, name: props.type, section: "productTypes", from: "quiz"}} id={props.type}>See All</Link>
            </div>
            <Carousel 
            containerClass="results-cards"
            itemClass="product-card"
            responsive={responsive}
            swipeable={true}
            draggable={true}
            removeArrowOnDeviceType={["superLargeDesktop"]}
            >
                {products.map((product, i) => (
                    <ProductCard
                    key={i}
                    product={product}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default Results;