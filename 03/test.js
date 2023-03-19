// const a = 'a';
// console.log(a);
// a = '11';
// console.log(a);

// array create
// const todos = ["운동"];

// const todo = "공부";
// todos.push(todo);
// console.log(todos);

// // read

// todos.forEach(function(todo){
//     console.log(todo);
// });

// const updateTodo = '공부';
// todos.updateIndex = todos.findIndex(function(todo){
//     return todo === updateTodo;
// });


// failure

// const newTodos = todos.map(funtion (todo){
//     if(todo === updateTodo){
//         return '게임';
//     }
//     return todo;
// });

// 3주차 퀴즈

// var count = [10,20,30,40,50,60,70,100];  배열 count 요소들의 평균값 구하는 코드를 작성하세요

// var count = [10,20,30,40,50,60,70,100];

// var sum = 0;

// for(let i = 0; i < count.length; i++){
//     sum = sum + count[i];
// }
// console.log("합은 "+sum+" 이고");
// console.log(`평균은 ${sum/count.length} 입니다`);


// 구구단을 출력하는 코드를 for구문을 사용하여 작성하세요

// for(let i = 1; i <10; i++){
//     console.log(i+"단");
//     for(let j =1; j <10; j++){
//         console.log(i +" * " + j + " = " + i*j);
//     }
// }


// 위에서 만든 구구단코드를 함수로 작성하세요

// function timesTable(a,b){
//     console.log(a+"단 부터 "+b+"단 까지");
//     for(let i = a; i <= b; i++){
//         console.log(i+"단");
//         for(let j =1; j <10; j++){
//             console.log(i +" * " + j + " = " + i*j);
//         }
//     }
// }
// timesTable(1,9);


// 메소드가 포함된 객체를 생성하세요

// const calculatingPerson = {
//     name: 'MJPark',
//     age: 26,
//     plus(a,b){
//         var res = 0;
//         res = a + b;
//         console.log(res);
//     },
//     subtaraction(a,b){
//         var res = 0;
//         res = a - b;
//         console.log(res);
//     },
//     multiplication(a,b){
//         var res = 0;
//         res = a*b;
//         console.log(res);
//     },
//     division(a,b){
//         var res = 0;
//         res = a/b;
//         console.log(res);
//     }
// }


// js코드) window.prompt() 를 사용하여 사용자에게 숫자값을 입력받고 받은 숫자값들의 합을 출력하는 코드를 작성하세요
// let result = window.prompt("숫자를 입력하세요");
// let sum = Number(result);
// while(result !== null){
//     result = window.prompt("숫자를 입력하세요");
//     sum = sum + Number(result);
// }
// window.confirm("숫자의 합은 " + sum);
//console.log(sum);