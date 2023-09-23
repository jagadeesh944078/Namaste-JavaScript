const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise has been resolved");
  }, 20000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise has been resolved");
  }, 40000);
});

// async function handlePromise() {
//   console.log("Hello World");

//   const value1 = await promise1;
//   console.log("namasthe javascript");
//   console.log(value1);

//   const value2 = await promise2;
//   console.log("namasthe javascript2");
//   console.log(value2);
// }

// handlePromise();

const API_URL = "https://api.github.com/users/jagadeesh944078";

async function handlePromise() {
  //fetch => response object(readablestream) => data.json()
  /* you can write like this you can apply catch method directly to that method */
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err, "err");
  }
  // fetch(API_URL)
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
}

/* if url is invalid it will go to catch bloack and throw an error */
// handlePromise().catch((err) => console.log(err));

// async function getData() {
//   promise1.then((res) => console.log(res));
//   console.log("Namasthe Javascript");
// }
// getData();

function resolveAfter2seconds() {
  console.log("slow process started");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow process done");
    }, 2000);
  });
}

function resolveAfter1second() {
  console.log("fast process started");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast process is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("sequentialStart process started");
  const slow = resolveAfter2seconds();
  console.log(await slow);
  const fast = resolveAfter1second();
  console.log(await fast);
}

async function sequentialWait() {
  console.log("sequentialWait process started");
  const slow = await resolveAfter2seconds();
  const fast = await resolveAfter1second();
  console.log(fast);
  console.log(slow);
}

async function concurrent1() {
  console.log("concurrent 1 starts");
  const results = await Promise.all([
    resolveAfter2seconds(),
    resolveAfter1second(),
  ]);
  console.log(results[0]);
  //console.log(results[1]);
  console.log("concurrent 1 done");
}

async function concurrent2() {
  console.log("concurrent 2 starts");
  const promise = await Promise.all([
    (async () => console.log(await resolveAfter2seconds()))(),
    (async () => console.log(await resolveAfter1second()))(),
  ]);
  console.log("concurrent 2 done");
}
concurrent1();
//concurrent1();

// sequentialStart();
// sequentialWait();
// setTimeout(sequentialWait, 4000);
