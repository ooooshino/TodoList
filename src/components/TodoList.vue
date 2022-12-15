<template>
  <div class="todo-list">
    <todo-list-item v-for="todo in todos" :key="todo.id" @change-state="todo.completed = $event.target.checked"
      :todo-item="todo"></todo-list-item>
  </div>
</template>

<script setup lang="ts">
import TodoListItem from './TodoListItem.vue';
const { todos } = defineProps(["todos"])
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
  max-height: 360px;
  overflow-y: scroll;
}

.todo-list::-webkit-scrollbar {
  width: 4px;
  background-color: transparent;
}

.todo-list::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

.todo-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--text_main_color);
}
</style>