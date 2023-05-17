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
                            <p className="descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Vitae nunc sed velit dignissim. Felis eget velit aliquet sagittis. Enim nunc faucibus a pellentesque. At risus viverra adipiscing at in tellus integer. Volutpat commodo sed egestas egestas fringilla. Donec massa sapien faucibus et molestie. Odio facilisis mauris sit amet massa. Diam vel quam elementum pulvinar etiam non quam lacus. Tempor orci eu lobortis elementum nibh.</p>
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
                            <p className="descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Vitae nunc sed velit dignissim. Felis eget velit aliquet sagittis. Enim nunc faucibus a pellentesque. At risus viverra adipiscing at in tellus integer. Volutpat commodo sed egestas egestas fringilla. Donec massa sapien faucibus et molestie. Odio facilisis mauris sit amet massa. Diam vel quam elementum pulvinar etiam non quam lacus. Tempor orci eu lobortis elementum nibh.</p>
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
                            <p className="descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Vitae nunc sed velit dignissim. Felis eget velit aliquet sagittis. Enim nunc faucibus a pellentesque. At risus viverra adipiscing at in tellus integer. Volutpat commodo sed egestas egestas fringilla. Donec massa sapien faucibus et molestie. Odio facilisis mauris sit amet massa. Diam vel quam elementum pulvinar etiam non quam lacus. Tempor orci eu lobortis elementum nibh.</p>
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
                            <p className="descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Vitae nunc sed velit dignissim. Felis eget velit aliquet sagittis. Enim nunc faucibus a pellentesque. At risus viverra adipiscing at in tellus integer. Volutpat commodo sed egestas egestas fringilla. Donec massa sapien faucibus et molestie. Odio facilisis mauris sit amet massa. Diam vel quam elementum pulvinar etiam non quam lacus. Tempor orci eu lobortis elementum nibh.</p>
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