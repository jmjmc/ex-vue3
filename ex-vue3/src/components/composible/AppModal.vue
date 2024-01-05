<template>
  <div v-if="show">
    <div>
      <!-- Button trigger modal -->
      <!--button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        글쓰기(store)
      </!--button-->
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <!--slot 확장기능-->
              <slot name="header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </slot>
            </div>
            <div class="modal-body">...</div>
            <!--내용 default slot 정함-->
            <slot></slot>
            <div class="modal-footer">
              <slot name="actions">
                <!--slot은 외부에서 변경할 수 있음-->
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="$emit('close')"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  title: String
})
defineEmits(['close'])
</script>

<style lang="scss" scoped></style>
