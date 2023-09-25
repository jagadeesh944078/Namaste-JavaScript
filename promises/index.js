const cart = ["shirts", "pants", "kurtha"];

const promise = createOrder(cart);
promise
  .then((orderId) => {
    return orderId;
  })
  .then((orderId) => {
    return proceedPayment(orderId);
  })
  .then((res) => console.log(res))
  .catch((err) => console.log("cart is not valid"));

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    setTimeout(() => {
      resolve(orderId);
    }, 4000);
  });
  return pr;
}

function validateCart(cart) {
  return false;
}
function proceedPayment(orderID) {
  return new Promise((resolve, reject) => {
    resolve("payment done successfully");
  });
}
