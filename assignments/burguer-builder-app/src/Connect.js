export default class Connect {
  constructor() {
    this.registeredHandler = null;
  }
  register = handler => {
    this.registeredHandler = handler;
  };
  dispatch = props => {
    for (let key in props) {
      if (typeof props[key] === 'function') {
        throw new Error("It's forbiden to pass function inside the props.");
      }
    }
    this.registeredHandler(props);
  };
}
