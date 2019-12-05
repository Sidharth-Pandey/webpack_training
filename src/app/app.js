import {isInputValid} from './utils/input-valid.js';
import {parseInput} from './utils/parse-input.js';



export const run = (componentService, alertServices) =>{
alertServices.hideErrors();
componentService.onClick(()=>{
  const inputs = componentService.getInput();
  const parsedInput = parseInput(...inputs);
  if(isInputValid(...parsedInput)){
      componentService.setResult(parsedInput.reduce((a,b)=>a+b))
  } else {
    alertServices.handleError(inputs,parsedInput)
  }
  })
}
