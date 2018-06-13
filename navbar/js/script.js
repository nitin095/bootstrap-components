$(document).ready(() => {
  $(".accordion button").click(function() {
    let collapseId = $(this).attr("data-target");
    $(collapseId).slideToggle(300);
    $(collapseId)
      .parent()
      .children(".collapse")
      .not(collapseId)
      .slideUp(300);
  });

  $(".dropdown").click(function() {
    console.log("clicked");
    let dropdownId = $(this).attr("id");
    //$('.dropdown-menu[aria-labelledby="'+dropdownId+'"]').toggleClass("display-flex").hide();
    $('.dropdown-menu[aria-labelledby="' + dropdownId + '"]').slideToggle(400);
  });

  $(document).on("click", evt => {
    console.log("click detected");
    if (!$(evt.target).is(".dropdown")) {
      $(".dropdown-menu").slideUp(350);
    }
  });

  $(".navbar-toggler").click(function() {
    console.log("toggler button clicked");
    let collapseId = $(this).attr("data-target");
    $(collapseId).slideToggle(300);
  });

  let codeContainer = $(".code-container code");
  let navCode = $("nav").prop("outerHTML");
  codeContainer.text(navCode);
  codeContainer.html(
    codeContainer
      .html()
      .replace(/\n/g, "<br/>")
      .replace(/ /g, "&nbsp;")
      .replace(/\n/g, "<br/>")
  );
}); //end document ready function
