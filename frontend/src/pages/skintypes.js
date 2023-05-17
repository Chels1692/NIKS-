import '../css/skintypes.css';
import {Link} from 'react-router-dom'
import oily from "../img/oily.png"
import dry from "../img/dry.png"
import combo from "../img/combo.png"
import normal from "../img/normal.png"


const Types = () => {
    return (
        <div>
            <div className="title-container" id='skinTypes'>
                <h1 className="title-page">SKIN TYPES</h1>
            </div>
            <div className="info-cards">
                <div className="info-card">
                    <div className="card-title">
                        <h2>Normal Skin</h2>
                        <hr/>
                    </div>
                    <div className="info-container">
                        <img className ="pics" src={normal} alt="normalPic"></img>
                        <div>
                            <p className="descriptions">Normal skin is balanced, meaning it is neither too dry nor too oily. People with normal skin are not prone to breakouts or sensitivity. They typically have small pores and a smooth skin texture. The best products for normal skin help maintain the skin’s hydration by locking in moisture and supporting the skin’s protective barrier. An ideal routine includes a gentle cleanser and a lightweight hydrating moisturizer. The best ingredients for normal skin are Vitamin C, Niacinamide, Peptides, Salicylic acid, and green tea.</p>
                            <Link to="/products/normal" state={{name: "normal", section: "skinTypes", from: "info"}}>
                                <button className="button button--pandora"><span>Products for Normal Skin</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="info-card">
                    <div className="card-title">
                        <h2>Oily Skin</h2>
                        <hr/>
                    </div>
                    <div className="info-container">
                        <div>
                            <p className="descriptions">Oily skin is produced by sebaceous glands in the skin creating excess sebum. Sebum oily substance that is vital for hydrating and protecting the skin. Too much sebum causes the skin to appear shiny and feel greasy, specifically in the T-zone region (forehead, nose, and chin). People with oily skin may be prone to enlarged pores, acne, blackheads, and whiteheads. The best products for oily skin are gentle cleansers that effectively remove dirt and oil, and oil-free moisturizers that will hydrate the skin without adding extra oil. The best ingredients to treat and control oily skin are Glycolic acid, Hyaluronic acid, Niacinamide, and Salicylic acid. </p>
                            <Link to="/products/oily" state={{name: "oily", section: "skinTypes", from: "info"}}>
                                <button className="button button--pandora"><span>Products for Oily Skin</span></button>
                            </Link>
                        </div>
                        <img className ="pics" src={oily} alt="oilyPic"></img>
                    </div>
                </div>
                <div className="info-card">
                    <div className="card-title">
                        <h2>Dry Skin</h2>
                        <hr/>
                    </div>
                    <div className="info-container">
                        <img className ="pics" src={dry} alt="dryPic"></img>
                        <div>
                            <p className="descriptions">People with dry skin produce less natural oils than the other skin types. This may cause the skin to appear rough, flakey, or dull and feel tight or dehydrated. Dry skin can also result from exposure to changing temperature or humidity levels, harsh soap or skincare products, and medical conditions like eczema. The best products for people with dry skin are gentle and hydrating moisturizers and fragrance-free and non-comedogenic. The best ingredients for soothing dry skin are Ceramides, Hyaluronic acid, Glycerin, Jojoba oil, and Aloe vera. </p>
                            <Link to="/products/dry" state={{name: "dry", section: "skinTypes", from: "info"}}>
                                <button className="button button--pandora"><span>Products for Dry Skin</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="info-card">
                    <div className="card-title">
                        <h2>Combination Skin</h2>
                        <hr/>
                    </div>
                    <div className="info-container">
                        <div>
                            <p className="descriptions">Combination skin has areas that are dry as well as oily. People with combination skin typically have an oily T-zone caused by excess sebum production and cheeks that are either dry or normal. People with this skin type may be prone to acne, enlarged pores, blackheads, flakiness, and uneven skin texture. Oily skin can be caused by many factors such as stress, hormone fluctuation, and even the changing seasons. The best products for combination skin are cleansers that are effective at removing dirt and oil, as well as hydrating yet lightweight moisturizers. The best ingredients for combination skin are Hyaluronic acid, Ceramides, Salicylic acid, and Vitamin B5.</p>
                            <Link to="/products/combination" state={{name: "combination", section: "skinTypes", from: "info"}}>
                                <button className="button button--pandora"><span>Products for Combination Skin</span></button>
                            </Link>
                        </div>
                        <img className ="pics" src={combo} alt="comPic"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Types;