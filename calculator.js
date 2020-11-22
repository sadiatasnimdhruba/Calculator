function Sin() {
     Calculator.text.value='sin'+'('+Calculator.text.value+')'+'='+Math.sin(Calculator.text.value * Math.PI / 180).toFixed(15)
}
		function Cos() {
            Calculator.text.value='cos'+'('+Calculator.text.value+')'+'='+Math.cos(Calculator.text.value * Math.PI / 180).toFixed(15)
        }
        
		function Tan() {

                  let tan90 = 'Undefined';
const tan = 16331239353195370;
if (Calculator.text.value == 90) {

    Calculator.text.value="Math Error";
} 
else {
Calculator.text.value='tan'+'('+Calculator.text.value+')'+'='+Math.tan(Calculator.text.value * Math.PI / 180).toFixed(15)
}

}
function power() {
     Calculator.text.value=Calculator.text.value+'^2='+Math.pow(Calculator.text.value,2)
}
function abs() {
     Calculator.text.value='|'+Calculator.text.value+'|='+Math.abs(Calculator.text.value,2)
}
function root() {
     Calculator.text.value='√'+Calculator.text.value+'='+Math.sqrt(Calculator.text.value)
}
function pi() {
     Calculator.text.value=Math.PI
}
function ex() {
     Calculator.text.value=Math.E
}
function ln() {
     Calculator.text.value='ln('+Calculator.text.value+')='+Math.log(Calculator.text.value)
}
function remove(){
	var val=Calculator.text.value;
	Calculator.text.value=val.substr(0,val.length-1);
}