import { LightningElement } from "lwc";

export default class SimpleCalculator extends LightningElement {
  result;
  previousResults = [];
  showPreviousResult = false;

  firstNumber;
  secondNumber;

  numberChangeHandler(event) {
    const inputBoxName = event.target.name;
    if (inputBoxName === "firstNumber") {
      this.firstNumber = event.target.value;
    } else if (inputBoxName === "secondNumber") {
      this.secondNumber = event.target.value;
    }
  }

  addHandler() {
    const firstNumb = parseInt(this.firstNumber);
    const secondNumb = parseInt(this.secondNumber);

    //this.result = 'Result of '+firstNumb+ '+'+secondNumb+ ' is '+(firstNumb+secondNumb);
    this.result = `Result of ${firstNumb}+${secondNumb} is ${
      firstNumb + secondNumb
    }`;
    this.previousResults.push(this.result);
  }

  divHandler() {
    const firstNumb = parseInt(this.firstNumber);
    const secondNumb = parseInt(this.secondNumber);

    //this.result = 'Result of '+firstNumb+ '+'+secondNumb+ ' is '+(firstNumb+secondNumb);
    this.result = `Result of ${firstNumb}/${secondNumb} is ${
      firstNumb / secondNumb
    }`;
    this.previousResults.push(this.result);
  }

  subHandler() {
    const firstNumb = parseInt(this.firstNumber);
    const secondNumb = parseInt(this.secondNumber);

    //this.result = 'Result of '+firstNumb+ '+'+secondNumb+ ' is '+(firstNumb+secondNumb);
    this.result = `Result of ${firstNumb}-${secondNumb} is ${
      firstNumb - secondNumb
    }`;
    this.previousResults.push(this.result);
  }

  mulHandler() {
    const firstNumb = parseInt(this.firstNumber);
    const secondNumb = parseInt(this.secondNumber);

    //this.result = 'Result of '+firstNumb+ '+'+secondNumb+ ' is '+(firstNumb+secondNumb);
    this.result = `Result of ${firstNumb}*${secondNumb} is ${
      firstNumb * secondNumb
    }`;
    this.previousResults.push(this.result);
  }

  previousResultCheckbox(event) {
    this.showPreviousResult = event.target.checked;
  }
}
