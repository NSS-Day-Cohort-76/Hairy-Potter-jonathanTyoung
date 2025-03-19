import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';



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

const firedBowl = firePottery(bowl, 1000)
console.log(firedBowl)