const todos = [
  { id: 1, content: "html", complete: false },
  { id: 2, content: "css", complete: true },
  { id: 3, content: "js", complete: false },
];

const $navList = document.querySelector(".nav--list");

$navList.innerHTML = todos
  .map((todo) => {
    return `
  <li>${todo.content}</li>
  `;
  })
  .join("");
