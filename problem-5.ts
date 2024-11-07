const getProperty = <O, P extends keyof O>(object: O, property: P): O[P] => {
  return object[property]
}
