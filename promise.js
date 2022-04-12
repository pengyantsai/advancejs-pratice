let example = new Promise((resolve, reject) => {
  //resolve({ name: "peng", age: 20 });
  reject(new Error("Invalid"));
});

example
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
