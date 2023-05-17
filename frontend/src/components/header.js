import { useState } from "react";
import {Link} from "react-router-dom";
import caret from "../img/caretdown.png";

const Header = () => {
    const products = ["Cleansers", "Treatments, Toners & Serums", "Exfoliators", "Moisturizers", "SPF"];
    const skinConcerns = ["Acne", "Aging", "Texture", "Pigmentation", "Medical"];
    const skinTypes = ["Oily", "Dry", "Combination", "Normal"];

    const[toggle, setToggle] = useState(false);

    return (
        <header>
            <h1 className="logo">
                <Link to="/">NIKS</Link>
            </h1>
            <Navbar toggle={toggle} setToggle={setToggle}>
                <NavItem path="/products/" text="PRODUCTS" icon={caret} setToggle={setToggle}>
                    <DropdownMenu list={products} section="productTypes" setToggle={setToggle}/>
                </NavItem>
                <NavItem path="/skin-concerns" text="SKIN CONCERNS" icon={caret} setToggle={setToggle}>
                    <DropdownMenu list={skinConcerns} section="skinConcerns" setToggle={setToggle}/>
                </NavItem>
                <NavItem path="/skin-types" text="SKIN TYPE" icon={caret} setToggle={setToggle}>
                    <DropdownMenu list={skinTypes} section="skinTypes" setToggle={setToggle}/>
                </NavItem>
                <NavItem path="/about-us" text="ABOUT US" setToggle={setToggle}/>
                <button className="close-toggle" aria-controls="primary-nav" aria-expanded="false" onClick={() => setToggle(false)}></button>
            </Navbar>
            <button className="mobile-toggle" aria-controls="primary-nav" aria-expanded={toggle} onClick={() => setToggle(true)}></button>
        </header>
    );
}

function Navbar(props) {
    return (
        <nav data-visible={props.toggle}>
            <ul id="primary-nav" className="nav-items">{props.children}</ul>
        </nav>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            {(props.text == "PRODUCTS")
            ?   <div className="nav-item-container">
                <Link to={props.path} state={{section: "productTypes", name: "All Products", from: "all", name: "All Products"}} onClick={() => props.setToggle(false)}>
                    <p className="nav-item-heading">{props.text}</p>
                </Link>
                <img src={caret} alt="Caret down" aria-expanded={open} onClick={() => setOpen(!open)}/>
            </div>
            : props.icon
            ? <div className="nav-item-container">
                <Link to={props.path} onClick={() => props.setToggle(false)}>
                    <p className="nav-item-heading">{props.text}</p>
                </Link>
                <img src={caret} alt="Caret down" aria-expanded={open} onClick={() => setOpen(!open)}/>
            </div>
            : <Link to={props.path} onClick={() => props.setToggle(false)}>
                <p>{props.text}</p>
            </Link>}
            {open && props.children}
        </li>
    )
}

function DropdownMenu(props) {
    function DropdownItem(props, section) {
        let sectionName = props.item.toLowerCase();
        return (
            <li className="dropdown-item">
                <Link to={`/products/${sectionName}`} state={{section: props.section, name: props.item, from: "nav", title: props.item}} onClick={() => props.setToggle(false)}>{props.item}</Link>
            </li>
        )
    }
    return (
        <div className="dropdown-menu">
            <ul>
               {props.list.map((item, _i) => (
                    <DropdownItem key={_i} item={item} section={props.section} setToggle={props.setToggle}/>
                ))} 
            </ul>
            
        </div>
    )
}

export default Header;