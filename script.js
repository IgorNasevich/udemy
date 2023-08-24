let numberOfFilms;

numberOfFilms = prompt("Сколько фильмов вы уже посмотрели");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let film1 = prompt("Один из последних просмотренных фильмов?");
let film2 = prompt("Один из последних просмотренных фильмов?");
let rateFilm1 = prompt("На сколько оцените его ?");
let rateFilm2 = prompt("На сколько оцените его ?");

personalMovieDB.movies[film1] = rateFilm1;
personalMovieDB.movies[film2] = rateFilm2;

console.log(personalMovieDB);