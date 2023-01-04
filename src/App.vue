<template>
  <main>
    <div class="container">
      <h2>欢迎使用待办事项！</h2>
      <todo-add :tid="todos.length" @add-todo="todos.push($event)" />

      <todo-filter :selected="filter" @change-filter="filter = $event" />
      <todo-list :todos="filteredTodos" />
    </div>
  </main>
</template>

<script setup lang="ts">
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";

import useTodos from './composables/useTodos';
import useFilteredTodos from "./composables/useFilteredTodos";

const todos = useTodos();
const { filter, filteredTodos } = useFilteredTodos(todos);
</script>

<style>
:root {
  --bg_color: #444349;
  --text_main_color: #cda632;
  --text_secondary_color: #c4bbbe;
  --text_third_color: #626262;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 0;
  display: grid;
  align-items: start;
  justify-items: center;
  background: var(--bg_color);
  color: var(--text_secondary_color);
}

.container {
  width: 60%;
  max-width: 400px;
  padding: 48px 28px;
  border-radius: 37px;
  background: linear-gradient(315deg, #49484e, #3d3c42);
  box-shadow: -23px -23px 46px #39383d,
    23px 23px 46px #4f4e55;

}

h2 {
  margin: 1.4rem 0;
}
</style>