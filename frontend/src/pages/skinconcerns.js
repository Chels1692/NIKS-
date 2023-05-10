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
                            <p>Acne is a skin condition where an individual’s hair follicles under the skin become clogged with oil and dead skin cells. Sebum and dead skin cells clogging the pores leads to the formation of whiteheads, blackheads , and/or pimples. Acne can occur on the face, back, chest and shoulders. 
                                
                                The development of acne could be caused by excessive production of oil in the pores, the buildup of dead skin cells in the pores, and the growth of bacteria in the pores. 
                                
                                Some factors that may also increase an individual’s chance of developing acne are hormones, medications, age, and family health history.
                                
                                 The best products to stop the development of acne are topical medications such as benzoyl peroxide, resorcinol, retinoids, salicylic acid, and sulfur.</p>
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
                            <p>Skin aging is a natural biological process. As people age their organs, tissues, and cells start to change, but the aging of internal organs is not as obvious as the skin. The process of skin aging is influenced by many factors that include genetics, metabolism, hormones, long-term light exposure, pollution, radiation, chemicals, and toxins. These factors lead to structural and physiological changes in each skin layer as well as skin appearance. The minimization of certain lifestyle habits (smoking, pollution, stress, physical activity, maintaining general health) could contribute to reversing the dermal and epidermal signs of aging. There are two main agents used in anti-aging creams, antioxidants (vitamins, polyphenols, and flavonoids) and cell regulators (retinol, peptides, and growth factors). Antioxidants reduce collagen degradation and cell regulators have direct effects on collagen metabolism.</p>
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
                            <p>Normal skin contains cells called melanocytes that produce a substance called melanin. Melanin gives skin its color. Skin with too much melanin causes hyperpigmentation and skin with too little melanin causes hypopigmentation. Hyperpigmentation is caused by skin inflammation, the use of certain drugs, hormone diseases, sun exposure, pregnancy, and certain birthmarks. Hypopigmentation is caused by skin inflammation, some fungal infections, certain medications, certain birthmarks, vitiligo, and pityriasis alba. Try to avoid too much sun exposure and always use sunscreen with SPF of 30 or higher.</p>
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
                            <p>Uneven skin texture can be caused by many factors. One cause is a build-up of dead skin cells, which makes the skin feel rough and dull. Another cause is sun damage, which hinders the skin’s cells' ability to support smooth skin. Natural aging can also lead to an uneven skin texture due to a loss of collagen and moisture over time. Dryness and medical conditions like eczema, caused by excess dead skin cells can also make the skin feel rough. Skin texture often goes hand in hand with other skin conditions such as acne and hyperpigmentation, as well as hormone imbalances. The best products for people with skin texture include gentle exfoliants such as AHAs, Retinol, Vitamin C, and anti-inflammatory topicals.</p>
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