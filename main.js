class Media {
  constructor(title, isCheckedOut, ratings) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
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

  // Methods
  getAverageRating() {
  
  }

  toggleCheckOutStatus() {

  }

  addRating() {

  }
};

class Book extends Media {
  constructor() {
  }
};

class Movie extends Media {
  constructor() {
  }
};

class CD extends Media {
  constructor() {

  }
};
