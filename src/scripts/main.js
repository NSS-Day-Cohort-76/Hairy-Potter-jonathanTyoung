import { firePottery } from "./Kiln.js"
import { usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js";
import { makePottery } from "./PotteryWheel.js";


// make the pottery 
const bowl = makePottery ("BOWL", 2, 3);
console.log(bowl);
const mug = makePottery ("MUG", 4, 5);
console.log(mug);
const house = makePottery ("HOUSE", 2, 5);
console.log(house);
const fork= makePottery ("FORK", .5, 6);
console.log(fork);
const vase = makePottery ("VASE", 10, 12);
console.log(vase);

// fire the pottery 
const firedBowl = firePottery(bowl, 2199)
console.log(firedBowl)
const firedMug = firePottery(mug, 1000)
console.log(firedMug)
const firedHouse = firePottery(house, 2500)
console.log(firedHouse)
const firedFork = firePottery(fork, 3000)
console.log(firedFork)
const firedVase = firePottery(vase, 1000)
console.log(firedVase)

//price the pottery
const priceBowl = usePottery(bowl)
console.log(priceBowl)
const priceMug = usePottery(mug)
console.log(priceMug)
const priceHouse = usePottery(house)
console.log(priceHouse)
const priceFork = usePottery(fork)
console.log(priceFork)
const priceVase = usePottery(vase)
console.log(priceVase)



// invoke and renderHTML
const potteryHTML = PotteryList();
document.getElementById("PotteryList").innerHTML += `${potteryHTML}`