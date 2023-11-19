
function soldProducts(tv) {
    let soldTvs = 0;
    for (let i = 0; i < tv.length; i++) {
        soldTvs += tv[i].sold;
    }
    return soldTvs;
}


export default soldProducts;

