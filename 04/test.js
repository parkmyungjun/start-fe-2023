// const name = 'jeju';
// const url = 'https://daum.net/' + DataTransferItemList;
// const url2 = 'https://daum.net/${title}'
// // $표시 이상함 
// // prettier 써야되나???

// console.log(url, url2);

// function sum(x, y = 0){
//     //if (!y) y = 0;
//     return x + y;
// }

// console.log(sum(10));
// const result = [1, 2, 3, 4].map(item => + 1

// )

// function sum(x, y, z){
//     return x + y + z;
// }
// const numbers = [1, 2, 3];
// const [x, y, z] = [...numbers];

// console.log(x, y, z);

// const obj = { team: 1, area: 2};

// const team = obj.team;
// const area = obj.area;

// const { team1, area1} = obj;

// const number = 1;
// const obj1 = {
//     number,
// }

// 템플릿표현식 예제코드를 작성하세요
// var name = '박명준';
// var age = 26;
// console.log(`저의 이름은 ${name}이고, 나이는 ${age}입니다.`);

// 화살표함수 예제코드를 작성하세요
// const multiplication = (a,b) => a*b;
// console.log(multiplication(2, 13));

// 구조분해할당 예제 코드를 작성하세요
// let arr = [2023, 3, 26];
// let [y, m, d] = arr;
// console.log(`오늘은 ${y}년 ${m}월 ${d}일 입니다.`);

// 문제풀기
// 1. 문자열 합치기
// const year = 2022;
// const month = 11;
// const day = 3;

// // quiz
// const dateString = (year + '-' + month + '-0' + day);
// // 출력: 2022-12-03
// console.log(dateString);


// 2. 문자열 분리
// const dateString = "2022-12-12";

// // quiz
// const dateStringEle = (dateString.split('-'));
// console.log(dateStringEle);
// // 출력: [2022,12,12];


// 3. 문자열 변경
// const text = "나는 XX를 좋아해";
// const item = "JS";

// // quiz
// const replaced_text = text.replace("XX", item);
// console.log(replaced_text);
// // 출력: 나는 JS를 좋아해


// 4. 문자열 검색
// const text = "안녕하세요. 나는 사람입니다.";
// const searchText = "사람";

// // quiz
// console.log(text.indexOf(searchText) !== 0);
// // 출력: true


// 5. 모든 배열값 더하기
// const point1 = [12, 34, 80, 72];
// const point2 = [1, 80, 94];

// // quiz
// // point3이 생길수도 있을때 대응
// let result = 0;
// [...point1, ...point2].map(item => (result += item));
// console.log(result);
// // 출력: 373 (모든 배열값들이 합)


// 6. 소수점이하를 버리고 정수 구하기
// const a = 1.2;
// const b = 3.4;

// // quiz
// console.log(Math.floor(a) + Math.floor(b));
// // 출력: 4


// 7. 랜덤수 구하기
// const min = 1;
// const max = 10;

// // quiz
// console.log(Math.floor(Math.random() * 10));
// //출력: 3 (1~10 포함한 랜덤수)


// 8. 배수 확인
// const target = 10;
// const num = 3;

// // quiz
// // target이 num이 배수인지
// console.log(target % num == 0);
// // 출력: false


// 9. 대문자로 변경
// const nick = "kakao";

// // quiz
// console.log(nick.toUpperCase());
// // 출력: KAKAO


// 10. 원시타입 요소만 배열로 만들기
// const items = [1, "a", true, ["a"], { n: 1 }];

// // quiz

// // 출력: [1,'a',true]


// 11. 배열값 나누기
// const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// const pageSize = 3;

// // quiz
// // pageSize에 따라 배열값 분리해서 출력
// // pageSize=2 일때는 맨끝에 --- 없어야함
// const pad = '---';
// const result = []
// items.forEach((item, index) => {
//     const ispagePad = index % pageSize === 0 && index > 0;
//     if(ispagePad){
//         result.push(pad);
//     }
//     result.push(item);
// });

// const str = result.join(',');
// console.log(str);
// // 출력: a,b,c---d,e,f---g,h,i---j

