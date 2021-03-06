//Kata

//lv.7
//Given a number, write a function to output its reverse digits. 
// (e.g. given 123 the answer is 321)
// Examples
// 123 - > 321 -
//     456 - > -654
// 1000 - > 1

function reverseNumber(n) {
    let str = n.toString()
    let strChan = str.split("");
    let reverse = strChan.reverse();
    let joined = parseFloat(reverse.join(""));

    if (n < 0) return -joined
    return joined

}

reverseNumber(-123)
// better one

function reverseNumber(n) {
    let str = n.toString().split("").reverse();
    let joined = parseFloat(str.join(""));

    if (n < 0) return -joined
    return joined

}
reverseNumber(-123)

//best solution in Kata
reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')



// Lv.7
//Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a
// function that takes such collection and counts the points of our team in the championship.Rules
// for counting points
// for each match:

//     if x > y - 3 points
// if x < y - 0 point
// if x = y - 1 point

function points(games) {
    const total = games.reduce(function (acc, v) {
        const store = v.split(':').map(function (el) {
            return Number(el)
        })
        //['1','0'] -> [11,1]

        if (store[0] > store[1]) {
            return acc + 3
        } else if (store[0] === store[1]) {
            return acc + 1;
        }
        return acc
    })
}

// 7kyu
//  The year of 2013 is the first year after the old 1987 with only distinct digits.

// Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.
// Input/Output

//     [input] integer year  1000 ≤ year ≤ 9000  [output] an integer

//find out if it is true oe not
function hasOnlyDistingtDigit(year) {
    // const digits = year + ' ';
    const unique = [];
    const digits = year.stoString().split('');
    digits.forEach((el, idx) => {
        if (digits.indexOf(digit) === -1) {
            uniques.push(digit);
        }

    });

    if (unique.length === digits.length) {
        return true;
    }
    return false

}
//find out if it is true oe not
function hasOnlyDistingtDigit(year) {
    const digits = year.stoString().split("");

    digits.every(function (digit) {
        if (digits.indexOf(digit) === digit.lastIndexOf(digit)) {
            return true
        }
        return false
    })

}

//find out if it is true oe not
function hasOnlyDistingtDigit(year) {
    const digits = year.stoString().split("");
    const unique = new Set(digit);
    if (digits.len)
}

//counting
function distinctDigitYear(year) {

    for (let i = year + 1; ; i++) {
        //i<= 9012 withought writing limit
        // it stops untill the condition:
        // 9000 is 9012 is next distinct gidits 
        if (hasOnlyDistingtDigit(i)) {
            retrun i;
        }
    }
}

//kata 8

function warnTheSheep(queue) {
    const nr = queue.indexOf("wolf");
    const mehNr = queue.length - nr - 1;
    return nr === queue.length - 1 ? "Pls go away and stop eating my sheep" :
        "Oi! Sheep number " + mehNr + "! You are about to be eaten by a wolf!"

}

function warnTheSheep(queue) {
    const reverse = queue.slice().reverse();
    if (reverse[0] === 'wolf') return 'Pls go away and stop eating my sheep';
    const mehNr = reverse.indexOf("wolf")
}

const Sheep = queue => queue.indexOf('wolf') === queue.length - 1 ? "Pls go away and stop eating my sheep" :
    `Oi! Sheep number ${queue.length - 1 wolfindexOf } !You are about to be eaten by a wolf!`


// kata 7 
// In a factory a printer prints labels
// for boxes.For one kind of boxes the printer has to use colors which,
//     for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string.For example a "good"
// control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

//     Sometimes there are problems: lack of colors, technical malfunction and a "bad"
// control string is produced e.g.aaaxbbbbyyhwawiwjjjwwm with letters not from a to 

// I could make it ...another's solution
function printerError(s) {
    return s.match(/gi[^a-m]/g).length + "/" + s.length;

}

// kata 7
//
// unsolved impossibe way
function rowWeights(array) {
    array.map((el, idx) {
            let first = 0
            let second = 0
            if (arr[0] + arr[idx] % 2 === 0) {
                first += arr[idx]
            } else {
                second += arr[idx]
            }
            return first, second]

    })

// answer
function rowWeights(array) {
    let first = array.filter((el, idx) => idx % 2 === 0).reduce((acc, l) => acc + l, 0);
    let second = array.filter((el, idx) => idx % 2 != 0).reduce((acc, l) => acc + l, 0);

    return [first, second]
}


// kata 7 
//https://www.codewars.com/kata/ordered-count-of-characters/train/javascript

// my 

var orderedCount = function (text) {
    let order = []
    let count = 0;
    let txtArr = text.split("");
    let singleTxt = new Set(txtArr)


    txtArr.forEach((word) => {
        for (let i = 0; i < singleTxt.length; i++) {
            let count = 0;
            if (word === singleTxt[i])
                count += 1
            order.push([word, count])

        }
    })
    return order;
}

orderedCount('neehhhs')


// solution 
var orderedCount = function (text) {
    /*
    const uniques = Array.from(new Set(text));
    */
    const uniques = [];

    for (let i = 0; i < text.length; i++) {
        const current = text[i];
        if (uniques.indexOf(current) === -1) uniques.push(current);
    }

    const result = uniques.map(function (letter) {

        /*
          let count = text.split(letter).length - 1;
        */

        let count = 0;

        for (let i = 0; i < text.length; i++) {
            const current = text[i];

            if (current === letter) count++;
        }

        return [letter, count];
    })

    return result;

    // bruno
    var orderedCount = function (text) {

        let obj = {},
            result = [];

        for (let a of text) {

            obj[a] = (obj[a] || 0) + 1
        }
        for (let i of new Set(text)) {

            result.push([i, obj[i]]);

        }

        return result

    }


}

//kata 7 
//https://www.codewars.com/kata/build-a-square/train/javascript
function generateShape(int) {
    let count = "";
    let star = '+'.repeat(int)

    for (let i = 0; i < int; i++) {
        count += `${ star } `;
        if (i !== int - 1)
            count += `\n`
    }

    return count
}

// nelly
function generateShape(int) {
    return ("+".repeat(int) + "\n").repeat(int).slice(0, -1);

}


var orderedCount = function (text) {
    let order = []
    let count = 0;
    let txtArr = text.split("");
    let singleTxt = [...new Set(txtArr)]
    //   console.log(singleTxt)

    txtArr.forEach((word) => {

        for (let i = 0; i < singleTxt.length; i++) {
            let count = 0;
            if (word === singleTxt[i])
                count += 1
        }
        order.push([word, count])
    })
    //   console.log(order)
    return order;
}

orderedCount('neehhhs')



// var orderedCount = function(text) {
// let uniques = array.from(new Set(text))

// // const uniques =[];
// // for(let i = 0; i<text.length; i++){
// //   const current = text[i];
// //   if(uniques.indexOf(current)!==-1)uniques.push(current)
// // }
// /*
// text.split(letter)
// */
// const result = uniques.map(function(letter){
//   let count = 0
//   for(let i = 0; i< text.length; i++){
//     const current = text[i]
//     if(current === letter) count++;
//   }
//   return [letter, count]
// })
// }


// kata 7 
//

//my answer

const onlyDuplicates = (str) => {
    let strArr = [...str];
    const dubArr = strArr.map((el, idx) => {
        if (strArr.indexOf(strArr[idx]) !== strArr.lastIndexOf(strArr[idx]))
            return strArr[idx];
    });
    return dubArr.join("")
}
onlyDuplicates("abccdefee")

// kata
function onlyDuplicates(str) {
    return str.split('').filter(e => str.indexOf(e) != str.lastIndexOf(e)).join('')
}

// andre
const dubArr = strArr.reduce((acc, val) => {
    if (strArr.indexOf(strArr[idx]) !== strArr.lastIndexOf(strArr[idx]))
        return acc + val
    return acc;
});
return dubArr.join("")
}

//kata 8
//https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript
//countingsheep
// my answer
const countSheeps = (arrayOfSheep) => {
    let count = 0;
    arrayOfSheep.forEach((el, idx) => {
        if (el) count += 1;
    })
    return count;

}

// kata perope
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

// kata 8
//my
function maxMultiple(divisor, bound) {
    let maxNr = 0;
    for (let i = 0; i < bound; i++) {
        if (i % divisor === 0)
            if (maxNr < i)
                maxNr = i;

    }
    return maxNr
}

maxMultiple(2, 7)

// minus
function maxMultiple(divisor, bound) {

    for (let i = bound; i > 0; i--) {
        if (i % divisor === 0) return i;
    }
    return maxNr
}

//hari 
function maxMultiple(divisor, bound) {

    return bound - (bound % divisor)
}

// kata 7 
// my answer
function longest(s1, s2) {
    let unique = [];
    if (s1.length > s2.length) {
        return unique = [...new Set(s1)].sort((a, b) => a.localeCompare(b)).join('')
    } else {
        return unique = [...new Set(s2)].sort((a, b) => a.localeCompare(b)).join('')

    }
}

//people

let longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

//kata 7 

// ny unsolved
function movie(card, ticket, perc) {
    result = 0;
    let i = 1;
    for (i = 1;; i++) {
        let price = card + (ticket * Math.pow(perc, i))
        if (Math.ceil(price) && price < ticket * i) return i;
    }
    return result = i;
};


//result people
function movie(card, ticket, perc) {
    for (let s = perc, n = 1; Math.ceil(card + s * ticket) >= ticket * n; s += Math.pow(perc, ++n))
        return n;
}

//kata 5 
// https://www.codewars.com/kata/simple-pig-latin/train/javascript


// my solution
function pigIt(str){
let arr = str.split(' ');
 let words = [];
  for(let i=0; i < arr.length; i++){
    if(arr[i]==="!" ||arr[i]==="?"){
      words.push(arr[i])
    }else{
    let change = arr[i]+arr[i][0]+"ay";
      words.push(change.slice(1,change.length))
  }}
  return words.join(" ") 
};

//iouli

function pigIt(str){
let temp = str.split(' ');
let res ="";
const mapped = temp.map(word=>{
    if(word=="?" || word ==="!") return word;
    else return word.substr(1,word.length)+[0]+"ay";
})
res = mapped.join(" ");

};


//kata 7 kyu
https://www.codewars.com/kata/get-the-middle-character/train/javascript
function getMiddle(s)
{
 let i = s.length;
  if( i  % 2 === 0){
      let y = i / 2;
     let  z = y - 1;
      var array = [...s];
    return s[z]+s[y]
  }else{
     let y = ( s.length -1) / 2;
      var array = [...s];
      return s[y]
  }
}

//people
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}



//kata7 
//https://www.codewars.com/kata/5c563cb78dac1951c2d60f01

function passTheDoorMan (word){
const alpha =['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
's','t','u','v',
'w','x','y','z'];
let arr = [...word];
let doub = [];
arr.forEach((el,idx)=>el=>{ 
  if(arr.indexOf(el)!== arr.lastIndexOf(el))
                          
                          })
  
  

}
    //iouli        
function passTheDoorMan (word){
let alph = '0abcdefghijklmnopqrstuvwxyz'
for(let i=0; i<word.length; i++){
if(word[i]===word[i-1]) return alph.indexOf(word[i])*3
}
}

//kata7

//https://www.codewars.com/kata/remove-duplicate-words/train/javascript
//my answer
function removeDuplicateWords (s) {
  const arr = s.split(" ").filter((el,idx,arr)=>{return arr.indexOf(el) === idx})
   return arr.join(" ")
}

//kata7
//https://www.codewars.com/kata/the-office-iii-broken-photocopier/train/javascript

// for loop
function broken(x){
let result ='';
  for(let i =0; i <x.length; i++){
    result += x[i]=== '0'? '1':'0';
  }
  return result
}

//map
function broken(x){
return [...x].map(el=> el === '0'? '1': "0").join("");
 
}



//kata 6
//https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript



// my  hahha too complicated
 let num = names.length-1
let result = names.map((el,idx,arr)=>{ if(arr.length === 0 ) return ''
   if(arr.length > 1)return el.name 
  }).join(" ").split(" ");
   result.splice(num,0,"&")
  return result



//moritz
const list = (names) => {

 let arr = names.map(person => person.name)

 let first = arr.splice(0, arr.length -1).join(", ")

 return first.length === 0 ? `${arr}` : `${first} & ${arr}`

}

// with people
// const list = (names) => {
//  let arr = names.map(person => person.name);
//  let first = arr.splice(0, arr.length - 1).join(", ");
//  return first.length === 0 ? `${arr}` : `${first} & ${arr}`
// }

const list = names => {
  return names.reduce((acc, val, i) => {
    
    if (i === names.length - 2) {
      acc += val.name + ' & ';
    } else if (i < names.length - 2) {
      acc += val.name + ', ';
    } else {
      acc += val.name;
    }
    
    return acc
  }, '')
}

// const list = names => {
//   const namesArr = names.map((el, i, arr) => {
//     if (el === arr[arr.length - 1]) {
//       return el.name;
//     } else if (el === arr[arr.length - 2]) {
//       return el.name + ' & ';
//     } else {
//       return el.name + ', ';
//     }
//   })
//   return namesArr.join('');
// }

// const list = names => {
//   const namesArr = names.map(el => el.name);
//   const lastElement = namesArr[namesArr.length - 1];
//   const namesArrWithoutLast = namesArr.slice(0, -1).join(', ');
  
//   let result = '';
  
//   if (namesArr.length >= 2) {
//     result = `${namesArrWithoutLast} & ${lastElement}`;
//   } else if (namesArr.length === 1) {
//     result = namesArr[0];
//   }
  
//   return result;
// }

// const list = (names) => {
//   let result = '';
  
//   for (let i = 0; i < names.length; i++) {
//     if (i === names.length - 2) {
//       result += names[i].name + ' & ';
//     } else if (i < names.length - 2) {
//       result += names[i].name + ', ';
//     } else {
//       result += names[i].name;
//     }
//   }
  
//   return result;
// }
/*
[
  0: {name: 'Bart'},
  1: {name: 'Lisa'},
  2: {name: 'Maggie'},
  
]
length: 3
*/


//kata 5 
//https://www.codewars.com/kata/pete-the-baker/train/javascript
//montaser
       let min;
Object.Keys(recipe).forEach(ingr=>
if(!avaiable[ingr]) min =0;
 const possible =Math.floor(avaiable[ingr])/recipe[ingr])
if(!min||possiblle<min) min = possible;
  return min;

  //kata 4
  //https://www.codewars.com/kata/pyramid-slide-down/train/javascript

  // my challenge & missunderstanding hehe
  //  
  function longestSlideDown (pyramid) {
  let lngNr =[];
  for(let i= 0; i< pyramid.length; i++){
   i.map((el,idx,arr)=>{lngNr.push[arr[arr.length-1]] 
   } )

}
 return lngNr.reduce((acc,el)=>{acc+el},0)
  }
  
 
  // solusion by min

  function longestSlideDown(pyramid){
      for(let i =pyramid.length-2: i>=0; i--){
          for(let j=0; j<= pryamid[i].length-1;j++){
              pyramid[i][j]=pyramid[i][j]+Math.max(pyramid[i+1],pramid[i+1][j+1])
          }
          return pyramid[0][0]
      }
  }


  //kata 6  https://www.codewars.com/kata/break-camelcase/train/javascript

  function solution(string) {
  return  string.split("").map((el)=>{
     if(el === el.toUpperCase()){
         el = " " + el;
     }
     return el
  
  }
  ).join('')

}
                                

