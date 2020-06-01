const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have succeed");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

myPromise
  .then((value) => value + '!!!!')
  .then(newValue => console.log(newValue))
  .catch((errorValue) => console.log(errorValue + " in rejection"));
