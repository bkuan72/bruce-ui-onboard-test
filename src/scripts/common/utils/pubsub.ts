// subscription and publish event,enable data transfer between different components
interface Events {
    [key: string]: Function[];
}

class Pubsub {
    private events: Events;
    constructor() {
      this.events = {};
    }
  
    subscription (eventName, func) {
      return {
        subscribe: () => {
          if (this.events[eventName]) {
            this.events[eventName].push(func);
            console.log(`${func.name} has subscribed to ${eventName} Topic!`)
          } else {
            this.events[eventName] = [func];
            console.log(`${func.name} has subscribed to ${eventName} Topic!`)
          }
        },
  
        unsubscribe: () => {
          if(this.events[eventName]){
            this.events[eventName] = this.events[eventName].filter((subscriber) => subscriber !== func);
            console.log(`${func.name} has unsubscribed from ${eventName} Topic!`)
          }
        }
      }
    } 
  
  
    publish(eventName, ...args) {
      const funcs = this.events[eventName];
      if (Array.isArray(funcs)) {
        funcs.forEach((func) => {
          func.apply(null, args);
        });
      }
    }
  }
  
  export default new Pubsub();
//   const speak = (param) => {
//     console.log(`I am ${param}`);
//   };
  
//   const greetAll = (x, y, z) => {
//     console.log(`Hello ${x}, ${y}, ${z}`);
//   };
  
//   const pubsub = new Pubsub();
  
  
//   pubsub.subscription("greet", greetAll).subscribe() // prints greetAll has subscribed to greet Topic!
  
//   pubsub.subscription("sayName", speak).subscribe() // prints speak has subscribed to sayName Topic!
//   pubsub.subscription("sayName", greetAll).unsubscribe() // prints greetAll has unsubscribed from sayName Topic!
  
  
  
//   pubsub.publish("greet", "Lawrence Eagles", "John Doe", "Jane Doe"); // prints Hello Lawrence Eagles, John Doe, Jane Doe
  
//   pubsub.publish("sayName", "Lawrence Eagles"); // prints I am Lawrence Eagles