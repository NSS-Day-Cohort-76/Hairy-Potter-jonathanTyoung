

const potteryCatalog = []
export const toSellOrNotToSell = (pottery, weight) => {
    if (weight >= 6) {
        pottery.price = 40;
} else (weight < 6) {
        pottery.price = 20;
} 


}



// // export const getFish = () => {
// //     return structuredClone(database.fish);
// // }