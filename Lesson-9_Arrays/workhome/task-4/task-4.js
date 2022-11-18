'use strict'

class Caffe {
  coffees = []
  prices = []
  updatedPrices = []
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
}

// Starter

function appLaunch() {
  const caffe = new Caffe

  caffe.initial(['Latte', 'Cappuccino', 'Americano'], [1.5, 1, 2])
  caffe.updatePrices(0.5)
  caffe.printInformationAboutNewPrices()
}

appLaunch()