<template>
  <div>
    <h2><span class="text-a">AboutView</span></h2>
    <h2>Store</h2>
    <p>counter : {{  store.counter }}</p>
    <p>doubleCount : {{ store.doubleCount }}</p>
    <button @click="store.increment()">click!</button>


  </div>
</template>

<script setup>
import { useCounterStore } from '@/components/stores/counter';
const store = useCounterStore();
</script>

<style lang="scss" scoped>
button {
  width:50px;
  height: 50px;
}
</style>
