class Caffe {
  coffees = []
  coffeeName = ''
  coffeeIndex = -1

  initial(... coffees) {
    for (const coffee of coffees) {
      this.coffees.push(coffee)
    }
  }

  isHasCoffeeByName() {
    this.coffeeName = prompt('Поиск кофе по названию:')
    console.log(this.coffeeName)
    return this.coffees.some((coffee, index) => {
      if (coffee.toLowerCase() == String(this.coffeeName).toLowerCase()) {
        this.coffeeName = coffee
        this.coffeeIndex = index
        return true
      }
    })
  }

  printMessageForClient(isExit) {
    if (isExit) {
      alert(`Держите ваш любимый кофе ${this.coffeeName}. Он ${this.coffeeIndex+1}-й по популярности в нашей кофейне.`)
    } else {
      alert(`К сожалению, такого вида кофе нет в наличии`)
    }
  }
}


function appLaunch() {
  const caffe = new Caffe
  caffe.initial('Latte', 'Cappuccino', 'Americano')
  caffe.printMessageForClient(caffe.isHasCoffeeByName())
}

appLaunch()