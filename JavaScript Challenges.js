// Callenge 1
function checkTwoNumbers (a, b) {
	if (a == 65 || b == 65 || a + b == 65)
		return true;
	else 
		return false;
}
console.log(checkTwoNumbers(40, 25));


// Challenge 2
function AreaOfTriangle() {
        var a = 7; 
        var b = 8;
        var c = 9; 
    var s = (a + b + c) /2;
    var area = Math.sqrt(s*(s - a)*(s - b)*(s - c));
	return area;
}
console.log(AreaOfTriangle());


// Challenge 3
function LargestNumber(num1, num2, num3) {
    var biggestNumber = 0;
	
	if (biggestNumber < num1)
		biggestNumber = num1;
	if (biggestNumber < num2)
		biggestNumber = num2;
	if (biggestNumber < num3)
		biggestNumber = num3;

return biggestNumber;
}
console.log(LargestNumber(2, 50, 250));


// Challenge 4
function TimeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = (num % 60);
    return (hours + ":" + minutes);
}
console.log(TimeConvert(250));


