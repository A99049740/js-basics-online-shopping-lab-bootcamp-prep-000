var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push(new Object({"itemName":item,"itemPrice":Math.floor(Math.random()*100)}))
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length == 0){
    return "Your shopping cart is empty."
  }
  if (cart.length == 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  var toReturn = "In your cart, you have"
  for (var item of cart){
    if (cart.indexOf(item)==cart.length-1){
      toReturn += ` and ${item.itemName} at $${item.itemPrice}.`
    }
    else{
      toReturn += ` ${item.itemName} at $${item.itemPrice},`
    }
  }
  return toReturn
}

function total() {
  var totalValue =0
  for (var item of cart){
    totalValue += item.itemPrice
  }
  return totalValue
  // write your code here
}

function removeFromCart(item) {
  for (var i =0 ; i<cart.length;i++){
    if (item == cart[i].itemName){
      cart =  [...cart.splice(0,i-1),...cart.splice(i+1,cart.length-1)]
      console.log(cart.splice(0,i-1))
      return cart
    }
  }
  return "That item is not in your cart."
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
addToCart("banana")
addToCart("apple")
addToCart("pear")
removeFromCart("apple")
removeFromCart("fsd")