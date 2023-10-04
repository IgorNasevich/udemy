// function getTimeFromMinutes(min) {
//     if(min > 600 || min < 0 || !Number.isInteger(min)) return "Ошибка, проверьте данные"
//     if(Math.trunc(min/60) < 1 || min === 0) return `Это 0 часов и ${min} минут`
//     if(Math.trunc(min/60)>= 1 && Math.trunc(min/60) <2) return `Это 1 час и ${min-60} минут`
//     if(Math.trunc(min/60) >=2 && Math.trunc(min/60) <=4) return `Это ${Math.trunc(min/60)} часа и ${min - Math.trunc(min/60)*60} минут`
//     if(Math.trunc(min/60) >4 && Math.trunc(min/60) <=10) return `Это ${Math.trunc(min/60)} часов и ${min - Math.trunc(min/60)*60} минут`
// }

// console.log(getTimeFromMinutes(250));

// function findMaxNumber(a,b,c,d) {
//     if (typeof a !== "number"|| typeof b !== "number" || typeof c !== "number" || typeof d !== "number") return 0;
//     return Math.max(a,b,c,d)
// }

// console.log(findMaxNumber(10,15,7,-2));
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         // programmingLangs: {
//         //     js: '20%',
//         //     php: '10%'
//         // },
//         exp: '3 month'
//     }
// };

// function showProgrammingLangs(plan) {
//     let result ="";
//     let {programmingLangs} = plan.skills;
//     for(let key in programmingLangs){
//         result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return result;
// }

// console.log(showProgrammingLangs(personalPlanPeter))


// const someString = 'This is some strange string';

// function reverse(str) {
//     if(typeof str !== "string") return "Ошибка!";
//     let res = ""
//     for(let i = str.length-1; i >= 0 ; i--){
//         res += str[i];
//     }
//     return res;
// }

// function reverse(str) {
//     if(typeof str !== "string") return "Ошибка!";
//     arr = str.split("");
//     arr = arr.reverse();
//     return arr.join("");   
// }

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0) return 'Нет доступных валют';
//     let str = "Доступные валюты:\n";
//     arr.forEach(item => {
//         if(item !== missingCurr){
//             str += `${item}\n`;
//         }
//     });
//     return str;
// }

// console.log(availableCurr(arr, missingCurr));

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let volume = 0;
//     let area = 0;
//     for(let item of data.shops){
//         area += item.width * item.length;
//     }
//     volume = area * data.height;
//     console.log(volume);
//     console.log(volume*data.moneyPer1m3);
    
//     return data.budget >= volume*data.moneyPer1m3 ? "Бюджета достаточно":"Бюджета недостаточно";
// }

// console.log(isBudgetEnough(shoppingMallData));

    // const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

    // function sortStudentsByGroups(arr) {
    //     arr.sort();
    //     const a = [], b = [], c = [], rest = [];
        
    //     for (let i = 0; i < arr.length; i++){
    //         if (i < 3) {
    //             a.push(arr[i]);
    //         } else if (i < 6) {
    //             b.push(arr[i]);
    //         } else if (i < 9) {
    //             c.push(arr[i]);
    //         } else {
    //             rest.push(arr[i]);
    //         }
    //     }
    //     return [a,b,c, `Oставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
    // }

    var whatTimeIsIt = function(angle) {
        if(!angle) return"12:00";
       let h = Math.floor(angle/30);
       let m = Math.floor((angle - h*30)*2);
       console.log(angle/30)
       console.log((angle - h*30)*2)
       if (h<10){
         h = `0${h}`;
       }
       if (m<10){
         m = `0${m}`;
       }
       return `${h}:${m}`;
     }
    console.log(whatTimeIsIt(309.8422435022633 ))