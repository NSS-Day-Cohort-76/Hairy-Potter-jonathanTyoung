import { makePottery } from './potteryWheel.js';

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