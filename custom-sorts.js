function ageSort(users) {

  // for (let i = 0; i < users.length - 1; i++) {
  //   let swap = false
  //   for (let j = 0; j < users.length - i - 1; j++) {

  //     if (users[j].age > users[j + 1].age) {
  //       let temp = users[j].age
  //       console.log("temp: " + temp)
  //       users[j].age = users[j + 1].age
  //       users[j + 1].age = temp

  //       swap = true
  //     }
  //   }
  //   if (!swap) {
  //     break
  //   }
  // }

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

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  let odd = []
  let even = []

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (num % 2 === 0) {
      even.push(num)
    }
    else {
      odd.push(num)
    }


  }

  return odd.concat(even)
}

function validAnagrams(s, t) {

  let obj = {}
  if (s.length === t.length) {

    for (let i = 0; i < s.length; i++) {
      let letter = s[i]
      let letter2 = t[i]
      if (obj[letter] === undefined) {
        obj[letter] = 1

      }
      else {
        obj[letter]++
      }
      if (obj[letter2] === undefined) {
        obj[letter2] = 1

      }
      else {
        obj[letter2]++
      }

    }

  }
  else {
    return false
  }
  for(let el in obj) {
    if(obj[el] % 2 !== 0) {
      return false
    }
  }
  return true
  
}

function reverseBaseSort(arr) {
  // Your code here 
}

function frequencySort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  } 
  return arr.reverse()
}


let s = "anagram";
let t = "nagaram";
console.log(validAnagrams(s, t))

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
