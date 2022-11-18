'use strict'

// const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

// for (let index = 0; index < developerNames.length; index++) {
//   console.log('index', index);
//   console.log('item', developerNames[index]);
// }

// for (let element of developerNames) {
//   console.log('element', element);
// }

// developerNames.forEach((element, index, array) => {
//   console.log('element', element, index, array);
// });

const salariesOfDevelopersy = [400, 500, 600, 2000, 350]

const updatingSalaries = salariesOfDevelopersy.map((salary, index, array) => {
  return salary * 2
})

console.log('updatingSalaries', updatingSalaries)

// filter

const filtredSalaries = salariesOfDevelopersy.filter((salary, index, array) => {
  return salary > 600
})

console.log(filtredSalaries)

// find

const searchSalary = salariesOfDevelopersy.find((salary) => {
  return salary === 500
})
console.log(searchSalary)

const searchIndex = salariesOfDevelopersy.findIndex(salary => {
  return salary === 400
})
console.log(searchIndex)

const elementExist = salariesOfDevelopersy.some(salary => {
  return salary > 1000
})
console.log(elementExist)

const allElementExist = salariesOfDevelopersy.every(salary => {
  return salary > 0
})
console.log(allElementExist)

salariesOfDevelopersy.reduce((acc, salary, index, array) => {
  console.log('acc', acc)
  return 1
}, 0)