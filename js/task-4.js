function getShippingCost(country) {
  let price = 0;
  const country2 = country.toLowerCase().trim();
  switch (country2) {
    case 'china':
      price = 100;
      break;
    case 'chile':
      price = 250;
      break;
    case 'australia':
      price = 170;
      break;
    case 'jamaica':
      price = 120;
      break;
    default:
      price = 0;
  }
  return price != 0
    ? `Shipping to ${country} will cost ${price} credits`
    : 'Sorry, there is no delivery to your country';
}

console.log('task-4.js sonuçları');
console.log('-------------------');

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

console.log('\n');
