import {isInputValid} from './utils/input-valid.js';

class AlertServices {
  constructor(){
    this.errorBox = document.getElementById('error');
  }

  hideErrors() {
    this.errorBox.classList.add("invisible");
  }

  handleError(input, parsedInput){
    const errorMessage = input.reduce((accumalator, currentVal, index)=>{
      if(isInputValid(parsedInput[index])){
        return accumalator ;
      } else {
        return accumalator + ` ${currentVal} is not a number. `
      }
    },'Please enter two valid No.')
    this.errorBox.innerText = errorMessage;
    this.errorBox.classList.remove("invisible");
  }
}
export default AlertServices;
