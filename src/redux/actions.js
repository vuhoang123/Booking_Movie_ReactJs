export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searcFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const prioritiesFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payloaf: todoId,
  };
};
