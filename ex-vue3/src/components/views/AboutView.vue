<template>
  <div>
    <h2><span class="text-a">AboutView</span></h2>
    <h2>Store</h2>
    <p>counter : {{ store.counter }}</p>
    <p>doubleCount : {{ store.doubleCount }}</p>
    <button @click="store.increment()">click!</button>

    <AppTable @modal="openModal()"></AppTable>
    <AppModal :showModal="showModal" title="게시글" @close="closeModal"></AppModal>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/components/stores/counter'
import AppTable from '@/components/composible/AppTable.vue'
import AppModal from '@/components/composible/AppModal.vue'

import { ref } from 'vue'

const store = useCounterStore()

// modal 선언 부분
// 반응형 데이터(변수) 선언
const showModal = ref(false)
// 메서드 선언
const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<style lang="scss" scoped>
button {
  width: 50px;
  height: 50px;
}
</style>
