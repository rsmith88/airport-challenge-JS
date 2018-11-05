function Weather() {
  this._stormy = false
};

Weather.prototype.stormy = function() {
  weather = Math.floor(Math.random() * 11);
  console.log(weather)
  if (weather === 10) {
    this._stormy = true;
  } else {
    this._stormy = false;
  };
  return this._stormy;
};

// Weather.prototype.stormy = function() {
//   return this._stormy;
// };
