
function boughtProducts (tv) {
    let boughtTvs = 0;
    for (let i = 0; i < tv.length; i++) {
        boughtTvs += tv[i].originalStock;
    }
    return boughtTvs;
}


export default boughtProducts;