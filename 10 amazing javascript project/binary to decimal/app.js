function convert() {
    const numberInput = document.getElementById("number-input").value;
    const conversionType = document.getElementById("conversion-type").value;
    let result;
  
    switch (conversionType) {
      case "binary-to-decimal":
        result = parseInt(numberInput, 2);
        break;
      case "decimal-to-binary":
        result = Number(numberInput).toString(2);
        break;
      case "binary-to-hex":
        const decimalEquivalent = parseInt(numberInput, 2);
        result = decimalEquivalent.toString(16).toUpperCase();
        break;
      case "hex-to-binary":
        const decimalEquivalent2 = parseInt(numberInput, 16);
        result = decimalEquivalent2.toString(2);
        break;
      case "decimal-to-hex":
        result = Number(numberInput).toString(16).toUpperCase();
        break;
      case "hex-to-decimal":
        result = parseInt(numberInput, 16);
        break;
      default:
        result = "Invalid Conversion Type";
        break;
    }
  
    document.getElementById("output").innerHTML = `Result: ${result}`;
  }
  