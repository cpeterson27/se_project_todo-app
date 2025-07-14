class FormValidator {
constructor(settings, formEl) {
this._inputSelector = settings.inputSelector;
this._formselector = settings.formSelector;
this._submitButtonSelector = settings.submitButtonSelector;
this._errorClass = settings.errorClass;
this._inputErrorClass = settings.inputErrorClass;
this._inactiveButtonClass = settings.inactiveButtonClass;
this._formEl = formEl;
this._settings = settings;
    }

    resetValidation() {
      this._formEl.reset();
  this._inputList.forEach(() => {
    this._hideInputError(this._formEl, inputElement, this._settings);
  });

  this._toggleButtonState(this._inputList, buttonElement);
}

    _toggleButtonState() {
      constructor(inputList, buttonElement) 
  if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.disabled = false;
  }
    }
 
    _hideInputError(inputElement) { 
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = formElement.querySelector(errorElementId);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = "";
    }
    _showInputError(inputElement, errorMessage) {
  const errorElementId = `#${inputElement.id}-error`;
  const errorElement = formElement.querySelector(errorElementId);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
    }
  _hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
    }

    _checkInputValidity() {
  if (!inputElement.validity.valid) {
    this._showInputError(
        this._formEl,
        inputElement,
        inputElement.validationMessage,
        this._settings,
    );
  } else {
    this._hideInputError(this._formEl, this._settings);
  }
    }

    _setEventListeners(){
        this._inputList = Array.from(
    this._formEl.querySelectorAll(this._inputSelector),
  );
    this._buttonElement = this._formEl.querySelector(
    this._submitButtonSelector,
  );

  this._toggleButtonState(this._inputList, buttonElement);

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState(this._inputList, buttonElement);
    });
  });
    }

enableValidation() {
  this._formEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this.resetValidation();
  });
  this._setEventListeners();
}
}

export default FormValidator;