import './App.css';
import soldProducts from "./helpers/soldProducts.js";
import boughtProducts from "./helpers/boughtProducts.js";
import toSellProducts from "./helpers/toSellProducts.js";
import nameInformation from "./helpers/nameInformation.js";
import priceInformation from "./helpers/priceInformation.js";
import screenSizeInformation from "./helpers/screenSizeInformation.js";
import sourceImage from "./helpers/showImage.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import {bestSellingTv} from "./constants/inventory.js";
import {inventory} from "./constants/inventory.js";



function App() {

    function sortMostSoldToLeastSold() {
        inventory.sort((a, b) => {
            return b.sold - a.sold;
        });

    console.log(inventory);
    }

    function sortCheapestFirst() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        });

    console.log(inventory);
    }

    function sortMostSuitedForSport() {
        inventory.sort((a, b) => {
            return b.refreshRate - a.refreshRate;
        });

        console.log(inventory);
    }

    // Bonusopdracht 1: //

    function sortBiggestScreenFirst() {
           inventory.sort((a, b) => {
               return b.availableSizes.slice(-1) - a.availableSizes.slice(-1);
       });
        console.log(inventory);
    }



    return (
        <>
            <main className="main-container">
                <h1>Tech it easy dashboard</h1>

                <h2>Verkoopoverzicht</h2>
                <section className="sale-overview">
                    <article className="overview sold-tvs">
                        <h3>Aantal verkochte producten</h3>
                        <p>{soldProducts(inventory)}</p>
                    </article>
                    <article className="overview bought-tvs">
                        <h3>Aantal ingekochte producten</h3>
                        <p>{boughtProducts(inventory)}</p>
                    </article>
                    <article className="overview to-sell-tvs">
                        <h3>Aantal te verkopen producten</h3>
                        <p>{toSellProducts(inventory)}</p>
                    </article>
                </section>

                <h3>Alle merken</h3>
                <ul className="brand-overview">
                    {inventory.map((tv) => {
                        return <li key={`brands-${tv.name}`}>{tv.brand}</li>
                    })}
                </ul>

                <h2>Best verkochte tv</h2>
                <section className="bestselling outer-container">
                    <article className="bestselling-tv inner-container">
                        <div className="tv-img-container">
                            <img id="tv-img" src={sourceImage(bestSellingTv)} alt={"afbeelding tv"}/>
                        </div>
                        <div className="product-information">
                            <h3 id="name">{nameInformation(bestSellingTv)}</h3>
                            <p id="price">{priceInformation(bestSellingTv)}</p>
                            <p id="screensize">{screenSizeInformation(bestSellingTv)}</p>
                            <ul className="options-list">
                                <li><img src={check} alt="Check icoon" className="icon"/>wifi</li>
                                <li><img src={minus} alt="Minus icoon" className="icon"/>speech</li>
                                <li><img src={check} alt="Check icoon" className="icon"/>hdr</li>
                                <li><img src={check} alt="Check icoon" className="icon"/>bluetooth</li>
                                <li><img src={minus} alt="Check icoon" className="icon"/>ambiLight</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <section className="all-tvs">
                    <h2>Alle Tvs</h2>
                    <div className="button-section">
                        <button type="button" onClick={sortMostSoldToLeastSold}>Meest verkocht eerst</button>
                        <button type="button" onClick={sortCheapestFirst}>Goedkoopste eerst</button>
                        <button type="button" onClick={sortMostSuitedForSport}>Meest geschikt voor sport eerst</button>
                        <button type="button" onClick={sortBiggestScreenFirst}>Grootste scherm eerst</button>
                    </div>
                    {inventory.map((tv) => {
                        return (
                            <article className="all-tvs outer-container" key={tv.type}>
                                <div className="all-tvs inner-container">
                                    <div className="tv-img-container">
                                        <img id="tv-img" src={tv.sourceImg} alt="afbeelding tv"/>
                                    </div>
                                    <div className="product-information">
                                        <h3>{nameInformation(tv)}</h3>
                                        <p id="price">{priceInformation(tv)}</p>
                                        <p>{screenSizeInformation(tv)}</p>
                                        <ul className="options-list">
                                            {tv.options.map((option) => {
                                                if (option.applicable === true) {
                                                    return <li key={`${tv.type}-${option.name}`}><img src={check} alt="check icoon" className="icon"/>{option.name}
                                                    </li>
                                                } else {
                                                    return <li key={`${tv.type}-${option.name}`}><img src={minus} alt="minus icoon" className="icon"/>{option.name}
                                                    </li>
                                                    }
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </article>)
                    })}
                </section>
            </main>
        </>
    )
}

export default App


