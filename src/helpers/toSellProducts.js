import {inventory} from '../constants/inventory.js';


function toSellProducts () {
    let toSellTvs = 0;
    for (let i = 0; i < inventory.length; i++) {
        toSellTvs += inventory[i].originalStock - inventory[i].sold;
    }
    return toSellTvs;
}


export default toSellProducts;