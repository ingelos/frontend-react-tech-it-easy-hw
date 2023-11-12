import {inventory} from '../constants/inventory.js';


function soldProducts () {
    let soldTvs = 0;
    for (let i = 0; i < inventory.length; i++) {
        soldTvs += inventory[i].sold;
    }
    return soldTvs;
}


export default soldProducts

