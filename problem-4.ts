type Circle = {
  shape: string
  radius: number
}
type Rectangle = {
  shape: string
  width: number
  height: number
}

const calculateShapeArea = (param: Circle | Rectangle): number => {
  if ("radius" in param) {
    return parseFloat((Math.PI * param.radius ** 2).toFixed(2))
  } else if ("width" in param) {
    return param.width * param.height
  } else {
    return 0
  }
}
