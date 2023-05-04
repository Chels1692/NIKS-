// import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import ProductCard from "../components/productcard";

const Products = () => {
    // const pageNumbers = (total, max, current) => {
    //     const half = Math.floor(max / 2);
    //     let to = max;
        
    //     if(current + half >= total) {
    //       to = total;
    //     } else if(current > half) {
    //       to = current + half ;
    //     }
        
    //     let from = Math.max(to - max, 0);
      
    //     return Array.from({length: Math.min(total, max)}, (_, i) => (i + 1) + from);
    //   }
      
    //   function PaginationButton(totalPages, maxPagesVisible = 10, currentPage = 1) {
    //     let pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
    //     let currentPageBtn = null;
    //     const buttons = new Map();
    //     const disabled = {
    //       prev: () => currentPage === 1 || currentPage > totalPages,
    //       next: () => currentPage >= totalPages
    //     }
    //     const frag = document.createDocumentFragment();
    //     const resultsContainer = document.querySelector(".main-container");
    //     const header = document.querySelector(".title-container");
    //     const grid = document.querySelector(".results-grid");
    //     const pagination = document.querySelector(".pagination-container");
            
    //     const paginationContainer = document.createElement("div");
    //     paginationContainer.classList.add("pagination-container");
    //     resultsContainer.appendChild(paginationContainer);
    
    //     const pageBtns = document.createElement("div");
    //     pageBtns.classList.add("page-btns");
    //     paginationContainer.appendChild(pageBtns);
    
        
    //     const createAndSetupButton = (label = '', cls = '', background = '', disabled = false, handleClick) => {
    //         const buttonElement = document.createElement('button');
    //         buttonElement.textContent = label;
    //         buttonElement.className = `page-btn ${cls}`;
    //         buttonElement.style.backgroundImage = background;
    //         buttonElement.disabled = disabled;
    //         buttonElement.addEventListener('click', e => {
    //             handleClick(e);
    //             this.update();
    //             pageBtns.value = currentPage;
    //             pageBtns.dispatchEvent(new CustomEvent('change', {detail: {currentPageBtn}}));
    //         });
            
    //         return buttonElement;
    //     }
        
    //     const onPageButtonClick = e => currentPage = Number(e.currentTarget.textContent);
        
    //     const onPageButtonUpdate = index => (btn) => {
    //         btn.textContent = pages[index];
            
    //         if(pages[index] === currentPage) {
    //             currentPageBtn.classList.remove('active-btn');
    //             btn.classList.add('active-btn');
    //             currentPageBtn = btn;
    //             currentPageBtn.focus();
    //         }
    //     };
    
    //     buttons.set(
    //       createAndSetupButton('', 'prev-btn', `url("../left-arrow.png")`, disabled.prev(), () => {currentPage -= 1; offsetNum -= 16;
    //         offset = `&offset=${offsetNum}`;
    //         current--;
    //         resultsContainer.removeChild(header);
    //         resultsContainer.removeChild(grid);
    //         resultsContainer.removeChild(pagination);
    //         fetchMenuRecipes();}),
    //       (btn) => btn.disabled = disabled.prev()
    //     )
        
    //     pages.map((pageNumber, index) => {
    //       const isCurrentPage = currentPage === pageNumber;
    //       const button = createAndSetupButton(
    //         pageNumber, isCurrentPage ? 'num-btn active-btn' : 'num-btn', '', false, onPageButtonClick
    //       );
    //       if(isCurrentPage) {
    //         currentPageBtn = button;
    //       }
    //       buttons.set(button, onPageButtonUpdate(index));
    //     });
        
    //     buttons.set(
    //       createAndSetupButton('', 'next-btn', `url("../right-arrow.png")`, disabled.next(), () => {currentPage += 1; offsetNum += 16;
    //         offset = `&offset=${offsetNum}`;
    //         current++;
    //         resultsContainer.removeChild(header);
    //         resultsContainer.removeChild(grid);
    //         resultsContainer.removeChild(pagination);
    //         fetchMenuRecipes();}),
    //       (btn) => btn.disabled = disabled.next()
    //     )
        
    //     buttons.forEach((_, btn) => frag.appendChild(btn));
    //     pageBtns.appendChild(frag);
        
    //     this.render = () => {
    //       paginationContainer.appendChild(pageBtns);
    //     }
        
    //     this.update = (newPageNumber = currentPage) => {
    //       currentPage = newPageNumber;
    //       pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
    //       buttons.forEach((updateButton, btn) => updateButton(btn));
    //     }
        
    //     this.onChange = (handler) => {
    //       pageBtns.addEventListener('change', handler);
    //     }
    //   }
    
    //   let total = Math.ceil(totalResultNum / 16);  
    //   const paginationButtons = new PaginationButton(total, 7, current);
      
    //   paginationButtons.render();
    
    // Ided();
    // activeBtn();

    const [products, setProducts] = useState("");
    const [brands, setBrands] = useState("");

    const getProducts = async () => {
      try {
          const response = await fetch('http://localhost:8000/niks');
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
        getProducts();
        getBrands();
    }, [])

    return (
        <main>
            <div className="products-page">
                <h1 className="products-title"></h1>
                <div className="main-container">
                    <div id="primary-filter" className="filter-container" data-visible="false">
                        {/* <button className="close-filter" aria-controls="primary-filter" aria-expanded="false"></button> */}
                        <h3>Filters</h3>
                        <div className="filter-items">
                            {data.map((filter, i) => (
                                <div key={i} className="item">
                                    <div className="item-title">
                                        <h4>{filter.title}</h4>
                                    </div>
                                    <div className="item-content">
                                        <ul>
                                            {filter.content.map((option, index) => (
                                                <li key={index}><input type="checkbox" name={filter.title} value={option.text} id={option.text}/><label htmlFor={option.text}>{option.text}</label></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            <div className="item">
                                <div className="item-title">
                                    <h4>BRANDS</h4>
                                </div>
                                <div className="item-content">
                                    <ul>
                                        {brands && brands?.map((brand) => (
                                            <li key={brand.brand_id}><input type="checkbox" name="Brands" value={brand.brand_name} id={brand.brand_name}/><label htmlFor={brand.brand_name}>{brand.brand_name}</label></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <button className="done-filter" aria-controls="primary-filter" aria-expanded="false">Done</button> */}
                    </div>
                    <div className="products-container">
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
        content: [
            {
                text: "Cleanser"
            },
            {
                text: "Moisturizer"
            },
            {
                text: "Treatments & Serums"
            },
            {
                text: "Exfoliators"
            },
            {
                text: "Toners"
            },
            {
                text: "SPF"
            }
        ]
    },
    {
        title: "SKIN CONCERNS",
        content: [
            {
                text: "Acne"
            },
            {
                text: "Aging"
            },
            {
                text: "Texture"
            },
            {
                text: "Pigmentation"
            },
            {
                text: "Medical"
            }
        ]
    },
    {
        title: "SKIN TYPES",
        content: [
            {
                text: "Oily"
            },
            {
                text: "Dry"
            },
            {
                text: "Combination"
            },
            {
                text: "Normal"
            }
        ]
    }
]

export default Products;