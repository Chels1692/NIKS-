import {Link} from "react-router-dom";

const Footer = () => {
    const products = ["Cleansers", "Treatments, Toners & Serums", "Exfoliators", "Moisturizers", "SPF"];
    const skinConcerns = ["Acne", "Aging", "Texture", "Pigmentation", "Medical"];
    const skinTypes = ["Oily", "Dry", "Combination", "Normal"];

    return (
        <footer>
            <div className="footer-container">
                <h1 className="logo">
                    <Link to="/">NIKS</Link>
                </h1>
                <FooterLists>
                    <FooterList path="/products/" text="PRODUCTS">
                        <FooterItems list={products} section="productTypes"/>
                    </FooterList>
                    <FooterList path="/skin-concerns" text="SKIN CONCERNS">
                        <FooterItems list={skinConcerns} section="skinConcerns"/>
                    </FooterList>
                    <FooterList path="/skin-types" text="SKIN TYPE">
                        <FooterItems list={skinTypes} section="skinTypes" />
                    </FooterList>
                    <FooterList path="/about-us" text="ABOUT US" />
                </FooterLists>
            </div>
            <p className="copyright">&copy; 2023 NIKS. All rights reserved.</p>
        </footer>
    );
}

function FooterLists(props) {
    return (
        <div id="col">
            <ul className="footer-items">{props.children}</ul>
        </div>
    )
}

function FooterList(props) {
    return (
        <li className="footer-group">
            {(props.text == "PRODUCTS")
            ? <Link className="footer-title" to={props.path} state={{section: "productTypes", name: "All Products", from: "footer", title: props.item}}>{props.text}</Link>
            : <Link className="footer-title" to={props.path}>{props.text}</Link>}
            {props.children}
        </li>
    )
}

function FooterItems(props) {
    function FooterItem(props, section) {
        let sectionName = props.item.toLowerCase();
        return (
            <li className="footer-item">
                <Link to={`/products/${sectionName}`} state={{section: props.section, name: props.item, from: "footer", title: props.item}}>{props.item}</Link>
            </li>
        )
    }
    return (
        <ul id="primary-footer" data-visible="false" className="nested-footer-items">
            {props.list.map((item, _i) => (
                <FooterItem key={_i} item={item} section={props.section}/>
            ))} 
        </ul>
    )
}

export default Footer;