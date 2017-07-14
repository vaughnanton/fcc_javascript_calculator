//create functions for operations
function add(x,y) {
  return x + y;
};

function multiply(x,y) {
  return x * y;
};

function divide(x,y) {
  return x / y;
};

function subtract(x,y) {
  return x - y;
};

//create function to combine numbers into array
function combine_numbers(numbersArr) {
  number = ""
  //function to add num to number
  numbersArr.forEach(function(num) {
    number += num;
  });
  //return integer instead of string
  return parseInt(number);
};

//function to get the result/run operators
function getResult(numbers, operation) {
  var num1 = numbers[0];
  var num2 = numbers[1];
  if (operation == "+") {
    return add(num1, num2)
  } else if (operation == "-") {
    return subtract(num1, num2)
  } else if (operation == "/") {
    return divide(num1, num2)
  } else {
    return multiply(num1, num2)
  }
};

$(document).ready(function() {
  var numbersArr = [];
  var numbers = [];
  var operation = "";

  //create on click function
  $(".btn").on("click", function() {
    var pressed_button = $(this).html()
    //if button is number
    if ($(this).hasClass("num-btn")) {
      //push the pressed button into array
      numbersArr.push(parseInt(pressed_button));
      //append to the end of result
      $(".result").append(pressed_button);
      //else if operator button is pressed...
    } else if ($(this).hasClass("operation-btn")) {
      operation = pressed_button;
      //append to the end of result
      $(".result").append(" " + pressed_button + " ");
      //if there is something in the array
      if (numbersArr.length > 0) {
        //run the combine function
        numbers.push(combine_numbers(numbersArr));
        //empty the array
        numbersArr = [];
      }
      //esle if = is pressed
    } else if (pressed_button == "=") {
      //push numbers and combine from array
      numbers.push(combine_numbers(numbersArr));
      //empty array
      numbersArr = [];
      //get the result by running operators on numbers
      result = getResult(numbers,operation)
      //print result
      $(".result").html(result);
      //result is stored in numbers
      numbers = [result];
      operation = "";
    } else {
      //clear all
      numbersArr = [];
      numbers = [];
      operations = "";
      $(".result").html("");
    }

  });

});
