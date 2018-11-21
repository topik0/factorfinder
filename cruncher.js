$(window).load(function(){
$(document).ready(function() {
    func();
    $("#num1, #num2").on("keydown keyup", function() {
        func();
    });
});

function func() {
            var num1 = document.getElementById('num1').value;
            var num2 = document.getElementById('num2').value;
			var result = -2 * parseInt(num1) / (-1 * parseInt(num2) + Math.sqrt(parseInt(num2) * parseInt(num2) - 4 * parseInt(num1)));
			var result1 = -2 * parseInt(num1) / (-1 * parseInt(num2) - Math.sqrt(parseInt(num2) * parseInt(num2) - 4 * parseInt(num1)));
            if (!isNaN(result)) {
                document.getElementById('xres').value = result;
				document.getElementById('yres').value = result1;
            }
        }
});
