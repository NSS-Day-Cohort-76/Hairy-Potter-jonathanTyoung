let potteryID = 1
export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryID++
    };
        return pottery;


}