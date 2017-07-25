class Spacecraft {
  constructor (public propulsor : string) {}

  jumpIntoHyperspace() {
    console.log(`Entrando no hiper-espaço com ${this.propulsor}`)
  }
}

export {Spacecraft}
