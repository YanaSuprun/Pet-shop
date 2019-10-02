
export class AppManager {
  init() {
    this.eventManager = new EventManager();
    this.controllerA = new Controller(this.eventManager);
    this.controllerB = new Controller(this.eventManager);
    
    this.eventManager.on('updatedA', () => {
      this.controllerA.doSmth();
    });
    this.eventManager.on('updatedB', () => {
      this.controllerB.doSmth();
    });
    this.eventManager.on('other', () => {
      this.controllerA.doOther();
    });
  }
}

class EventManager {
  on(eventName) {}
  publish(eventName, data) {}
  unsubscribe(eventName, handler) {}
}


//////////////////////////////////////////////////////

class AController {
  constructor (eventManager) {
    this.eventManager = eventManager;
  }
  init() {
    this.view = new View();
    this.model = new Model();
    
    const data = this.model.getItem();
    this.view.render(data);
    
    this.eventManager.on('updatedA', () => {
      this.doSmth();
    });
  }
 
  doSmth() {}
  doOther() {}
  doSomthThatMayNotifyB() {
    this.eventManager.publish('notifyB');
  }
}


class AppController {
  init() {
    this.eventManager = new EventManager();
    this.controllerA = new Controller(this.eventManager);
    this.controllerB = new Controller(this.eventManager);
  }
}