// const country = 'JamAIca';
// const normalizeCountry = country.toLocaleUpperCase();
// let message;
// let price;

// switch (normalizeCountry) {
//   case 'china':
//     price = 100;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;

//   case 'chile':
//     price = 250;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;

//   case 'australia':
//     price = 170;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;

//   case 'JAMAICA':
//     price = 120;
//     message = `Shipping to ${normalizeCountry} will cost ${price} credits`;
//     break;

//   default:
//     message = 'Sorry, there is no delivery to your country';
// }
// console.log(message);

function getExtremeElements(array) {
  const deleteFirstElement = array.shift();
  const deleteLastElevent = array.pop();
  let newArray = [deleteFirstElement, deleteLastElevent];
  console.log(newArray);

  // const firstElement = array[0];
  // console.log(firstElement);
  // const lastElementIndex = array.length - 1;
  // console.log(lastElementIndex);
  // console.log(array[lastElementIndex]);
}
getExtremeElements([1, 'Mango', 'Poli', 'Ajax', 8, 10]);

// const clients = ['Mango', 'Poly', 'Ajax'];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"
