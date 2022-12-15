<template>
  <div class="todo-item" :class="{ done: todoItem.completed }">
    <label>
      <input type="checkbox" :checked="todoItem.completed" @click="$emit('change-state', $event)" />
      {{ todoItem.content }}
      <span class="check-button"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps(["todoItem"]);
</script>

<style>
.todo-item {
  padding: 8px 16px;
  color: var(--text_secondary_color);
}

.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.todo-item.done label {
  text-decoration: line-through;
  font-style: italic;
  color: var(--text_third_color);
}

.todo-item label span.check-button {
  position: absolute;
  top: 0;
}

.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.todo-item label span.check-button::before {
  border: 1px solid var(--text_main_color);
}

.todo-item label span.check-button::after {
  transition: 0.4s;
  background: var(--text_main_color);
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}

.todo-item input {
  margin-right: 16px;
  opacity: 0;
}

.todo-item input:checked+span.check-button::after {
  opacity: 1;
}
</style>