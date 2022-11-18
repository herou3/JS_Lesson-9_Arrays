'use strict'

const numbers = [10, 4, 100, -5, 54, 2]

function multuplay(value) {
  return value ** 3
}

// with use for
function sumWithUseFor() {
  let sum = 0
  for (let index = 0; index < numbers.length; index++) {
    sum += multuplay(numbers[index])
  }
  console.log(sum)
}

sumWithUseFor()

// with use for...of
function sumWithUseForOf() {
  let sum = 0
  for(const value of numbers) {
    sum += multuplay(value)
  }
  console.log(sum)
}

sumWithUseForOf()

// with use forEach()
function sumWithUseforEach() {
  let sum = 0
  numbers.forEach(value => {
    sum += multuplay(value)
  })
  console.log(sum)
} 

sumWithUseforEach()

function sumWithUseReduce() {
  let sum = 0
  sum = numbers.reduce((acc, value) => {
    return acc += multuplay(value)
  }, 0),
  console.log(sum)
}

sumWithUseReduce()