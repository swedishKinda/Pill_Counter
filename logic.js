var count = 0;

$(document).on('click', '#update-up', function() {
  count++;
  $("#counter").html("My current count is: "+ count);
});

$(document).on('click', '#update-down', function() {
  count--;
  $("#counter").html("My current count is: "+ count);
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
    $("ol").append("<li>" + toAdd + "<div id='counter-box'>" + "<button id='update-down'>" + "-" + "</button>" + "<button id='update-up'>" + "+" + "</button>" + "<div id='counter'>" + "</div>" + "</div>" + "</li>");
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
