const country = 'JamAIca';
const normalizeCountry = country.toLocaleUpperCase();
let message;
let price;

switch (normalizeCountry) {
  case 'china':
    price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

  case 'chile':
    price = 250;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

  case 'australia':
    price = 170;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

  case 'JAMAICA':
    price = 120;
    message = `Shipping to ${normalizeCountry} will cost ${price} credits`;
    break;

  default:
    message = 'Sorry, there is no delivery to your country';
}
console.log(message);
