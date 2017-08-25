export function ReadOnly(target,key) { 
  Object.defineProperty(target, key, { writable: false });
}
