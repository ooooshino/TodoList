<template>
  <div class="input-add">
    <input type="text" v-model="todoContent" @keyup.enter="emitAddTodo" />
    <button @click="emitAddTodo">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import useEmitAddTodo from '../composables/userEmitAddTodo';

const emit = defineEmits(['add-todo'])
const tid = defineProps(['tid'])

const { todoContent, emitAddTodo } = useEmitAddTodo(tid, emit);

</script>

<style>
/* 添加框 */
.input-add {
  position: relative;
  overflow: hidden;
}

.input-add input {
  padding: 16px 52px 16px 18px;
  border: none;
  outline: none;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--text_main_color);
  position: relative;
}

.input-add button {
  width: 46px;
  height: 46px;
  border-radius: 5%;
  background: var(--text_secondary_color);
  border: none;
  position: absolute;
  right: 1px;
  cursor: pointer;
  outline: none;
}

.input-add button:hover {
  transition-duration: .3s;
  background: var(--text_main_color);
}

.input-add .plus {
  display: inline-block;
  color: #000;
  width: 16px;
  height: 10px;
  position: relative;
  border-bottom: solid 2px currentColor;
  border-left: solid 2px currentColor;
  transform: rotate(-45deg);
}
</style>