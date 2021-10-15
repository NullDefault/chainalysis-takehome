const symbol_dict = {
  Ethereum: "ETH",
  Bitcoin: "BTC",
};

export const getAllETH = async (setData) => {
  let kraken = await getKrakenData("Ethereum");
  let coinbase = await getCoinbaseData("Ethereum");

  setData({ Kraken: kraken, Coinbase: coinbase });
};

export const getAllBTC = async (setData) => {
  let kraken = await getKrakenData("Bitcoin");
  let coinbase = await getCoinbaseData("Bitcoin");

  setData({ Kraken: kraken, Coinbase: coinbase });
};

const getKrakenData = async (currency) => {
  const response = await fetch(
    "https://api.kraken.com/0/public/Ticker?pair=" +
      symbol_dict[currency] +
      "USD"
  );

  let resJson = await response.json();
  resJson = resJson.result;

  let dataKey = Object.keys(resJson)[0];

  let buy = resJson[dataKey].a[0];
  let sell = resJson[dataKey].b[0];

  return { buy, sell };
};

const getCoinbaseData = async (currency) => {
  const buyResponse = await fetch(
    "https://api.coinbase.com/v2/prices/" + symbol_dict[currency] + "-USD/buy"
  );
  const sellResponse = await fetch(
    "https://api.coinbase.com/v2/prices/" + symbol_dict[currency] + "-USD/sell"
  );

  let buy = await buyResponse.json();
  let sell = await sellResponse.json();

  buy = buy.data.amount;
  sell = sell.data.amount;

  return { buy, sell };
};
