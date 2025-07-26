class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._id = data.id;
    this._name = data.name;
    this._date = data.date;
    this._completed = data.completed;

    this._selector = selector;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  // --- Internal Utilities ---
  _getTemplate() {
    const template = document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
    return template;
  }

  _setEventListeners() {
    this._checkboxEl.addEventListener("change", () => {
      this._toggleCompletion();
      this._handleCheck(this._completed);
    });

    this._deleteBtnEl.addEventListener("click", () => {
      this._handleDelete(this._completed);
      this._remove();
    });
  }

  _toggleCompletion() {
    this._completed = !this._completed;
    this._todoElement.classList.toggle("todo_completed", this._completed);
  }

  _remove() {
    if (this._element) {
      this._element.remove();
      this._element = null;
    }
  }

  // --- Sub-element setup ---
  _populateName() {
    this._nameEl = this._todoElement.querySelector(".todo__name");
    this._nameEl.textContent = this._name;
  }

  _populateDate() {
    this._dateEl = this._todoElement.querySelector(".todo__date");
    const dueDate = new Date(this._date);
    if (!isNaN(dueDate)) {
      this._dateEl.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  _setupCheckbox() {
    this._checkboxEl = this._todoElement.querySelector(".todo__completed");
    this._labelEl = this._todoElement.querySelector(".todo__label");

    this._checkboxEl.checked = this._completed;
    this._checkboxEl.id = `todo-${this._id}`;
    this._labelEl.setAttribute("for", `todo-${this._id}`);
  }

  _setupDeleteButton() {
    this._deleteBtnEl = this._todoElement.querySelector(".todo__delete-btn");
  }

  // --- Public Method to get the DOM element ---
  getView() {
    this._element = this._getTemplate();
    this._todoElement = this._element;

    this._populateName();
    this._populateDate();
    this._setupCheckbox();
    this._setupDeleteButton();
    this._setEventListeners();

    this._todoElement.id = `todo-${this._id}`;
    this._todoElement.dataset.id = this._id;

    if (this._completed) {
      this._todoElement.classList.add("todo_completed");
    }

    return this._element;
  }
}

export default Todo;
