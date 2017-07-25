import {Spacecraft} from './base-ships'

export class MillenniumFalcon extends Spacecraft {
  constructor() {
    super('hyperdrive')
  }

  jumpIntoHyperspace() {
    if (Math.random() > 0.5) {
      super.jumpIntoHyperspace()
    } else {
      console.log('FAIL');
    }
  }
}
