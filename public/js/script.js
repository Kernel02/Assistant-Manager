const arrowIcon = $("#arrowDown");

$(document).ready(function () {
  $(".parallax").parallax();
  $(".dropdown-trigger").dropdown();
  $("ul.tabs").tabs();
  $("select").formSelect();
});

function changeArrow() {
  if (arrowIcon[0].id === "arrowDown") {
    $(arrowIcon[0]).text("arrow_drop_up");
    $(arrowIcon[0]).attr("id", "arrowUp");
  } else {
    $(arrowIcon[0]).text("arrow_drop_down");
    $(arrowIcon[0]).attr("id", "arrowDown");
  }
}

$(".dropdown-trigger").on("click", changeArrow);
