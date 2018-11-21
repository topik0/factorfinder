$(window).load(function(){
$(document).ready(function() {
    mainCruncher();
    $("#firstNumber, #secondNumber").on("keydown keyup", function() {
        mainCruncher();
    });
});

function mainCruncher() {
            var firstNumber = document.getElementById('firstNumber').value;
            var secondNumber = document.getElementById('secondNumber').value;
			var result = -2 * parseInt(firstNumber) / (-1 * parseInt(secondNumber) + Math.sqrt(parseInt(secondNumber) * parseInt(secondNumber) - 4 * parseInt(firstNumber)));
			var result1 = -2 * parseInt(firstNumber) / (-1 * parseInt(secondNumber) - Math.sqrt(parseInt(secondNumber) * parseInt(secondNumber) - 4 * parseInt(firstNumber)));
            if (!isNaN(result)) {
                document.getElementById('xValue').value = result;
				document.getElementById('yValue').value = result1;
            }
        }
});
