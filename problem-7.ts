const currentYear: number = new Date().getFullYear()
class Car {
  constructor(public make: string, public model: string, public year: number) {}
  getCarAge(): string {
    return `${
      currentYear - this.year
    } (assuming current year is ${currentYear})`
  }
}
