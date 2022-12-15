<template>
  <div class="filters">
    <span v-for="filter in filters" :key="filter.value" @click="$emit('change-filter', filter.value)" class="filter"
      :class="{ active: selected == filter.value }">{{ filter.label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps(['selected'])

const filters = [
  { label: "全部", value: "all" },
  { label: "已完成", value: "done" },
  { label: "未完成", value: "todo" },
];

</script>

<style>
.filters {
  display: flex;
  margin: 24px 2px;
  color: var(--text_third_color);
  font-size: 14px;
  cursor: pointer;
  padding: 0 .8em;
}

.filters .filter {
  margin-right: 14px;
  transition: 0.2s;
}

.filters .filter.active {
  color: var(--text_main_color);
  font-weight: 500;
}
</style>