import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <h1 className="logo">
                    <Link to="/">NIKS</Link>
                </h1>
                {/* <button className="mobile-toggle" aria-controls="primary-nav" aria-expanded="false"></button> */}
                <div id="col">
                    <ul className="footer-items">
                        <li className="footer-title">
                            <Link to="/products">PRODUCTS</Link>
                            <ul id="primary-footer" data-visible="false" className="nested-footer-items">
                                <li className="footer-item">
                                    Cleansers
                                </li>
                                <li className="footer-item">
                                    Treatments, Toners & Serums
                                </li>
                                <li className="footer-item">
                                    Exfoliators
                                </li>
                                <li className="footer-item">
                                    Moisturizers
                                </li>
                                <li className="footer-item">
                                    SPF
                                </li>
                            </ul>
                        </li>
                        <li className="footer-title">
                            <Link to="/skin-concerns">SKIN CONCERNS</Link>
                            <ul id="primary-footer" data-visible="false" className="nested-footer-items">
                                <li className="footer-item">
                                    Acne
                                </li>
                                <li className="footer-item">
                                    Aging
                                </li>
                                <li className="footer-item">
                                    Texture
                                </li>
                                <li className="footer-item">
                                    Pigmentation
                                </li>
                                <li className="footer-item">
                                    Medical
                                </li>
                            </ul>
                        </li>
                        <li className="footer-title">
                            <Link to="/skin-types">SKIN TYPE</Link>
                            <ul id="primary-footer" data-visible="false" className="nested-footer-items">
                            <li className="footer-item">
                                    Oily Skin
                                </li>
                                <li className="footer-item">
                                    Dry Skin
                                </li>
                                <li className="footer-item">
                                    Combination Skin
                                </li>
                                <li className="footer-item">
                                    Normal Skin
                                </li>
                            </ul>
                        </li>
                        <li className="footer-title">
                            <Link to="/about-us">ABOUT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="copyright">&copy; 2023 NIKS. All rights reserved.</p>
        </footer>
    );
}

export default Footer;