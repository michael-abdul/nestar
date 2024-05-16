// ZN-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]
function rotateArray(arr, index) {
	return arr.slice(index + 1).concat(arr.slice(0, index + 1));
}


const result = rotateArray([1, 2, 3, 4, 5, 6], 3);
console.log(result);











































// ZM-TASK:

// Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
// MASALAN: reverseInteger(123456789) return 987654321

// function reverseInteger(num) {
//   let reversedNum = parseInt(num.toString().split('').reverse().join(''));
//   return reversedNum;
// }

// console.log(reverseInteger(123456789));

// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib
//  qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(str) {
//   return str.toLowerCase().split(' ').join('-');
// }

// console.log(stringToKebab("I love Kebab"));

// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

// function printNumbers() {
//   let count = 1;
//   const interval = setInterval(function() {
//       console.log(count);
//       count++;
//       if (count > 5) {
//           clearInterval(interval);
//       }
//   }, 1000);
// }

// printNumbers();

// ZJ-TASK:

// Shunday function yozing,
//  u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

// function reduceNestedArray(data) {
//   return data.reduce((sum, item) => sum + (typeof item === 'number' ? item : reduceNestedArray(item)), 0);
// }

// // Example usage
// const data = [1, [1, 2, [4]]];
// const result = reduceNestedArray(data);
// console.log(result);

// Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32

// function celsiusToFahrenheit(celsius: number) {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(celsiusToFahrenheit(1));

// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va
// berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

// function randomBetween(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(randomBetween(30, 50));

// ZA-TASK:

// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin.
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// function sortByAge(arr: { age: number }[]): { age: number }[] {
//   return arr
//     .map((obj) => obj.age)
//     .sort((a, b) => a - b)
//     .map((age) => ({ age }));
// }

// const arr = [{ age: 23 }, { age: 21 }, { age: 13 }];
// console.log(sortByAge(arr));

// function sumEvens(arr: number[]) {
//   let total = 0;
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       total += num;
//     }
//   }
//   return total;
// }

// // Test qilish
// console.log(sumEvens([1, 2, 3, 4]));

// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection(arr1: number[], arr2: number[]) {
//   let check = [];
//   for (let ele1 of arr1) {
//     for (let ele2 of arr2) {
//       if (ele1 === ele2) {
//         check.push(ele1);
//       }
//     }
//   }
//   return check;
// }

// console.log(findIntersection([1, 2, 9, 3], [3, 2, 9, 0]));

// // X-TASK:

// Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// interface T {
//     [key: string]: any;
// }
// function countOccurrences(obj:T, str: keyof T):number {
//   let count = 0;
//   function test(obj:T) {
//       for (const key in obj) {
//           if (typeof obj[key] === 'object') {
//               test(obj[key]);
//           } else if (key === str) {
//               count++;
//           }
//       }
//   }
//   test(obj);

//   return count;
// }

// console.log(countOccurrences({model: 'Bugatti',steer: {model: 'HANKOOK', size: 30}}, 'model'));

// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray(arr:number[], size:number){
//   const chunks = [];
//   while (arr.length > 0) {
//     chunks.push(arr.slice(0, size));
//     arr = arr.slice(size);
//   }
//   return chunks;
// }

// console.log(chunkArray([11,12,13,14,15,16,17,28], 3));

// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va
// u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// interface T {
//   [key: string]: number;
// }
// function countChars(str: string): T {
//   let a:  T = {};

//   for (let char of str) {
//       if (a[char]) {
//           a[char]++;
//       } else {
//           a[char] = 1;
//       }
//   }

//   return a;
// }

// console.log(countChars("abdulaziz"));
// console.log(countChars("hello"));

// // U-TASK:

// // Shunday function yozing, uni number parametri bolsin
// // va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// // MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function countOdds(number: number): number {
//   let count = 0;
//   for (let i = 0; i < number; i++) {
//       if (i % 2 !== 0) {
//           count++;
//       }
//   }
//   return count;
// }

// console.log(countOdds(3));
// console.log(countOdds(5));

// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin
// va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr1:number[], arr2:number[]) {
//   const num = arr1.concat(arr2).sort((a, b) => a - b);
//   console.log(num);
// }

// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin
// va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(nums: number[]): void {
//   const numSet = new Set(nums);
//   const n = nums.length + 1;

//   for (let i = 0; i < n; i++) {
//       if (!numSet.has(i)) {
//           console.log(i);
//       }
//   }
// }

// missingNumber([4, 0, 1, 2]);

// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin.
// String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// function calculate(str:string) {
//   const a = str.split('+').map(Number).reduce((acc, num) => acc + num, 0);;
// console.log(a);
// };
// calculate('3+4');

// // Q-TASK:

// // Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// // MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// interface T {
//   [key: string]: any;
// }

// function hasProperty(obj:T, str:string) {
//   const a =  Object.keys(obj).includes(str);
// console.log(a);
// }
// hasProperty({name: "BMW", model: "M3"}, "model");
// hasProperty({name: "BMW", model: "M3"}, "year");

// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
// interface T {
//   [key: string]: any;
// }

// function objectToArray(obj:T) {
//   const a = Object.keys(obj).map(ele => [ele, obj[ele]]);
//    console.log(a)
//  }
//  objectToArray({a: 10, b: 20});

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
// function calculateSumOfNumbers(arr: (number | string | object | boolean)[]): number {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//       const value= arr[i];
//       if (typeof value === 'number') {
//           sum += value;
//       }
//   }
//   return sum;
// }

// const result: number = calculateSumOfNumbers([10, "10", {number: 10}, true, 35]);
// console.log(result);

// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(str:string){
//    const a = str=== str.split('').reverse().join('');
//     console.log(a);
//   }
//   palindromCheck("dad");
//   palindromCheck("son");

// // M-TASK:

// // Shunday function yozing, u raqam lard an tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// // MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// interface T {
// number: number;
// square:number;
// }

// function getSquareNumbers (number: number[]) :T[]{
//   const result:T[] = number.map(num => ({ number: num, square: num * num }));
//     console.log(result);
//   return result;
// };

// getSquareNumbers([10, 11, 12, 13]);

// L-TASK:

// Shunday function yozing, u string qabul qilsin
// va string ichidagi hamma sozlarni chappasiga yozib va
// sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function str(txt:string):void {
//   const a = txt.split(' ').map(ele => ele.split('').reverse().join('')).join(' ');
//   console.log(a);

// }
// str("we like coding")

// Validations:
// FD validation
// BD vatidation
// Database vaedation

// K-TASK:

// Shunday function yozing, u string qabul qilsin
// va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(txt:string):number{
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   return txt.toLowerCase().split("").reduce((count, value) => {
//     if (vowels.includes(value)) {
//       return count + 1;
//     } else {
//       return count;
//     }
//   }, 0);
// }

// console.log(countVowels("string"));

//Cookie:
// request join
//self destroy

// Traditional FD => BSSR  Admin=>EJS
// Modern FD => SPA User => REACT

// I-TASK:

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(str:string):void{
//   const a = str.split('').filter(ele => !isNaN(Number(ele))).join('');
//   console.log(a);
// }

// getDigits("kfjdfslhf545kj4l5kj4bj5kl4");

// H-TASK:

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function abc(a:number[]) {
//   const b = a.filter((a)=>{
//      return a>0;
//  });
// const c=b.join("");
//   console.log(c);
// }
// abc([7,-9,5,-4,2]);

// Project Standards:
// -Logging standards
// -Naming standards
// function, method, variable => camelCase
// class => PASCAL
// folder, file = KEBAB
// css => Snake                        button_style
// -Error handling

//Traditional API
//Rest API
//GraphQL API

/*g-TASK: 

 Shunday function tuzing,
  u string qabul qilib teskari qilib return qilsin
 MASALAN: gerReverse("hello") return qiladi "olleh"


 */

// function str(txt: string): void {
//     const a: string = txt.split('').reverse().join('');
//     console.log(a);
//   }

//   str('hello');

/*G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.


*/
// function getHighestIndex(arr) {
//     const highestIndex = arr.reduce((acc, cur, idx) => cur > arr[acc] ? idx : acc, 0);
//     console.log(highestIndex);
//     return highestIndex;
// }

// getHighestIndex([5, 21, 12, 21, 8]);

// // F-TASK:

// // Shunday findDoublers function tuzing,
// // unga faqat bitta string argument pass bolib,
// //  agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// // MASALAN: getReverse("hello") return true return qiladi
// function findDoublers(str) {
//      const a = str.split('').some((total, ele, arr) => total == arr[ele+1]);
//  console.log(a)
// }

// findDoublers('daddy');

//Task-E
// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// function str (a){
// const b = a.split('').reverse().join('');
// console.log(b);
// }
// str('AssalomuAleykum');
