import {bestSellingTv} from '../constants/inventory.js';

function productInformation() {
    return (bestSellingTv.brand + ' ' + bestSellingTv.type + ' - ' + bestSellingTv.name);
}

export function priceInformation() {
    return ('€' + bestSellingTv.price + ',-');
}

export function screenSize() {
    let sizes = [];
    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
        sizes += (' ' + [bestSellingTv.availableSizes[i]] + ' inch'+ ' (' + Math.round((bestSellingTv.availableSizes[i] * 2.54)) + ' cm)' + ' |');
    }
    return sizes.slice(0, -1);
}


export function sourceImage() {
    return bestSellingTv.sourceImg;
}

export default productInformation;