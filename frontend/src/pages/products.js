import {useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import ProductCard from "../components/productcard";

const Products = () => {
    const location = useLocation();
    const sectionTitle = location.state?.title;
    const sectionType = location.state?.section;
    const sectionName = location.state?.name;
    const resultsSkinType = location.state?.resultsSkinType
    const resultsSkinConcern = location.state?.resultsSkinConcern
    const from = location.state?.from
    
    let [checked, setChecked] = useState([]);
    const [filterByProductType, setFilterByProductType] = useState([]);
    const [filterBySkinConcern, setFilterBySkinConcern] = useState([]);
    const [filterBySkinType, setFilterBySkinType] = useState([]);
    const [filterByPreference, setFilterByPreference] = useState([]);
    const [filterByBrand, setFilterByBrand] = useState([]);
    const [filtersList, setFiltersList] = useState({
        productTypes: [],
        skinConcerns: [],
        skinTypes: [],
        preferences: [],
        brands: []
    })


    const handleToggle = (value, section) => {
        let list = [...checked];
        if(checked.includes(value) === false) {
            list.push(value);
        } else {
            list.splice(checked.indexOf(value), 1)
        }
        setChecked(list);
        if(section == "productTypes") {
            list = [...filterByProductType];
            if(filterByProductType.includes(value) === false) {
                list.push(value)
            } else {
                list.splice(filterByProductType.indexOf(value), 1)
            }
            setFilterByProductType(list);
            handleFilters(list, section)
        } else if(section == "skinConcerns") {
            list = [...filterBySkinConcern];
            if(filterBySkinConcern.includes(value) === false) {
                list.push(value);
            } else {
                list.splice(filterBySkinConcern.indexOf(value), 1)
            }
            setFilterBySkinConcern(list)
            handleFilters(list, section)
        } else if(section == "skinTypes") {
            list = [...filterBySkinType];
            if(filterBySkinType.includes(value) === false) {
                list.push(value);
            } else {
                list.splice(filterBySkinType.indexOf(value), 1)
            }
            setFilterBySkinType(list)
            handleFilters(list, section)
        } else if(section == "preferences") {
            list = [...filterByPreference];
            if(filterByPreference.includes(value) === false) {
                list.push(value);
            } else {
                list.splice(filterByPreference.indexOf(value), 1)
            }
            setFilterByPreference(list)
            handleFilters(list, section)
        } else if(section == "brands") {
            list = [...filterByBrand];
            if(filterByBrand.includes(value) === false) {
                list.push(value);
            } else {
                list.splice(filterByBrand.indexOf(value), 1)
            }
            setFilterByBrand(list)
            handleFilters(list, section)
        }
    };

    const handleClick = (value, section) => {
        let list = [];
        if(checked.includes(value) === false) {
            list.push(value);
        }
        setChecked(list);
        if(section == "productTypes") {
            list = []
            if(filterByProductType.includes(value) === false) {
                list.push(value);
            }  else {
                list.splice(checked.indexOf(value), 1)
            }
            setFilterByProductType(list)
            handleClickFilters(list, section)
        } else if(section == "skinConcerns") {
            list = []
            if(filterBySkinConcern.includes(value) === false) {
                list.push(value);
            }
            setFilterBySkinConcern(list)
            handleClickFilters(list, section)
        } else if(section == "skinTypes") {
            list = []
            if(filterBySkinType.includes(value) === false) {
                list.push(value);
            }
            setFilterBySkinType(list)
            handleClickFilters(list, section)
        } else if(section == "preferences") {
            list = []
            if(filterByPreference.includes(value) === false) {
                list.push(value);
            }
            setFilterByPreference(list)
            handleClickFilters(list, section)
        } else if(section == "brands") {
            list = []
            if(filterByBrand.includes(value) === false) {
                list.push(value);
            }
            setFilterByBrand(list)
            handleClickFilters(list, section)
        }
    };

    const handleResults = (value, section) => {
        let list = [...checked];
        if(checked.includes(value) === false) {
            list.push(value);
        } else {
            list.splice(checked.indexOf(value), 1)
        }
        setChecked(list);
        if(section == "productTypes") {
            list = [...filterByProductType];
            if(filterByProductType.includes(value) === false) {
                list.push(value);
            } else {
                list.splice(filterByProductType.indexOf(value), 1)
            }
            setFilterByProductType(list);
            handleClickFilters(list, section)
        } else if(section == "skinConcerns") {
            list = [...filterBySkinConcern];
            if(filterBySkinConcern.includes(value) === false) {
                list.push(value);
            } else {
                list.splice(filterBySkinConcern.indexOf(value), 1)
            }
            setFilterBySkinConcern(list)
            handleClickFilters(list, section)
        } else if(section == "skinTypes") {
            list = [...filterBySkinType];
            if(filterBySkinType.includes(value) === false) {
                list.push(value);
            } else {
                list.splice(filterBySkinType.indexOf(value), 1)
            }
            setFilterBySkinType(list)
            handleClickFilters(list, section)
        } else if(section == "preferences") {
            list = [...filterByPreference];
            if(filterByPreference.includes(value) === false) {
                list.push(value);
            } else {
                list.splice(filterByPreference.indexOf(value), 1)
            }
            setFilterByPreference(list)
            handleClickFilters(list, section)
        } else if(section == "brands") {
            list = [...filterByBrand];
            if(filterByBrand.includes(value) === false) {
                list.push(value);
            } else {
                list.splice(filterByBrand.indexOf(value), 1)
            }
            setFilterByBrand(list)
            handleClickFilters(list, section)
        }
    };


    const handleFilters = (filters, category) => {
        const newFilters = { ...filtersList };

        newFilters[category] = filters;
        
        getFilter(newFilters)
        setFiltersList(newFilters)
    }
    const handleClickFilters = (filters, category) => {
        const newFilters = { ...filtersList };

        newFilters[category] = filters;
        
        setFiltersList(newFilters)
    }


    const [products, setProducts] = useState("");
    const [brands, setBrands] = useState("");

    let product, concerns, types, preferences, brand;

    const getProducts = async () => {
        try {
            const response = await fetch(`http://localhost:8000/niks/products/${sectionName}`);
            const json = await response.json();
            setProducts(json);
        } catch(err) {
            console.log(err);
        }
    }
    const getFilter = async (filters) => {
        product = filters.productTypes.toString();
        concerns = filters.skinConcerns.toString();
        types = filters.skinTypes.toString();
        preferences = filters.preferences.toString();
        brand = filters.brands.toString();
        try {
            const response = await fetch(`http://localhost:8000/niks?products=${product}&types=${types}&concerns=${concerns}&preferences=${preferences}&brands=${brand}`);
            const json = await response.json();
            setProducts(json);
        } catch(err) {
            console.log(err);
        }
    }
    const getResults = async (product, concern, type) => {
        try {
            const response = await fetch(`http://localhost:8000/niks/results/${concern}/${type}/${product}`);
            const json = await response.json();
            setProducts(json);
        } catch(err) {
            console.log(err);
        }
    }
    const getTypes = async () => {
        try {
            let type = sectionName.toLowerCase();
            const response = await fetch(`http://localhost:8000/niks/products/type/${type}`);
            const json = await response.json();
            setProducts(json);
        } catch(err) {
            console.log(err);
        }
    }
    const getConcerns = async () => {
        try {
            let concern = sectionName.toLowerCase();
            const response = await fetch(`http://localhost:8000/niks/products/concerns/${concern}`);
            const json = await response.json();
            setProducts(json);
        } catch(err) {
            console.log(err);
        }
    }
    const getBrands = async () => {
        try {
            const response = await fetch('http://localhost:8000/niks/brands');
            const json = await response.json();
            setBrands(json);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getBrands();
    }, [])
    useEffect(() => {
        if(from === "nav" || from === "info" || from === "footer" || from === "all") {
            if(sectionType == "productTypes") {
                getProducts();
                if(from === "all") {
                    handleClick("", sectionType);
                }
            } else if(sectionType == "skinConcerns") {
                getConcerns();
            } else if(sectionType == "skinTypes") {
                getTypes();
            }
        }
    }, [sectionName, sectionType])
    useEffect(() => {
        if(from === "quiz") {
            let filterName = "";
            let filterConcernName = "";
            if(sectionName == "Cleansers" || sectionName == "c") {
                filterName = 'c';
            } else if(sectionName == "Moisturizers" || sectionName == "m") {
                filterName = 'm';
            } else if(sectionName == "Exfoliators" || sectionName == "e") {
                filterName = 'e';
            } else if(sectionName == "Treatments, Toners & Serums" || sectionName == "t") {
                filterName = 't';
            } else if(sectionName == "SPF" || sectionName == "s") {
                filterName = 's';
            } else {
                filterName = "";
            }
            
            if(resultsSkinConcern == "texture") {
                filterConcernName = 'skin texture';
            } else if(resultsSkinConcern == "pigmentation") {
                filterConcernName = 'skin tone';
            } else if(resultsSkinConcern == "medical") {
                filterConcernName = 'skin conditions';
            } else if(resultsSkinConcern == "acne") {
                filterConcernName = 'acne';
            } else if(resultsSkinConcern == "aging") {
                filterConcernName = 'aging';
            } else {
                filterConcernName = resultsSkinConcern;
            }

            getResults(filterName, filterConcernName, resultsSkinType)
            handleResults(filterName, "productTypes")
            handleResults(resultsSkinType, "skinTypes")
            handleResults(filterConcernName, "skinConcerns")
            setChecked([...checked, filterName, filterConcernName, resultsSkinType]);
        }
    }, [])
    useEffect(() => {
        if(from === "nav" || from === "info" || from === "footer") {
            let filterName = "";
            if(sectionType == "productTypes") {
                if(sectionName == "Cleansers" || sectionName == "c") {
                    filterName = 'c';
                } else if(sectionName == "Moisturizers" || sectionName == "m") {
                    filterName = 'm';
                } else if(sectionName == "Exfoliators" || sectionName == "e") {
                    filterName = 'e';
                } else if(sectionName == "Treatments, Toners & Serums" || sectionName == "t") {
                    filterName = 't';
                } else if(sectionName == "SPF" || sectionName == "s") {
                    filterName = 's';
                } else {
                    filterName = "";
                }
            } else if(sectionType == "skinConcerns") {
                if(sectionName == "Acne") {
                    filterName = 'acne';
                } else if(sectionName == "Aging") {
                    filterName = 'aging';
                } else if(sectionName == "Texture") {
                    filterName = 'skin texture';
                } else if(sectionName == "Pigmentation") {
                    filterName = 'skin tone';
                } else if(sectionName == "Medical") {
                    filterName = 'skin conditions';
                } else {
                    filterName = sectionName;
                }
            } else if(sectionType == "skinTypes") {
                filterName = sectionName.toLowerCase();
            }

            handleClick(filterName, sectionType)
        }
    }, [sectionName]);

    const[popup,setPop]=useState(false);
    const [open, setOpen] = useState(null);
    const toggle=i=>{
        if(open===i){
            return setOpen(null);
        }
        setOpen(i);
    };
    return (
        <main>
            <div className="products-page">
                <h1 className="products-title">{sectionTitle}</h1>
                <div className="main-container">
                    <div id="primary-filter" className="filter-container" data-visible="false">
                        <h3>Filters</h3>
                        <button className="filter-button" onClick={() => setPop(true)}>Show Filters</button>
                        <div className="filter-items" data-visible={popup}>
                        <button className="filter-button close-button" onClick={() => setPop(false)}>Done</button>
                            {data.map((filter, i) => (
                                <div key={i} className="item" aria-expanded={open}>
                                    <div className="item-title" onClick={() =>toggle(i)}>
                                        <h4>{filter.title}</h4>
                                        <span className="show-more">{open===i?'-':'+'}</span>
                                    </div>
                                    {open===i? <div className='item-content'>
                                        <ul>
                                            {filter.content.map((option, index) => (
                                                <li key={index}><input type="checkbox" onChange={() => handleToggle(option.code, filter.class)} className={filter.class} name={filter.class} value={option.text} id={option.text} checked={checked.indexOf(option.code) !== -1 ? true : false}/><label htmlFor={option.text}>{option.text}</label></li>
                                            ))}
                                        </ul>
                                    </div> : ""}
                                </div>
                            ))}
                            <div className="item" aria-expanded={open}>
                                <div className="item-title"  onClick={() => toggle(5)}>
                                    <h4>BRANDS</h4>
                                    <span>{open===5? '-':'+'}</span>
                                </div>
                                {open===5? <div className='item-content'>
                                    <ul>
                                        {brands && brands?.map((brand, i) => (
                                            <li key={i}><input type="checkbox" onChange={() => handleToggle(brand.brand_name, "brands")} className="brands" name="BRANDS" value={brand.brand_name} id={brand.brand_name} checked={checked.indexOf(brand.brand_name) !== -1 ? true : false}/><label htmlFor={brand.brand_name}>{brand.brand_name}</label></li>
                                        ))}
                                    </ul>
                                </div> : ""}
                            </div>
                        </div>
                    </div>
                    <div className="products-container">
                        <p className="results-text">{products.length} Results</p>
                        <div className="results-cards">
                            {products && products?.map((product, i) => (
                                <ProductCard 
                                key={i}
                                product={product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};


const data = [
    {
        title: "PRODUCT TYPES",
        class: "productTypes",
        content: [
            {
                text: "Cleansers",
                code: "c"
            },
            {
                text: "Moisturizers",
                code: "m"
            },
            {
                text: "Treatments, Toners & Serums",
                code: "t"
            },
            {
                text: "Exfoliators",
                code: "e"
            },
            {
                text: "SPF",
                code: "s"
            }
        ]
    },
    {
        title: "SKIN CONCERNS",
        class: "skinConcerns",
        content: [
            {
                text: "Acne",
                code: "acne"
            },
            {
                text: "Aging",
                code: "aging"
            },
            {
                text: "Texture",
                code: "skin texture"
            },
            {
                text: "Pigmentation",
                code: "skin tone"
            },
            {
                text: "Medical",
                code: "skin conditions"
            }
        ]
    },
    {
        title: "SKIN TYPES",
        class: "skinTypes",
        content: [
            {
                text: "Oily",
                code: "oily"
            },
            {
                text: "Dry",
                code: "dry"
            },
            {
                text: "Combination",
                code: "combination"
            },
            {
                text: "Normal",
                code: "normal"
            }
        ]
    },
    {
        title: "INGREDIENT PREFERENCES",
        class: "preferences",
        content: [
            {
                text: "Vegan",
                code: "vegan"
            },
            {
                text: "Cruelty-Free",
                code: "cruelty-free"
            },
            {
                text: "Fragrance Free",
                code: "fragrance-free"
            }
        ]
    }
]

export default Products;