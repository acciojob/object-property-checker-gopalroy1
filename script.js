const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	if(sampleObject!=undefined){
		return true;
	}
  return false;
}

// Do not change the code below
console.log("hello world")
const key = prompt("Enter Key.");
alert(hasKey(key));