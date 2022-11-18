class Caffe {
  coffees = []
  coffeeName = ''

  initial(... coffees) {
    for (const coffee of coffees) {
      this.coffees.push(coffee)
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

  printMessageForClient(index) {
    if (index >= 0) {
      alert(`Держите ваш любимый кофе ${this.coffees[index]}. Он ${index+1}-й по популярности в нашей кофейне.`)
    } else {
      alert(`К сожалению, такого вида кофе нет в наличии`)
    }
  }
}

function appLaunch() {
  const caffe = new Caffe
  caffe.initial('Latte', 'Cappuccino', 'Americano')
  caffe.printMessageForClient(caffe.findCoffeeByName())
}

appLaunch()