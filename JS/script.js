"using strict";

// loop0: {
//     const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     if(!numberOfFilms){
//         console.log('Необходимо ввести значение!');
//         break loop0;
//     }
// }

let flag = true;
let numberOfFilms;
while(flag){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    if(!numberOfFilms){
        alert('Необходимо ввести значение!');
    } else {
        flag = false;
    }
}

const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

let i = 1;
do {
    let nameOfFilm, ratingFilm;
    let flag = true;
    while(flag){
        nameOfFilm = prompt('Один из просмотренных фильмов?', '');
        if(!nameOfFilm){
            alert('Необходимо ввести значение!');
        }
        else if (nameOfFilm.length >= 50) {
            alert('Название слишком длинное.');
        } else {
            flag = false;
        }
    }
    flag = true;
    while(flag){
        ratingFilm = +prompt('На сколько оцените его?', '');
        if(!ratingFilm){
            alert('Необходимо ввести значение!');
        } else {
            flag = false
        };
    }
    
    personalMovieDB.movies[nameOfFilm] = ratingFilm;
    i++;
} while (i<=2);

console.log(personalMovieDB);

personalMovieDB.count = numberOfFilms;
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (10 <= personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30){
    console.log("вы киноман!");
} else ("Произошла ошибка");