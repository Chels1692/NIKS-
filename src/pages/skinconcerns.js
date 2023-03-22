import {Link} from "react-router-dom";
import aging from "../img/aging.png";
import acne from "../img/acne.png";
import uneven from "../img/uneven.png";
import eczema from "../img/eczema.png";
import pores from "../img/pores.png";

const Concerns = () => {
    return (
        <main>
            <div className="title-container" id="skin-concerns">
                <h1 className="title-page">SKIN CONCERNS</h1>
            </div>
            <div className="info-cards">
                <div className="info-card">
                    <div className="card-title">
                        <h2>Acne</h2>
                        <hr/>
                    </div>
                    <div className="info-container">
                        <img src={acne} alt="Acne skin concern"/>
                        <div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <Link to="/products">
                                <button className="button button--pandora"><span>Acne Products</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="info-card">
                    <div className="card-title">
                        <h2>Aging</h2>
                        <hr/>
                    </div>
                    <div className="info-container">
                        <div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <Link to="/products">
                                <button className="button button--pandora"><span>Anti-Aging Products</span></button>
                            </Link>
                        </div>
                        <img src={aging} alt="Aging skin concern"/>
                    </div>
                </div>
                <div className="info-card">
                    <div className="card-title">
                        <h2>Pigmentation</h2>
                        <hr/>
                    </div>
                    <div className="info-container">
                        <img src={uneven} alt="Pigmentation skin concern"/>
                        <div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <Link to="/products">
                                <button className="button button--pandora"><span>Pigmentation Products</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="info-card">
                    <div className="card-title">
                        <h2>Texture</h2>
                        <hr/>
                    </div>
                    <div className="info-container">
                        <div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <Link to="/products">
                                <button className="button button--pandora"><span>Texture Products</span></button>
                            </Link>
                        </div>
                        <img src={pores} alt="Texture skin concern"/>
                    </div>
                </div>
                <div className="info-card">
                    <div className="card-title">
                        <h2>Medical</h2>
                        <hr/>
                    </div>
                    <div className="info-container">
                        <img src={eczema} alt="Medical skin concern"/>
                        <div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <Link to="/products">
                                <button className="button button--pandora"><span>Medical Products</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Concerns;