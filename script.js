
      let firstNumber = 0;
      let lastNumber = "";
      let lastOperator = "";
      let lastClick = "";
      let decimal = false;
      let negativeNumber = false;

      function updateDisplay(input) {
        let display = document.getElementById('display');
        
        // Disallow multiple zeros in front of the number.
        // Disallow starting with symbols that can produce NaN errors.
        if (display.innerHTML == 0) {
            if (input != 'x' && input != '/' && input != '=')
              display.innerHTML = input;
            return
          }

        if (input == '+') {
            // Disallow this operator to immediately repeat itself
            if (lastClick == "operator" && lastOperator == '+') {
                return
              }
            // If it is a valid second operator, first get the running total and then add the operator
            if (lastOperator != "" && lastClick == "number") {
                lastNumber = parseFloat(lastNumber);
                if (negativeNumber == true) {
                  lastNumber = 0 - lastNumber;
                  }
                if (lastOperator == '+') {
                  firstNumber += lastNumber;
                  }
                if (lastOperator == '-') {
                  firstNumber -= lastNumber;
                  }
                if (lastOperator == 'x') {
                  firstNumber = firstNumber*lastNumber;
                  }
                if (lastOperator == '/') {
                  firstNumber = firstNumber/lastNumber;
                  }
                negativeNumber = false;
            // Otherwise, save number and add operator
            } else { 
                  firstNumber = parseFloat(display.innerHTML);
                }
            display.innerHTML = firstNumber + input;
            lastNumber ="";
            lastOperator = '+';
            lastClick = "operator";
            decimal = false;
            negativeNumber = false;
            return
          }

        if (input == '-') {
            // Do not allow this operator to be doubly repeated
            if (lastClick == "operator" && negativeNumber == true) {
              return
            }
            // If it is acting as a negative number sign: 
            // If the previous operator was '+' or '-' simply overwrite with '-'
            if (lastClick == "operator" && (lastOperator == '+' || lastOperator == '-')) {
              display.innerHTML = firstNumber + input;
              lastOperator = '-';
              lastClick = "operator";
              decimal = false;
              return             
            }         
           // Otherwise, leave the minus sign on the display      
            if (lastClick == "operator" && (lastOperator == 'x' || lastOperator == '/')) {
                negativeNumber = true;
                display.innerHTML += input;
                lastClick = "minus sign";
                decimal = false;
                return
              }
            // But, if it is a valid second operator, first get the running total and then add the operator
            if (lastOperator != "" && lastClick == "number") {
                lastNumber = parseFloat(lastNumber);
                if (negativeNumber == true) {
                  lastNumber = 0 - lastNumber;
                  }
                if (lastOperator == '+') {
                  firstNumber += lastNumber;
                  }
                if (lastOperator == '-') {
                  firstNumber -= lastNumber;
                  }
                if (lastOperator == 'x') {
                  firstNumber = firstNumber*lastNumber;
                  }
                if (lastOperator == '/') {
                  firstNumber = firstNumber/lastNumber;
                  }
                negativeNumber = false;
            // If it is not a negative number sign, save number and add operator
            } else { 
                  firstNumber = parseFloat(display.innerHTML);
                }
            display.innerHTML = firstNumber + input;
            lastNumber ="";
            lastOperator = '-';
            lastClick = "operator";
            decimal = false;
            return
          }
        if (input == 'x') {
            // Do not allow this operator to immediately repeat itself
            if (lastClick == "operator" && lastOperator == 'x') {
                return
              }
            // If it is a valid second operator, first get the running total and then add the operator
            if (lastOperator != "" && lastClick == "number") {
                lastNumber = parseFloat(lastNumber);
                if (negativeNumber == true) {
                  lastNumber = 0 - lastNumber;
                  }
                if (lastOperator == '+') {
                  firstNumber += lastNumber;
                  }
                if (lastOperator == '-') {
                  firstNumber -= lastNumber;
                  }
                if (lastOperator == 'x') {
                  firstNumber = firstNumber*lastNumber;
                  }
                if (lastOperator == '/') {
                  firstNumber = firstNumber/lastNumber;
                  }
                negativeNumber = false;
            // Otherwise, save number and add operator
            } else { 
                  firstNumber = parseFloat(display.innerHTML);
                }
            display.innerHTML = firstNumber + input;
            lastNumber ="";
            lastOperator = 'x';
            lastClick = "operator";
            decimal = false;
            negativeNumber = false;
            return
          }

        if (input == '/') {
            // Do not allow this operator to immediately repeat itself
            if (lastClick == "operator" && lastOperator == '/') {
                return
              }
            // If it is a valid second operator, first get the running total and then add the operator
            if (lastOperator != "" && lastClick == "number") {
                lastNumber = parseFloat(lastNumber);
                if (negativeNumber == true) {
                  lastNumber = 0 - lastNumber;
                  }
                if (lastOperator == '+') {
                  firstNumber += lastNumber;
                  }
                if (lastOperator == '-') {
                  firstNumber -= lastNumber;
                  }
                if (lastOperator == 'x') {
                  firstNumber = firstNumber*lastNumber;
                  }
                if (lastOperator == '/') {
                  firstNumber = firstNumber/lastNumber;
                  }
                negativeNumber = false;
            // Otherwise, save number and add operator
            } else { 
                  firstNumber = parseFloat(display.innerHTML);
                }
            display.innerHTML = firstNumber + input;
            lastNumber ="";
            lastOperator = '/';
            lastClick = "operator";
            decimal = false;
            negativeNumber = false;
            return
          }

        if (input == '=') {
            lastNumber = parseFloat(lastNumber);
            if (negativeNumber == true) {
              lastNumber = 0 - lastNumber;
              }
            if (lastOperator == '+') {
              firstNumber += lastNumber;
              }
            if (lastOperator == '-') {
              firstNumber -= lastNumber;
              }
            if (lastOperator == 'x') {
              firstNumber = firstNumber*lastNumber;
              }
            if (lastOperator == '/') {
              firstNumber = firstNumber/lastNumber;
              }
            display.innerHTML = firstNumber;
            lastNumber = "";
            lastOperator = "";
            lastClick = "=";
            decimal = false;
            negativeNumber = false;
            return

        // If not an operator or '=' add input number.
        } else {
            // Avoid double decimal points.
            if (decimal == true && input == '.') {
                return
              }
            // Clear display before starting with new number.
            if (lastClick == "=" ) {
              display.innerHTML = "";
            }
            display.innerHTML += input;
            lastNumber += input;
            lastClick = "number";
            if (input == '.') {
                decimal = true;
                }
              return
          }
      }

      function clearDisplay() {
        let display = document.getElementById('display');
        display.innerHTML = 0
        firstNumber = 0;
        lastNumber = "";
        lastOperator = "";
        lastClick = "";
        decimal = false;
        negativeNumber = false;
      }
