export function LogHelper(message) {
  // access the "metadata" message
  console.warn(message);
  // return a function closure, which
  // is passed the class as `target`
  return function (target) {
    console.log('Our decorated class', target);
  }
}
