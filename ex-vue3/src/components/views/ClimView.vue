<template>
  <div>
    <h2><span class="text-a">Clim</span></h2>
    <input v-model="prefix" placeholder="Filter prefix" />

    <select size="5" v-model="selected">
      <option v-for="name in filteredNames" :key="name">
        {{ name }}
      </option>
    </select>

    <label>Name: <input v-model="first" /></label>
    <label>Surname: <input v-model="last" /></label>
    <a class="buttons">
      <button @click="create">Create</button>
      <button @click="update">Update</button>
      <button @click="del">Delete</button>
    </a>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
// 외부로 데이터를 보낼 때 export 쓴다. script setup은 내부에서만 사용한다.
const names = reactive(['Emil,Hans', 'Mustermann, Max', 'Tisch, Roman'])
const selected = ref('')
const prefix = ref('')
const first = ref('')
const last = ref('')

const filteredNames = computed(() =>
  names.filter((n) => n.toLowerCase().startsWith(prefix.value.toLowerCase()))
)

watch(selected, (name) => {
  ;[last.value, first.value] = name.split(',')
})

function create() {
  if (hasValidInput()) {
    const fullName = `${last.value}, ${first.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      first.value = last.value = ''
    }
  }
}

function update() {
  if (hasValidInput() && selected.value) {
    const i = names.indexOf(selected.value)
    names[i] = selected.value = `${last.value}, ${first.value}`
  }
}

function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value)
    names.splice(i, 1)
    selected.value = first.value = last.value = ''
  }
}

function hasValidInput() {
  return first.value.trim() && last.value.trim()
}
</script>

<style lang="scss" scoped>
input {
  display: block;
  margin-bottom: 60px;
}

select {
  float: left;
  margin: 0 1em 1em 0;
  width: 14em;
}

.buttons {
  float: left;
  clear: both;
}

button + button {
  margin-left: 5px;
}
</style>
