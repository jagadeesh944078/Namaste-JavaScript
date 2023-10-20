/* Promise.all */
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1 fail");
  }, 4000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 fail");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 fail");
  }, 5000);
});

Promise.any([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err.errors));
