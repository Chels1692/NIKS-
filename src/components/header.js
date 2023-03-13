import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1 className="logo">
                <Link to="/">NIKS</Link>
            </h1>
            {/* <button className="mobile-toggle" aria-controls="primary-nav" aria-expanded="false"></button> */}
            <nav>
                <ul id="primary-nav" data-visible="false" className="nav-items">
                    <li className="nav-item">
                        <Link to="/products">PRODUCTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skin-concerns">SKIN CONCERNS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skin-types">SKIN TYPE</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about-us">ABOUT US</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;