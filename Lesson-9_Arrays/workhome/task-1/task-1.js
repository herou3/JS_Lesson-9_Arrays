'use strict'

class Queue {
  peopleWaiting = []

  pushElementInQueue(... params) {
    for (const object of params) {
      this.peopleWaiting.push(object)
    }
  }

  giveParcel() {
    alert(`${this.peopleWaiting.shift()} получил(а) посылку. В очереди осталось ${this.peopleWaiting.length} человек.`)
  }

  leaveQueueWithoutParcel() {
    alert(`${this.peopleWaiting.shift()} не получил(а) посылку и ушел(ла) из очереди`)
  }
}

function lunchApp() {
  const queue = new Queue

  queue.pushElementInQueue('Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб')
  
  queue.giveParcel()
  queue.giveParcel()
  queue.giveParcel()
  
  while(queue.peopleWaiting.length > 0) {
    queue.leaveQueueWithoutParcel()
  }
}

lunchApp()
