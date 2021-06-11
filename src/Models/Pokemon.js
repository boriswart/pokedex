
export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
    this.type = data.types[0]
    this.species = data.species
    this.img = data.sprites.front_default
    // this.officialArt = data.official-artwork.front_default
  }
}
