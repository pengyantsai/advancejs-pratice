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
