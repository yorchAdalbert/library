class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // Getters
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  // Setters
  set isCheckedOut(isChecked) {
    this._isCheckedOut = isChecked;
  }

  // Methods
  getAverageRating() {
    let sum = 0;
    const rates = this._ratings.length;

    for (let i = 0; i < rates; i++)
      sum += this._ratings[i];

    return sum / rates;
  }

  toggleCheckOutStatus() {
    const changeValue = this._isCheckedOut ? false : true;
    this._isCheckedOut = changeValue;
  }

  addRating(rate) {
    this._ratings.push(rate);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  // Subclass Getters
  get author() {
    return this._author;
  }

  get pages() {
    return pages;
  }
};

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  // Subclass Getters
  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
};

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  // Subclass Getters
  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
};

const mediaOne = new Media('hello World');

console.log(mediaOne.isCheckedOut);
mediaOne.toggleCheckOutStatus();
console.log(mediaOne.isCheckedOut);
