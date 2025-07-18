import { updateCounter } from "../pages/index.js";

class Todo {
    constructor(data, selector) {
        this._data = data;
        this._templateElement = document.querySelector(selector);
    }

    _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {  
    this._data.completed = !this._data.completed;
    updateCounter();
});

    this._todoDeleteBtnEl.addEventListener("click", () => {
    this._todoElement.remove();
    updateCounter();
  });
    }

  _generateCheckboxEl() {
  this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
  this._todoLabel = this._todoElement.querySelector(".todo__label");
  this._todoCheckboxEl.checked = this._data.completed;
  this._todoCheckboxEl.id = `todo-${this._data.id}`;
  this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  this._todoDeleteBtnEl = this._todoElement.querySelector(".todo__delete-btn");

  }

    getView() {
    this._todoElement = this._templateElement.content
    .querySelector(".todo")
    .cloneNode(true);


  const todoNameEl = this._todoElement.querySelector(".todo__name");
  const todoDate = this._todoElement.querySelector(".todo__date");
  const dueDate = new Date(this._data.date);

todoNameEl.textContent = this._data.name;

 if (!isNaN(dueDate)) {
    todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`;
  } else {
    todoDate.textContent = "No due date set";
  }  
this._generateCheckboxEl();
this._setEventListeners();


  return this._todoElement;
    }
}

export default Todo;