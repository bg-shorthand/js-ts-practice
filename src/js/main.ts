type Todo = { id: number; content: string; completed: boolean };

let todos: Todo[] = [];

const $todosTodo = document.querySelector(".todos--todo");

const todosRender = () => {
  $todosTodo &&
    ($todosTodo.innerHTML = todos
      .map((todo) => {
        return `
        <li id=${todo.id}>
          <input type="checkbox" ${todo.completed ? "checked" : ""}>
          <span>${todo.content}</span>
          <button>DEL</button>
        </li>
      `;
      })
      .join(""));
};

const getTodos = async () => {
  const json = await fetch("http://localhost:3000/todos");
  return json;
};

document.addEventListener("DOMContentLoaded", async () => {
  todos = await (await getTodos()).json();
  todosRender();
});
