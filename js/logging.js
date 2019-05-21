'use strict';

export default class Log {

  callback;

  constructor(callback) {
    this.callback = callback;
  }

  event(eventScope, eventName, obj) {
    console.log(`${new Date()} [${eventScope}] [EVENT ${eventName}]`);
    this.callback(`${new Date()} [${eventScope}] [EVENT ${eventName}]`)
  };

  info(eventScope, text, obj) {
    console.log(`${new Date()} [${eventScope}] [INFO] ${text}`, obj);
    this.callback(`${new Date()} [${eventScope}] [INFO] ${text}`)
  };

  error(eventScope, text, obj) {
    console.error(`${new Date()} [${eventScope}] [ERROR] ${text}`, obj);
    this.callback(`${new Date()} [${eventScope}] [ERROR] ${text}`)
  };

  warn(eventScope, text, obj) {
    console.warn(`${new Date()} [${eventScope}] [WARN] ${text}`, obj);
    this.callback(`${new Date()} [${eventScope}] [WARN] ${text}`)
  }
};
