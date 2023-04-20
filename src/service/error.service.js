import { validateinput } from "../utils/validate-input";

export class ErrorService {
  constructor() {
    this.errorBox = document.getElementById("error");
  }

  hindError() {
    this.errorBox.classList.add("invisible");
  }

  //Show error
  showError() {
    this.errorBox.classList.remove("invisible");
  }

  //Custom-Message
  showErrorMessage(inputs, numbers) {
    const fullErrorMsg = inputs.reduce((msg, str, index) => {
      if (validateinput(numbers[index])) {
        msg += "";
      } else {
        msg += `${str} is not number.`;
      }

      return msg;
    }, "");

    /// Show
    this.errorBox.innerText = fullErrorMsg;
    this.showError();
  }
}
