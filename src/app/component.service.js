class ComponentService{
  constructor(){
    this.input1 = document.getElementById('no1');
    this.input2 = document.getElementById('no2');
    this.addButton = document.getElementById('addBtn');
    this.output =  document.getElementById('output');
  }

  getInput (){
    return [this.input1.value, this.input2.value]
  }

  setResult (str) {
    this.output.value = str;
  }

  onClick (cb){
   this.addButton.addEventListener("click", cb);
  }

}
export default ComponentService;
