import AnimalStore from '../stores/AnimalStore';
import request from 'tessel-js/lib/request';

class AnimalActions {
  addAnimal(animal, resolve, reject) {
    // Log something
    console.log("Will add on 1sec")

    // Set last added
    this.set({lastAdded: animal});

    // Simulate an asynchronous mutation
    setTimeout(() => {
      this.list.push(animal)
    }, 1000);
  }

  fetchAnimals() {
    request.get('http://localhost:8080/animals')
      .then((req) => {
        this.set({list: req.body})
      });
  }

  addAnimal(name) {
    request.post('http://localhost:8080/animals')
    .send({name})
    .then(() => this.list.push(name));
  }
}

var actions = AnimalStore.createActions(AnimalActions);

window.actions = actions;

export default actions;
