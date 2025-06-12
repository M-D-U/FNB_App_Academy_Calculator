var newLine = true;// determines if the next thing the user adds should be on a new line 
        var value1;
        var currentOperator;

        //event hander for when any of the buttons are pressed
        function digitBtnPressed(button) {
            if(newLine){
                document.getElementById("inputBox").value = button; 
                newLine = false;
            }else{
                var currentValue = document.getElementById("inputBox").value;
                document.getElementById("inputBox").value = currentValue + button;
            }
        }

        // clear the input box and resets the value to zero 
        function btnACPressed(){
            document.getElementById("inputBox").value = 0;
            newLine = true;
        }

        //function for the operators on the calculator
        function operatorBtnPressed(operator){
            currentOperator = operator;
            value1 = parseInt(document.getElementById("inputBox").value);
            newLine = true;
        }

        //evnet handler for the equals to button
        function equalsBtnPressed(){
            var value2 = parseInt(document.getElementById("inputBox").value);
            var finalTotal;

            // addition function operator
            switch (currentOperator) {
                case "+":
                    finalTotal = value1 + value2;
            }
            // subtract function operator
            switch (currentOperator) {
                case "-":
                    finalTotal = value1 - value2;
            }
            // division function operator
            switch (currentOperator) {
                case "/":
                    finalTotal = value1 / value2;
            }
            // multiplication function operator
            switch (currentOperator) {
                case "*":
                    finalTotal = value1 * value2;
            }
            document.getElementById("inputBox").value = finalTotal;

            // returns everything to zero on a new line once calc is finished
            value1 = 0;
            newLine = true;
        }