const cart = [
  { item: "Laptop", price: 50000, quantity: 1, inStock: true },
  { item: "Mouse", price: 1500, quantity: 2, inStock: true },
  { item: "Keyboard", price: 3000, quantity: 1, inStock: false }
];

// TASK:
// 1. Check if "every" item is inStock. Print "Ready to Ship" or "Wait".
const data = cart.map((details) => {
  const checkInStock = details.inStock;
  if (checkInStock) {
    console.log("Ready to Ship");

  } else {
    console.log("Wait");

  }
})
// 2. Filter out the items that are NOT in stock.
const check = cart.filter(details => details.inStock === false)
console.log(check);

//3. Use .reduce() on the filtered list to find the final 'Total Bill'.

const totalBill = cart.filter(detials => detials.inStock === true)
  .reduce((bill, item) => {
    return bill + item.price * item.quantity
  }, 0)

console.log(totalBill);