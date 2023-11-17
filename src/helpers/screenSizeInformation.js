
function screenSize(tv) {
    let sizes = [];
    for (let i = 0; i < tv.availableSizes.length; i++) {
        sizes += (` ${tv.availableSizes[i]} inch (${Math.round((tv.availableSizes[i] * 2.54))} cm) |`);
    }
    return sizes.slice(0, -1);
}

export default screenSize;
