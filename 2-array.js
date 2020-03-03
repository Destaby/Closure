'use strict';

const array = (a = []) => Object.assign(
  i => a[i],
  {
    push(x) {
      a.push(x);
    },
    pop() {
      return a.pop();
    },
  }
);


module.exports = { array };
