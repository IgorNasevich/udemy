/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики





const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let submitButton = document.querySelector('.add').lastElementChild;
let input = document.querySelector('.adding__input');
let tick = input.nextElementSibling.nextElementSibling;
console.log(tick);

document.querySelector('.promo__adv').remove(); //1
document.querySelector('.promo__genre').innerText = 'ДРАМА';//2
document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')";//3


function updateFilmList(){
    movieDB.movies.sort();//4
    let filmsList = document.querySelector(".promo__interactive-list");
    filmsList.innerHTML = "";
    movieDB.movies.forEach( (item,i) => {
        filmsList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${movieDB.movies[i]}
            <div class="delete"></div>
        </li>
        `;
    });
    addEventListenerToDeleteIcons()
}

function addEventListenerToDeleteIcons() {
    let deleteArr = document.querySelectorAll('.delete');
    deleteArr.forEach(item => {
        item.addEventListener('click', (e)=>{
            // e.preventDefault();
            let text = item.parentElement.innerText;
    
            movieDB.movies.forEach((item,i) =>{
                if(item.toLowerCase() === text.toLowerCase().slice(2)){ 
                    console.log(movieDB.movies); 
                    movieDB.movies.splice(i,1); 
                    console.log(movieDB.movies); 
                };
            });
            console.log(movieDB);
            item.parentElement.innerHTML = '';
            updateFilmList();            
        });
    });
}

updateFilmList();

submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let result = '';
    
    if(input.value.length > 21){
        result = input.value.substring(0,21) + "...";
    }
    else{
        result = input.value;
    }
    if(!movieDB.movies.includes(input.value.toLowerCase())){
        movieDB.movies.push(result);
        updateFilmList();
    }; 
    if(tick.checked){
        console.log("Добавляем любимый фильм"); 
    }
})