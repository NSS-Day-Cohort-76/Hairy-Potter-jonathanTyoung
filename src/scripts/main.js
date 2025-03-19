import { makePottery } from "./src/scripts/PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"


// Make the pieces in the PotteryWheel
const bowl = makePottery ("bowl", 2, 3);
console.log(bowl);
const cup = makePottery ("cup", 4, 5);
console.log(cup);
const house = makePottery ("house", 2, 5);
console.log(house);
const fork= makePottery ("fork", .5, 6);
console.log(fork);
const vase = makePottery ("vase", 10, 12);
console.log(vase);

// Fire each piece of the pottery

const firedBowl = firePottery(bowl, 2199)
console.log(firedBowl)
const firedCup = firePottery(cup, 2300)
console.log(firedCup)
const firedHouse = firePottery(house, 2500)
console.log(firedHouse)
const firedFork = firePottery(fork, 1200)
console.log(firedFork)
const firedVase = firePottery(vase, 3000)
console.log(firedVase)


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


