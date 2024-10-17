let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;
let count11 = 0;
let count12 = 0;
let count13 = 0;
let count14 = 0;
let count15 = 0;
let count16 = 0;
let count17 = 0;
let count18 = 0;
let count19 = 0;
let count20 = 0;

let counter = 1;
let counter2 = 1;

$(document).on('click', '#update-up-1', function() {
  count1++;
  $("#counter-1").html("My current count is: "+ count1);
});

$(document).on('click', '#update-down-1', function() {
  count1--;
  $("#counter-1").html("My current count is: "+ count1);
});

$(document).on('click', '#update-up-2', function() {
  count2++;
  $("#counter-2").html("My current count is: "+ count2);
});

$(document).on('click', '#update-down-2', function() {
  count2--;
  $("#counter-2").html("My current count is: "+ count2);
});

$(document).on('click', '#update-up-3', function() {
  count3++;
  $("#counter-3").html("My current count is: "+ count3);
});

$(document).on('click', '#update-down-3', function() {
  count3--;
  $("#counter-3").html("My current count is: "+ count3);
});

$(document).on('click', '#update-up-4', function() {
  count4++;
  $("#counter-4").html("My current count is: "+ count4);
});

$(document).on('click', '#update-down-4', function() {
  count4--;
  $("#counter-4").html("My current count is: "+ count4);
});

$(document).on('click', '#update-up-5', function() {
  count5++;
  $("#counter-5").html("My current count is: "+ count5);
});

$(document).on('click', '#update-down-5', function() {
  count5--;
  $("#counter-5").html("My current count is: "+ count5);
});

$(document).on('click', '#update-up-6', function() {
  count6++;
  $("#counter-6").html("My current count is: "+ count6);
});

$(document).on('click', '#update-down-6', function() {
  count6--;
  $("#counter-6").html("My current count is: "+ count6);
});

$(document).on('click', '#update-up-7', function() {
  count7++;
  $("#counter-7").html("My current count is: "+ count7);
});

$(document).on('click', '#update-down-7', function() {
  count7--;
  $("#counter-7").html("My current count is: "+ count7);
});

$(document).on('click', '#update-up-8', function() {
  count8++;
  $("#counter-8").html("My current count is: "+ count8);
});

$(document).on('click', '#update-down-8', function() {
  count8--;
  $("#counter-8").html("My current count is: "+ count8);
});

$(document).on('click', '#update-up-9', function() {
  count9++;
  $("#counter-9").html("My current count is: "+ count9);
});

$(document).on('click', '#update-down-9', function() {
  count9--;
  $("#counter-9").html("My current count is: "+ count9);
});

$(document).on('click', '#update-up-10', function() {
  count10++;
  $("#counter-10").html("My current count is: "+ count10);
});

$(document).on('click', '#update-down-10', function() {
  count10--;
  $("#counter-10").html("My current count is: "+ count10);
});

$(document).on('click', '#update-up-11', function() {
  count11++;
  $("#counter-11").html("My current count is: "+ count11);
});

$(document).on('click', '#update-down-11', function() {
  count11--;
  $("#counter-11").html("My current count is: "+ count11);
});

$(document).on('click', '#update-up-12', function() {
  count12++;
  $("#counter-12").html("My current count is: "+ count12);
});

$(document).on('click', '#update-down-12', function() {
  count12--;
  $("#counter-12").html("My current count is: "+ count12);
});

$(document).on('click', '#update-up-13', function() {
  count13++;
  $("#counter-13").html("My current count is: "+ count13);
});

$(document).on('click', '#update-down-13', function() {
  count13--;
  $("#counter-13").html("My current count is: "+ count13);
});

$(document).on('click', '#update-up-14', function() {
  count14++;
  $("#counter-14").html("My current count is: "+ count14);
});

$(document).on('click', '#update-down-14', function() {
  count14--;
  $("#counter-14").html("My current count is: "+ count14);
});

$(document).on('click', '#update-up-15', function() {
  count15++;
  $("#counter-15").html("My current count is: "+ count15);
});

$(document).on('click', '#update-down-15', function() {
  count15--;
  $("#counter-15").html("My current count is: "+ count15);
});

$(document).on('click', '#update-up-16', function() {
  count16++;
  $("#counter-16").html("My current count is: "+ count16);
});

$(document).on('click', '#update-down-16', function() {
  count16--;
  $("#counter-16").html("My current count is: "+ count16);
});

$(document).on('click', '#update-up-17', function() {
  count17++;
  $("#counter-17").html("My current count is: "+ count17);
});

$(document).on('click', '#update-down-17', function() {
  count17--;
  $("#counter-17").html("My current count is: "+ count17);
});

$(document).on('click', '#update-up-18', function() {
  count18++;
  $("#counter-18").html("My current count is: "+ count18);
});

$(document).on('click', '#update-down-18', function() {
  count18--;
  $("#counter-18").html("My current count is: "+ count18);
});

$(document).on('click', '#update-up-19', function() {
  count19++;
  $("#counter-19").html("My current count is: "+ count19);
});

$(document).on('click', '#update-down-19', function() {
  count19--;
  $("#counter-19").html("My current count is: "+ count19);
});

$(document).on('click', '#update-up-20', function() {
  count20++;
  $("#counter-20").html("My current count is: "+ count20);
});

$(document).on('click', '#update-down-20', function() {
  count20--;
  $("#counter-20").html("My current count is: "+ count20);
});

// $("#update-up").click(function () {
//   count++;
//   $("#counter").html("My current count is: "+ count);
// });

// $("#update-down").click(function () {
//   count--;
//   $("#counter").html("My current count is: "+ count);
// });

$(document).ready(function () {
  $("#button").click(function () {
    var toAdd = $("input[name=ListItem]").val();
    $("ol").append("<li>" + toAdd + `<button id="update-down-${counter}">-</button>
      <button id="update-up-${counter++}">+</button>
      <div id="counter-${counter2++}"></div>`+ "</li>");

  });

$("button").click(function() {
  const newElement = $("<div>").addClass("item-" + counter);
  $("#container").append(newElement);
  counter++;
});

  //  $("input[name=ListItem]").keyup(function(event){
  //     if(event.keyCode == 13){
  //       $("#button").click();
  //     }
  // });
});

console.log(count)

// $(document).ready(function() {
//   // Get the current date
//   var today = new Date();

//   // Create a key for localStorage based on the date
//   var localStorageKey = "dailyCounter_" + today.toDateString();

//   // Get the counter value from localStorage or set it to 0 if it doesn't exist
//   var counter = localStorage.getItem(localStorageKey) || 0;

//   // Display the counter value
//   $("#daily-counter").text(counter);

//   // Increment the counter on each page load
//   counter++;

//   // Update the counter in localStorage
//   localStorage.setItem(localStorageKey, counter);
// });
