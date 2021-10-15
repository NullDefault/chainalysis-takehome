export function calcBest(data) {
  let lowestBuy = Number.POSITIVE_INFINITY;
  let highestSell = Number.NEGATIVE_INFINITY;
  let exchangeToBuy = null;
  let exchangeToSell = null;

  let keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    let name = keys[i];
    let buy = data[name].buy;
    let sell = data[name].sell;

    if (buy < lowestBuy) {
      lowestBuy = buy;
      exchangeToBuy = name;
    }
    if (sell > highestSell) {
      highestSell = sell;
      exchangeToSell = name;
    }
  }

  return {
    buy: { exchange: exchangeToBuy, value: lowestBuy },
    sell: { exchange: exchangeToSell, value: highestSell },
  };
}
