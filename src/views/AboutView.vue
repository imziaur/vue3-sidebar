<template>
  <main class="about">
    <h1>This is an about page</h1>
    <div class="counter">{{ $store.state.counter }}</div>
    <div class="buttons">
      <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.commit('increaseCounter')">+</button>
    </div>
  </main>
</template>
<script lang="ts">
export default {};
</script>
<style>
.buttons button {
  font-size: 40px;
  padding: 10px;
}
</style>
