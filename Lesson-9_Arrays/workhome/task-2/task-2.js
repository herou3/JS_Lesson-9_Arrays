function getSumOfSequence(number) {
  if (!(typeof number === 'number')) {
    return null
  }
  let numbers = []
  for (let index = 1; index <= number; index++) {
    numbers.push(index)
  }
  return numbers[0] + numbers[numbers.length - 1]
}

console.log(getSumOfSequence(5))