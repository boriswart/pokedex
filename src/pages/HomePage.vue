<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <pokemon-component />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from '@vue/runtime-core'
import { pokemonsService } from '../services/PokemonsService'
import { AppState } from '../AppState'

export default {
  setup() {
    const state = reactive({})
    onMounted(() => pokemonsService.getPokemons())
    return {
      state,
      AppState: computed(() => AppState),
      pokemon: computed(() => AppState.pokemon)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
