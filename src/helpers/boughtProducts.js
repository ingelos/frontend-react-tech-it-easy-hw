import {inventory} from '../constants/inventory.js';


function boughtProducts () {
    let boughtTvs = 0;
    for (let i = 0; i < inventory.length; i++) {
        boughtTvs += inventory[i].originalStock;
    }
    return boughtTvs;
}


export default boughtProducts;