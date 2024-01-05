<template>
  <div>
    <h2><span class="text-a">Clim 작성</span></h2>
    <div class="input-group mb-1">
      <span class="input-group-text">검색</span>
      <input
        type="text"
        class="form-control"
        aria-label="Dollar amount (with dot and two decimal places)"
        v-model="prefix"
        placeholder="Filter prefix"
      />
    </div>

    <select
      class="form-select"
      multiple
      aria-label="Multiple select example"
      size="5"
      v-model="selected"
    >
      <option v-for="name in filteredNames" :key="name">
        {{ name }}
      </option>
    </select>

    <a class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">작성자</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="first"
        placeholder="name@example.com"
      />
    </a>
    <a class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">내용</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        v-model="last"
        rows="3"
      ></textarea>
    </a>

    <a class="buttons">
      <button type="button" class="btn btn-primary" @click="create">입력</button>
      <button type="button" class="btn btn-primary" @click="update">수정</button>
      <button type="button" class="btn btn-primary" @click="del">삭제</button>
    </a>
    <!-- <a class="storebuttons">
      <button type="button" class="btn btn-success">글쓰기(store)</button>
    </a> -->
  </div>
</template>

<!-- 외부로 데이터를 보낼 때 export 쓴다. script setup은 내부에서만 사용한다.-->
<script setup>
// ref, reactive, computed, watch 는 Vue 의 리액티브 시스템을 활용하여 데이터를 다루고 반응형으로 처리할 수 있도록 도와주는 기능이다.
// ref : 단일 값 래퍼(wrapper) 이다. 기본 타입의 변수나 객체를 감싸 반응형으로 만들어 준다. (.value 를 통해 실제 값을 접근한다.)
// reactive : 객체 내의 모든 속성이 반응형으로 추적되어 변화할 때마다 업데이트가 된다.
// computed : 종속성을 가진 계산된 값을 정의할 때 사용한다. 의존하는 값이 변경될 때마다 자동으로 다시 계산된다.
// watch : 데이터 변경을 감지하고 그에 대응하는 작업을 수행할 수 있게 해준다.

import { ref, reactive, computed, watch } from 'vue'

const names = reactive(['Emil, 회원관리', 'Mustermann, 주문관리', 'Tisch, 배송관리'])
const selected = ref([]) // bootstrap 의 형태가 리스트 모양이기때문
const prefix = ref('')
const first = ref('')
const last = ref('')

//첫 번재 단어로 검색하기
const filteredNames = computed(() =>
  names.filter((n) => n.toLowerCase().startsWith(prefix.value.toLowerCase()))
)

watch(selected, (selectedValues) => {
  if (selectedValues.length === 1) {
    const [firstName, lastName] = selectedValues[0].split(',')
    first.value = firstName.trim()
    last.value = lastName.trim()
  } else {
    first.value = last.value = ''
  }
})

// 입력
function create() {
  if (hasValidInput()) {
    const fullName = `${first.value}, ${last.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      first.value = last.value = ''
    }
  }
}

// 수정
function update() {
  if (hasValidInput() && selected.value.length === 1) {
    const index = names.indexOf(selected.value[0])
    if (index !== -1) {
      names[index] = `${first.value}, ${last.value}`
      // 선택된 값과 first, last 초기화
      selected.value = []
      first.value = last.value = ''
    }
  }
}

// 삭제
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

.storebuttons {
  float: right;
}
.form-label {
  width: 600px;
}
.form-select {
  width: 600px;
}
.form-control {
  width: 600px;
}
</style>
