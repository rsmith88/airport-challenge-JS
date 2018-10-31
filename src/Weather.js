function Weather() {
  this._stormy = false
};

Weather.prototype.forecast = function() {
  weather = Math.floor(Math.random() * 11);
  if (weather === 10) {
    this._stormy = true;
  } else {
    this._stormy = false;
  }
}

Weather.prototype.stormy = function() {
  return this._stormy
}
