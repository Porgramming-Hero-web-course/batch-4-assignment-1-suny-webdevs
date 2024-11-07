const removeDuplicates = (param: number[]): number[] => {
  return param.filter((number, index) => param.indexOf(number) === index)
}
