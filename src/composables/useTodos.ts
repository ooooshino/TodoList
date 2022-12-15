import { ref } from "vue";

export default function useTodos()
{
  // 通过fetch或者Axios获取数据,这里只是模拟
  const todos = ref([
    {
      id: 1,
      content: "测试待办事项1",
      completed: true,
    },
    {
      id: 2,
      content: "测试待办事项2",
      completed: false,
    },
    {
      id: 3,
      content: "测试待办事项3",
      completed: false,
    },
    {
      id: 4,
      content: "测试待办事项4",
      completed: true,
    },
    {
      id: 5,
      content: "测试待办事项5",
      completed: false,
    },
  ]);
  return todos;
}
