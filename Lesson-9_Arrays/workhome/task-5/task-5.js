'use strict'

class Caffe {
  coffees = []
  prices = []
  updatedPrices = []
  clientsEstimations = []
  coffeeName = ''

  initial(coffees, prices) {
    if (coffees.length != prices.length) {
      return undefined
    }
    for (let index = 0; index < coffees.length; index++) {
      this.coffees.push(coffees[index])
      this.prices.push(prices[index])
    }
  }

  findCoffeeByName() {
    this.coffeeName = prompt('Поиск кофе по названию:')
    if (!(typeof this.coffeeName === 'string')) {
      return -1
    }
     return this.coffees.findIndex(coffee => {
      return coffee.toLowerCase() === this.coffeeName.toLowerCase()
    })
  }

  updatePrices(value) {
    this.prices.forEach((element) => {
      this.updatedPrices.push(Number(element) + Number(value))
    })
  }

  askClientToGiveEstimation() {
    const clientEstimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'))
    if (!(typeof clientEstimation === 'number')) {
      return
    }
    if (clientEstimation >= 1 && clientEstimation <= 10) {
      this.clientsEstimations.push(clientEstimation)
    }
  }

  printMessageForClient(index) {
    if (index >= 0) {
      alert(`Держите ваш любимый кофе ${this.coffees[index]}. Он ${index+1}-й по популярности в нашей кофейне.`)
    } else {
      alert(`К сожалению, такого вида кофе нет в наличии`)
    }
  }

  printInformationAboutNewPrices() {
    if (this.updatedPrices.length == 0) {
      return undefined
    }
    this.coffees.map((coffee, index) => {
      alert(`Кофе ${coffee} сейчас стоит ${this.updatedPrices[index]} евро`)
    })
  }

  printEstimationFromClients() {
    console.log(this.clientsEstimations);
    alert(`Всего положительных оценок: ${this.clientsEstimations.filter(estimate => estimate > 5).length}; Всего отрицательных оценок: ${this.clientsEstimations.filter(estimate => estimate < 5).length}`)
  }
}

// Starter

function appLaunch(times) {
  const caffe = new Caffe

  for (let index = 0; index < times; index++) {
    caffe.askClientToGiveEstimation()
  }
  caffe.printEstimationFromClients()
}

appLaunch(5)