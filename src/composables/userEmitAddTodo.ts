import { ref } from "vue";

export default function useEmitAddTodo(tid: object, emit: any)
{
  const todoContent = ref("");
  const emitAddTodo = () =>
  {
    if (todoContent.value != null && todoContent.value.length >= 1)
    {
      const todo = {
        id: tid,
        content: todoContent.value,
        completed: false,
      };
      emit("add-todo", todo);

      todoContent.value = "";
    } else
    {
      alert("提交值不能为空")
    }
  };

  return {
    todoContent,
    emitAddTodo,
  };
}

