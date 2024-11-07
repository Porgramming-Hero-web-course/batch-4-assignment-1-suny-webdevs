type Circle = {
  shape: string
  radius: number
}
type Rectangle = {
  shape: string
  width: number
  height: number
}

type Shape = Circle | Rectangle

const isCircle = (param: Shape): param is Circle => {
  return param.shape === "circle"
}

const isRectangle = (param: Shape): param is Rectangle => {
  return param.shape === "rectangle"
}

const calculateShapeArea = (param: Shape): number => {
  if (isCircle(param)) {
    return parseFloat((Math.PI * param.radius ** 2).toFixed(2))
  } else if (isRectangle(param)) {
    return param.width * param.height
  } else {
    return 0
  }
}
