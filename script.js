// 'use strict';

// let numberOfFilms;


// function showMyDB(){
//     if(personalMovieDB.privat === false){
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres(){
//     for(let i = 0; i < 3; i++){
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
//     }
// }

// function start(){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// function detectPersonalLevel(){
//     console.log(personalMovieDB.count);
//     if(personalMovieDB.count < 10){
//         console.log("Просмотрено довольно мало фильмов")
//     }
//     else if(personalMovieDB.count >= 10 && personalMovieDB.count < 20){
//         console.log("Вы классический зритель")
//     }
//     else if(personalMovieDB.count >= 20 && personalMovieDB.count < 30){
//         console.log("Вы киноман")
//     }
//     else{
//         console.log("Произошла ошибка")
//     }
// }

// start();
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// rememberMyFilms();
// detectPersonalLevel();
// writeYourGenres();
// showMyDB();




// console.log(true + false);              // truefalse             1
// console.log(12 / "6");                  // 2
// console.log("number" + 15 + 3);         // number153
// console.log(15 + 3 + "number");         // 18number
// console.log([1] > null);                // true
// console.log("foo" + + "bar");           // fooNaN
// console.log('true' == true);            // true                  FALSE
// console.log(false == 'false');          // false
// console.log(null == '');                // false
// console.log(!!"false" == !!"true");     // true
// // console.log([x] == x);               // false
// console.log([] + null + 1);             // null1
// console.log(0 || "0" && {});            // "0"                   {}
// console.log([1,2,3] == [1,2,3]);        // false
// console.log({}+[]+{}+[1]);              // '1'                    ??
// console.log(!+[]+[]+![]);               // "01"                 TRUEFALSE
// console.log(new Date(0) - 0);           //
// console.log(new Date(0) + 0);           //

// console.log("hello" > NaN);
// console.log({1:1}.valueOf());

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors = {name: 'Mike', age: 32};
    return copy;
}

console.log(transferWaitors(restorantData));


    
