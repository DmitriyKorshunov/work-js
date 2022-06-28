function calculateEngravingPrice(message, pricePerWord) {
  const arrMessage = message.split(' ');
  console.log(arrMessage);
  const lenghtArrMes = arrMessage.length;
  console.log(lenghtArrMes);
  let ollPricePerWord = lenghtArrMes * pricePerWord;
  console.log(ollPricePerWord);
  return ollPricePerWord;
}

calculateEngravingPrice('JavaScript is in my blood', 10);
console.log(calculateEngravingPrice);
