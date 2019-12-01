const alertServices = new AlertServices();
const componentService = new ComponentService();

const run = (componentService, alertServices) =>{
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
run(componentService, alertServices);
