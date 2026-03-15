"using strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

let nameOfFilm1 = prompt('Один из просмотренных фильмов?', ''),
    ratingFilm1 = +prompt('На сколько оцените его?', ''),
    nameOfFilm2 = prompt('Один из просмотренных фильмов?', ''),
    ratingFilm2 = +prompt('На сколько оцените его?', '');

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies[nameOfFilm1] = ratingFilm1;
personalMovieDB.movies[nameOfFilm2] = ratingFilm2;

console.log(personalMovieDB);