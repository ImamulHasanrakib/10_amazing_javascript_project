function convertToBinary(num) {
    return num.toString(2);
  }
  
  function convertToDecimal(num) {
    return parseInt(num, 10);
  }
  
  function convertToHexadecimal(num) {
    return num.toString(16).toUpperCase();
  }
  
  function performOperation(num1, num2, operation) {
    if (operation === "addition") {
      return num1 + num2;
    } else if(operation === "multiply") {
      return num1 * num2;
    }else if(operation === "division"){
      return  num1 / num2;
    }else{
        return num1 - num2;
    }
  }
  
  function calculate() {
    var numSystem = document.getElementById("num-system").value;
    var numInputs = parseInt(document.getElementById("num-inputs").value);
    var operation = document.getElementById("operation").value;
    var inputs = [];
  
    for (var i = 1; i <= numInputs; i++) {
      var inputId = "input" + i;
      var inputValue = document.getElementById(inputId).value;
      console.log(inputValue);
      if(inputValue === "" || inputValue === null){
         return  alert("Please Enter Two Number");
      }
  
      if (numSystem === "binary") {
        inputValue = parseInt(inputValue, 2);
      } else if (numSystem === "hexadecimal") {
        inputValue = parseInt(inputValue, 16);
      }else{
        inputValue = parseInt(inputValue , 10)
      }
  
      inputs.push(inputValue);
    }
  
    var result = inputs.reduce(function(acc, curr) {
        return performOperation(acc, curr, operation);
        });
  
        if (numSystem === "binary") {
            result = convertToBinary(result);
            } else if (numSystem === "hexadecimal") {
            result = convertToHexadecimal(result);
            }
            
            document.getElementById("result").innerHTML = "Result: " + result;

            }
            
            var numInputs = document.getElementById("num-inputs");
            numInputs.addEventListener("input", inputController);
            
            var calculateButton = document.getElementById("calculate");
            calculateButton.addEventListener("click", calculate);

            
        function inputController(){
            document.getElementById("result").innerHTML = "";
            var numInputsValue = parseInt(numInputs.value);
            var inputsContainer = document.getElementById("inputs-container");
            var inputsHTML = "";
            
            for (var i = 1; i <= numInputsValue; i++) {
            var inputId = "input" + i;
            inputsHTML += '<input type="text" id="' + inputId + '" placeholder="Number ' + i + '"><br>';
            }
            
            inputsContainer.innerHTML = inputsHTML;
        }
        inputController();