import { useState } from "react";
import {Link} from "react-router-dom";
import caret from "../img/caretdown.png";

const Header = () => {
    const products = ["Cleansers", "Treatments, Toners & Serums", "Exfoliators", "Moisturizers", "SPF"];
    const skinConcerns = ["Acne", "Aging", "Texture", "Pigmentation", "Medical"];
    const skinTypes = ["Oily", "Dry", "Combination", "Normal"];

    return (
        <header>
            <h1 className="logo">
                <Link to="/">NIKS</Link>
            </h1>
            <Navbar>
                <NavItem path="/products" text="PRODUCTS" icon={caret}>
                    <DropdownMenu list={products} />
                </NavItem>
                <NavItem path="/skin-concerns" text="SKIN CONCERNS" icon={caret}>
                    <DropdownMenu list={skinConcerns} />
                </NavItem>
                <NavItem path="/skin-types" text="SKIN TYPE" icon={caret}>
                    <DropdownMenu list={skinTypes} />
                </NavItem>
                <NavItem path="/about-us" text="ABOUT US" />
            </Navbar>
        </header>
    );
}

function Navbar(props) {
    return (
        <nav>
            <ul id="primary-nav" className="nav-items">{props.children}</ul>
        </nav>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            {props.icon
            ? <Link to={props.path}>
                <div className="nav-item-container">
                    <p className="nav-item-heading">{props.text}</p>
                    <img src={caret} alt="Caret down"/>
                </div>
            </Link>
            : <Link to={props.path}>
                <p>{props.text}</p>
            </Link>}
            {open && props.children}
        </li>
    )
}

function DropdownMenu(props) {
    function DropdownItem(props) {
        return (
            <li className="dropdown-item">
                <Link to="/products">{props.item}</Link>
            </li>
        )
    }
    return (
        <div className="dropdown-menu">
            <ul>
               {props.list.map((item, _i) => (
                    <DropdownItem key={_i} item={item}/>
                ))} 
            </ul>
            
        </div>
    )
}

export default Header;