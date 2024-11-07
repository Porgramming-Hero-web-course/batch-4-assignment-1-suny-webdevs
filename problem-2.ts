const removeDuplicates = (numbers: number[]): number[] => {
  const result: number[] = []
  numbers.map((num) => {
    if (!result.includes(num)) {
      result.push(num)
    }
  })
  return result
}
