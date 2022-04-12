//USE PROMISE
function getData(name) {
  if (name == "peng") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "peng peng", age: Math.floor(Math.random() * 20) });
      }, 2000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Invalid"));
      }, 2000);
    });
  }
}

function getMovies(age) {
  if (age < 12) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ text: "cartoon" });
      }, 1500);
    });
  } else if (age < 18) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ text: "teenmovie" });
      }, 1500);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("not allowed"));
      }, 1500);
    });
  }
}

getData("peng")
  .then((obj) => {
    console.log(obj);
    return getMovies(obj.age);
  })
  .then((meg) => {
    console.log(meg.text);
  })
  .catch((err) => {
    console.log(err);
  });
/*
function getData(name, callback) {
  setTimeout(() => {
    callback({ name: name, age: Math.floor(Math.random() * 20), major: "cs" });
  }, 2000);
}
function getMovies(age, callback) {
  if (age < 12) {
    setTimeout(() => {
      callback("cartoon");
    }, 1500);
  } else if (age < 18) {
    setTimeout(() => {
      callback("teen movie");
    }, 1500);
  } else {
    setTimeout(() => {
      callback("adult movie");
    }, 1500);
  }
}

getData("peng", (obj) => {
  console.log(obj);
  getMovies(obj.age, (str) => {
    console.log(str);
  });
});
*/
