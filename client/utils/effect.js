// Util for chaining in effects with promises
// i.e promise.then(effect(console.log)).then(sameValAsLog => ...)
// also works on the catch branch
// i.e. promise.catch(effect(console.error)).catch(sameErrAsLog => ...)
const effect = fn => val => {
  fn(val);
  if (val instanceof Error) return Promise.reject(val);
  return val;
};

export default effect;
