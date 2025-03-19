import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js";
import { makePottery } from "./PotteryWheel.js";


// make the pottery 
const bowl = makePottery ("BOWL", 2, 3);
console.log(bowl);
const cup = makePottery ("MUG", 4, 5);
console.log(cup);
const house = makePottery ("HOUSE", 2, 5);
console.log(house);
const fork= makePottery ("FORK", .5, 6);
console.log(fork);
const vase = makePottery ("VASE", 10, 12);
console.log(vase);

// fire the pottery 
const firedBowl = firePottery(bowl, 2199)
console.log(firedBowl)
const firedCup = firePottery(cup, 1000)
console.log(firedCup)
const firedHouse = firePottery(house, 2500)
console.log(firedHouse)
const firedFork = firePottery(fork, 3000)
console.log(firedFork)
const firedVase = firePottery(vase, 1000)
console.log(firedVase)

//price the pottery
const priceBowl = toSellOrNotToSell(bowl)
console.log(priceBowl)
const priceCup = toSellOrNotToSell(cup)
console.log(priceCup)
const priceHouse = toSellOrNotToSell(house)
console.log(priceHouse)
const priceFork = toSellOrNotToSell(fork)
console.log(priceFork)
const priceVase = toSellOrNotToSell(vase)
console.log(priceVase)



// invoke and renderHTML
const potteryHTML = PotteryList();
document.getElementById("PotteryList").innerHTML += `${potteryHTML}`