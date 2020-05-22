var questionOne = prompt("What is you favorite color?")
var questionTwo = prompt("Are you introverted or extroverted?")
var questionThree = prompt("Do you like the indoors or outdoors?")

if (questionTwo.toLowerCase() == "extroverted" && questionThree.toLowerCase() == "outdoors") {
  if (isGreen === false) {
    console.log("False")
    alert("Great! we've got for you a " + questionOne + " dog.")
  } else {
    console.log("True")
    alert("Oops! We would like to get you a dog but we do not have a green one!")
  }
} else if (questionTwo.toLowerCase() == "introverted" && questionThree.toLowerCase() == "indoors") {
	if (isGreen === false) {
    console.log("False")
    alert("Great! we've got for you a " + questionOne + " cat.")
  } else {
    console.log("True")
    alert("Oops! We would like to get you a cat but we do not have a green one!")
  }
} else {
  alert("Please ensure all fields are filed out correctly and try again.")
}

var isGreen = (questionOne) => {
  if (questionOne.toLowerCase() === "green") {
    console.log("True----")
    return true
  } else {
    console.log("True----")
    return false
  }
}
