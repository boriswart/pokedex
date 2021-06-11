// import { AppState } from '../AppState'
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService'
import Pokemon from '../Models/Pokemon'

const url = 'https://pokeapi.co/api/v2/'

class PokemonsService {
  async getPokemons() {
    const res = await api.get(url + 'pokemon/')
    // logger.log(res.data)
    AppState.pokemons = res.data.results.map(p => p)
  }

  async getPokemonDetails(name) {
    const res = await api.get(url + 'pokemon/' + name)
    logger.log(res)
    AppState.activePokemon = res.data.results
    AppState.activePokemon = new Pokemon(res.data)
    logger.log('Pokemon in model: ', AppState.activePokemon)
  }

  catchPokemon() {
    AppState.myPokemons.push(AppState.activePokemon)
  }
}

export const pokemonsService = new PokemonsService()
