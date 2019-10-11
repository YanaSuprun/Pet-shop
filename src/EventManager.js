export class EventManager {
  constructor() {
    this.events = {};
  }

  publish(eventName, data) {
    const event = this.events[eventName];
    if(event) {
      event.forEach(fn => fn(data));
    }
  }

  subscribe(eventName, func) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(func);

    return () => {
      this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
    }
  }
}
