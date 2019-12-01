const input1 = document.getElementById('no1');
const input2 = document.getElementById('no2');
const errorBox = document.getElementById('error');
const addButton = document.getElementById('addBtn');
const outPut =  document.getElementById('output');


const hideErrors = ()=> {
  errorBox.classList.add("invisible");
};
hideErrors();

const parseInput =(...input)=>{
  return input.map((val)=> parseInt(val));
};

const isInputValid = (...input)=>{
  return input.every(num => typeof num === "number" && !isNaN(num));
};

const handleError = (input, parsedInput)=>{
  const errorMessage = input.reduce((accumalator, currentVal, index)=>{
    if(isInputValid(parsedInput[index])){
      return accumalator ;
    } else {
      return accumalator + ` ${currentVal} is not a number`
    }
  },'Please enter two valid No.')
  errorBox.innerText = errorMessage;
  errorBox.classList.remove("invisible");

};

addButton.addEventListener('click',()=>{
  hideErrors();
  let allInput = [input1.value, input2.value];
  let parsedInput = parseInput(...allInput);
  if(isInputValid(...parsedInput)){
      outPut.value = parsedInput.reduce((a,b)=>a+b);
  } else {
    handleError(allInput,parsedInput)
  }


})
