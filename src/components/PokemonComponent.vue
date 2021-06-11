<template>
  <div class="d-flex col-12">
    <div class="col-md-4 text-left jusify-content-left">
      <div v-for="(pokemon,i) in
             pokemons"
           :key="i"
      >
        <ul>
          <ui>
            <span @click="getPokemonDetails(pokemon.name)"> {{ pokemon.name }}</span><ul>
              <ui>
              </ui>
            </ul>
          </ui>
        </ul>
      </div>
    </div>
    <div v-if="AppState.activePokemon.name" class="col-md-4 border text-center">
      <h1>
        {{ AppState.activePokemon.name }}
      </h1>
      <img v-if="AppState.activePokemon.img" :src="AppState.activePokemon.img" />
      <span><h4><p>Species: {{ AppState.activePokemon.species.name }} </p></h4></span>
      <span><h4><p>Type: {{ AppState.activePokemon.type.type.name }} </p></h4></span>
      <span><h5><p>Slot: {{ AppState.activePokemon.type.slot }} </p></h5></span>
      <div class="d-flex space-around">
        <span><h4><p>Weight:  {{ AppState.activePokemon.weight }}</p></h4></span>
        <span><h4><p>Height:  {{ AppState.activePokemon.height }} </p> </h4>  </span>
      </div>
      <button class="btn btn-primary">
        CatchHim
      </button>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { pokemonsService } from '../services/PokemonsService'

export default {
  setup() {
    const state = reactive({})
    return {
      state,
      AppState: computed(() => AppState),
      pokemons: computed(() => AppState.pokemons),
      activePokemon: computed(() => AppState.activePokemon),
      async getPokemonDetails(name) {
        await pokemonsService.getPokemonDetails(name)
      }
    }
  }
}
</script>
<style>
.space-around{
  justify-content: space-around
}
</style>
