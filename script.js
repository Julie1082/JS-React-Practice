"use strict";

let numberOfFilms;
let userQuestions = {
  number_of_films: "Сколько фильмов вы уже посмотрели?",
  last_movie: "Один из последних просмотренных фильмов?",
  rating: "На сколько оцените его?",
};

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();

function start() {
  numberOfFilms = +prompt(userQuestions.number_of_films);
  if (!isValid(numberOfFilms) || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt(userQuestions.number_of_films);
  } else {
    personalMovieDB.count = numberOfFilms;
  }

  console.log("inside start: ", personalMovieDB);
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let movie = prompt(userQuestions.last_movie);
    let rating = prompt(userQuestions.rating);

    if (
      ![null, ""].includes(movie) &&
      ![null, ""].includes(rating) &&
      movie.length < 50
    ) {
      personalMovieDB.movies[movie] = rating;
    } else {
      i--;
    }
  }

  console.log("inside rememberMyFilms: ", personalMovieDB);
}

function detectPersonalLevel() {
  let message = "Произошла ошибка";
  let count = personalMovieDB.count;
  if (count < 10) {
    message = "Просмотрено довольно мало фильмов";
  } else if (count >= 10 && count < 30) {
    message = "Вы классический зритель";
  } else if (count >= 30) {
    message = "Вы киноман";
  }
  console.log(message);

  console.log("inside detectPersonalLevel: ", personalMovieDB);
}

function showMyDB() {
  if (!personalMovieDB.private) {
    console.log("personalMovieDB: ", personalMovieDB);
  }
}

function writeYourGenres() {
  let count = 1;
  let genre = "";
  while (!isValid(genre) || count <= 3) {
    genre = prompt(`Ваш любимый жанр под номером ${count}`);

    if (isValid(genre)) {
      personalMovieDB.genres.push(genre);
      count++;
    }
  }
  console.log("inside writeYourGenres: ", personalMovieDB);
}

function isValid(variable) {
  return variable == "" || variable == null ? false : true;
}
