import './App.css';
import soldProducts from "./helpers/soldProducts.js";
import boughtProducts from "./helpers/boughtProducts.js";
import toSellProducts from "./helpers/toSellProducts.js";
import productInformation, {priceInformation, screenSize, sourceImage} from "./helpers/productInformation.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {
    function mostSoldFirst() {
        console.log('Meest verkocht eerst')
    }

    function cheapestFirst() {
        console.log('Goedkoopste eerst')
    }

    function mostSuitedForSport() {
        console.log('Meest geschikt voor sport')
    }

    return (
        <>
            <main className={"main-container"}>
                <h1>Tech it easy dashboard</h1>
                <h2>Verkoopoverzicht</h2>
                <section className={"verkoopoverzicht"}>
                    <div className={"overzicht verkochte-tvs"}>
                        <h3>Aantal verkochte producten</h3>
                        <p>{soldProducts()}</p>
                    </div>
                    <div className={"overzicht ingekochte-tvs"}>
                        <h3>Aantal ingekochte producten</h3>
                        <p>{boughtProducts()}</p>
                    </div>
                    <div className={"overzicht te-verkopen-tvs"}>
                        <h3>Aantal te verkopen producten</h3>
                        <p>{toSellProducts()}</p>
                    </div>
                </section>
                <h2>Best verkochte tv</h2>
                <section className={"bestselling-tv-outer-container"}>
                    <div className={"bestselling-tv-inner-container"}>
                        <div className={"bestselling-tv-img-container"}>
                            <img id={"bestselling-tv-img"} src={sourceImage()} alt={"tv"}/>
                        </div>
                        <div className={"product-information"}>
                            <p id={"name"}>{productInformation()}</p>
                            <p id={"price"}>{priceInformation()}</p>
                            <p>{screenSize()}</p>
                            <span className={"logo"}><img src={check}/>wifi</span>
                            <span className={"logo"}><img src={minus}/>speech</span>
                            <span className={"logo"}><img src={check}/>hdr</span>
                            <span className={"logo"}><img src={check}/>bluetooth</span>
                            <span className={"logo"}><img src={minus}/>ambiLight</span>
                        </div>
                    </div>
                </section>
                <section className={"all-tvs"}>
                    <h2>Alle Tvs</h2>
                    <div className={"button-section"}>
                        <button type={"button"} onClick={mostSoldFirst}>Meest verkocht eerst</button>
                        <button type={"button"} onClick={cheapestFirst}>Goedkoopste eerst</button>
                        <button type={"button"} onClick={mostSuitedForSport}>Meest geschikt voor sport eerst</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App


