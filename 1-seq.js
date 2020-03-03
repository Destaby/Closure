'use strict';

const seq = f => g => {
  if (typeof g === 'number') return f(g);
  return seq(a => f(g(a)));
};


module.exports = { seq };
