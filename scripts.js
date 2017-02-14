$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});

// variable types

// strings (text)
var name = 'Chris Whong';
var className = 'Web Mapping';

console.log(typeof(name));

// number
var age0 = 36;
var age1 = 40;

console.log(typeof(age0));

// array
var ages = [12, 18, 26, 76];

var pulledNumber = ages[3]  // 76

console.log(ages);
console.log(pulledNumber); // 76

var agesArray = [age0, age1];

var myObject = {
  thingOne: 'hello there',
  thingTwo: 'I am thing two',
  thingThree: 304,
  thingFour: {
    thingFourChild: [
      34,
      105
    ]
  }
}

var myText = {
  string1: 'Hello World',
  string2: 'I love web development',
}



console.log( myObject.thingFour.thingFourChild[1] ) // 105

var oneOhFive = myObject.thingFour.thingFourChild[1];

var added = age0 + oneOhFive; 

console.log(added)

$('body').append('<h2>' + myText.string1 + '</h2>')

function addFive(num) {

  var addedFive = num + 5;

  return addedFive;
}

console.log( addFive( 100 ) ); //105

for (var i=0; i<10; i++) {
  console.log('I am in a loop ' + i)
  console.log(addFive(i));
}

function makeBlue() {
  $('.colorBox').css('background','blue');
  $('.message').text('The circle is blue');
}

$('.blueButton').on('click', makeBlue);
$('.anotherBlueButton').on('click', makeBlue);
