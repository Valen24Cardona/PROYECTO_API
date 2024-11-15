
<template>
    <div class="filter">
        <div class="item" @click="filter('')">
            All
        </div>
        <div class="item" @click="filter('Human')">
            Human
        </div>
        <div class="item" @click="filter('Alien')">
            Alien
        </div>
    </div>
 
</template>
<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    const filter = ((specie) => {
      store.dispatch('filterBySpecie', specie)
    })

    return {
      filter
    }
  }
}
</script>


<style lang="scss">
.filter {
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 10px;
  overflow: hidden;
  .item {
    padding: 1rem 0.5rem;
    background-color: var(--background-card);
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(--text-orange);
    }
  }
}
</style>