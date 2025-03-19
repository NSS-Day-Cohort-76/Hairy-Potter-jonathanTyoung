

const potteryCatalog = []
export const toSellOrNotToSell = (pottery) => {
if (!pottery.cracked) {
        if (pottery.weight >= 6) {
        pottery.price = 40;
        } else {
        pottery.price = 20;
        } 
        potteryCatalog.push(pottery);

}

return pottery;

};


export const usePottery = () => {
return structuredClone(potteryCatalog);
}