// ANY
let fruitShop: any;
fruitShop.getFruit();
console.log(fruitShop.toUpperCase());

const getGameStats = <T>(args: T): T => {
  return args;
};

getGameStats<number>(45);
//getGameStats<number>(45).toUpperCase()
