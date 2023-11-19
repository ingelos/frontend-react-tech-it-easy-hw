

function toSellProducts (tv) {
    let toSellTvs = 0;
    for (let i = 0; i < tv.length; i++) {
        toSellTvs += tv[i].originalStock - tv[i].sold;
    }
    return toSellTvs;
}


export default toSellProducts;