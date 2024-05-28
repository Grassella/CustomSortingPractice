function ageSort(users) {

  for (let i = 0; i < users.length - 1; i++) {
    for (let j = 0; j < users.length - i - 1; j++) {
      if (users[j].age > users[j + 1].age) {
        // Swap users[j] and users[j+1]
        let temp = users[j];
        users[j] = users[j + 1];
        users[j + 1] = temp;
      }
    }
  }
  return users;


}

// let newArr = []
// for (let el of users) {
//   let arr = Object.values(el)
//   newArr.push(arr[3])
// }
// return newArr.sort()


function oddEvenSort(arr) {

  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = 0; j < arr.length - i - 1; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       let temp = arr[j]
  //       arr[j] = arr[j + 1]
  //       arr[j + 1] = temp
  //     }
  //   }
  // }

  // let odd = []
  // let even = []

  // for (let i = 0; i < arr.length; i++) {
  //   let num = arr[i]
  //   if (num % 2 === 0) {
  //     even.push(num)
  //   }
  //   else {
  //     odd.push(num)
  //   }


  // }
  let odd = []
  let even = []
  for (const ele of arr) {
    if(ele % 2 === 0){
      even.push(ele)
    }else{
      odd.push(ele)
    }
  }
    odd.sort((a,b) => a - b)
    even.sort((a,b) => a - b)
  return odd.concat(even)
}

function validAnagrams(s, t) {
    let word1 = s.split('').sort().join()
    let word2 = t.split('').sort().join()
   return  word1 === word2


//   let obj = {}
//   if (s.length === t.length) {

//     for (let i = 0; i < s.length; i++) {
//       let letter = s[i]
//       let letter2 = t[i]
//       if (obj[letter] === undefined) {
//         obj[letter] = 1

//       }
//       else {
//         obj[letter]++
//       }
//       if (obj[letter2] === undefined) {
//         obj[letter2] = 1

//       }
//       else {
//         obj[letter2]++
//       }

//     }

//   }
//   else {
//     return false
//   }
//   for(let el in obj) {
//     if(obj[el] % 2 !== 0) {
//       return false
//     }
//   }
//   return true

}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    let baseA = Math.floor(Math.log10(a));
    let baseB = Math.floor(Math.log10(b));
    if(baseA === baseB) return a - b;
    return b - a;
  })
}


function frequencySort(arr) {
  let freqMap = {}

  // grab a tally of numbers
  arr.forEach(num => {
    if (freqMap[num]) {
      freqMap[num]++
    } else {
      freqMap[num] = 1
    }
  })

  // sort based on number next to value
  // if the next number is the number
  // put it together
  // otherwise sort in descending order
  return arr.sort((a, b) => {
    if (freqMap[a] !== freqMap[b]) {
      return freqMap[a] - freqMap[b]
    }

    return b - a
  })
}


const arr1 = [11, 1, 101, 0, 10, 100];
const arr2 = [1, 45, 164, 6, 31, 90, 671];

console.log(oddEvenSort(arr1));      // => [100, 101, 10, 11, 0, 1]
// console.log(reverseBaseSort(arr2));      // => [164, 671, 31, 45, 90, 1, 6]



module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
