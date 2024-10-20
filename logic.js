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

$(document).ready(function () {
  $("#button").click(function () {
    const toAdd = $("input").val();
    $("ol").append(
      "<li>" +
        toAdd +
        `<button class="update-down" id="update-down-${counter}">-</button>
      <button class="update-up" id="update-up-${counter++}">+</button>
      <span id="counter-${counter2++}"></span>` +
        "</li>"
    );
  });

  $("#clear").click(function () {
    $("input").val("");
  });

  $("input").keyup(function (event) {
    if (event.keyCode == 13) {
      $("#button").click();
      $("#clear").click();
    }
  });
});

$(document).on("click", "#update-up-1", function () {
  count1++;
  $("#counter-1").html("Pill count is: " + count1);
});

$(document).on("click", "#update-down-1", function () {
  if (count1 > 0) {
    count1--;
    $("#counter-1").html("Pill count is: " + count1);
  }
});

$(document).on("click", "#update-up-2", function () {
  count2++;
  $("#counter-2").html("Pill count is: " + count2);
});

$(document).on("click", "#update-down-2", function () {
  if (count2 > 0) {
    count2--;
    $("#counter-2").html("Pill count is: " + count2);
  }
});

$(document).on("click", "#update-up-3", function () {
  count3++;
  $("#counter-3").html("Pill count is: " + count3);
});

$(document).on("click", "#update-down-3", function () {
  if (count3 > 0) {
    count3--;
    $("#counter-3").html("Pill count is: " + count3);
  }
});

$(document).on("click", "#update-up-4", function () {
  count4++;
  $("#counter-4").html("Pill count is: " + count4);
});

$(document).on("click", "#update-down-4", function () {
  if (count4 > 0) {
    count4--;
    $("#counter-4").html("Pill count is: " + count4);
  }
});

$(document).on("click", "#update-up-5", function () {
  count5++;
  $("#counter-5").html("Pill count is: " + count5);
});

$(document).on("click", "#update-down-5", function () {
  if (count5 > 0) {
    count5--;
    $("#counter-5").html("Pill count is: " + count5);
  }
});

$(document).on("click", "#update-up-6", function () {
  count6++;
  $("#counter-6").html("Pill count is: " + count6);
});

$(document).on("click", "#update-down-6", function () {
  if (count6 > 0) {
    count6--;
    $("#counter-6").html("Pill count is: " + count6);
  }
});

$(document).on("click", "#update-up-7", function () {
  count7++;
  $("#counter-7").html("Pill count is: " + count7);
});

$(document).on("click", "#update-down-7", function () {
  if (count7 > 0) {
    count7--;
    $("#counter-7").html("Pill count is: " + count7);
  }
});

$(document).on("click", "#update-up-8", function () {
  count8++;
  $("#counter-8").html("Pill count is: " + count8);
});

$(document).on("click", "#update-down-8", function () {
  if (count8 > 0) {
    count8--;
    $("#counter-8").html("Pill count is: " + count8);
  }
});

$(document).on("click", "#update-up-9", function () {
  count9++;
  $("#counter-9").html("Pill count is: " + count9);
});

$(document).on("click", "#update-down-9", function () {
  if (count9 > 0) {
    count9--;
    $("#counter-9").html("Pill count is: " + count9);
  }
});

$(document).on("click", "#update-up-10", function () {
  count10++;
  $("#counter-10").html("Pill count is: " + count10);
});

$(document).on("click", "#update-down-10", function () {
  if (count10 > 0) {
    count10--;
    $("#counter-10").html("Pill count is: " + count10);
  }
});

$(document).on("click", "#update-up-11", function () {
  count11++;
  $("#counter-11").html("Pill count is: " + count11);
});

$(document).on("click", "#update-down-11", function () {
  if (count11 > 0) {
    count11--;
    $("#counter-11").html("Pill count is: " + count11);
  }
});

$(document).on("click", "#update-up-12", function () {
  count12++;
  $("#counter-12").html("Pill count is: " + count12);
});

$(document).on("click", "#update-down-12", function () {
  if (count12 > 0) {
    count12--;
    $("#counter-12").html("Pill count is: " + count12);
  }
});

$(document).on("click", "#update-up-13", function () {
  count13++;
  $("#counter-13").html("Pill count is: " + count13);
});

$(document).on("click", "#update-down-13", function () {
  if (count13 > 0) {
    count13--;
    $("#counter-13").html("Pill count is: " + count13);
  }
});

$(document).on("click", "#update-up-14", function () {
  count14++;
  $("#counter-14").html("Pill count is: " + count14);
});

$(document).on("click", "#update-down-14", function () {
  if (count14 > 0) {
    count14--;
    $("#counter-14").html("Pill count is: " + count14);
  }
});

$(document).on("click", "#update-up-15", function () {
  count15++;
  $("#counter-15").html("Pill count is: " + count15);
});

$(document).on("click", "#update-down-15", function () {
  if (count15 > 0) {
    count15--;
    $("#counter-15").html("Pill count is: " + count15);
  }
});

$(document).on("click", "#update-up-16", function () {
  count16++;
  $("#counter-16").html("Pill count is: " + count16);
});

$(document).on("click", "#update-down-16", function () {
  if (count16 > 0) {
    count16--;
    $("#counter-16").html("Pill count is: " + count16);
  }
});

$(document).on("click", "#update-up-17", function () {
  count17++;
  $("#counter-17").html("Pill count is: " + count17);
});

$(document).on("click", "#update-down-17", function () {
  if (count17 > 0) {
    count17--;
    $("#counter-17").html("Pill count is: " + count17);
  }
});

$(document).on("click", "#update-up-18", function () {
  count18++;
  $("#counter-18").html("Pill count is: " + count18);
});

$(document).on("click", "#update-down-18", function () {
  if (count18 > 0) {
    count18--;
    $("#counter-18").html("Pill count is: " + count18);
  }
});

$(document).on("click", "#update-up-19", function () {
  count19++;
  $("#counter-19").html("Pill count is: " + count19);
});

$(document).on("click", "#update-down-19", function () {
  if (count19 > 0) {
    count19--;
    $("#counter-19").html("Pill count is: " + count19);
  }
});

$(document).on("click", "#update-up-20", function () {
  count20++;
  $("#counter-20").html("Pill count is: " + count20);
});

$(document).on("click", "#update-down-20", function () {
  if (count20 > 0) {
    count20--;
    $("#counter-20").html("Pill count is: " + count20);
  }
});
