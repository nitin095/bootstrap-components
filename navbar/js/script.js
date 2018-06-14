$(document).ready(() => {
  //to display dropdown menu of navbar
  $(".dropdown").click(function() {
    let dropdownId = $(this).attr("id");
    $('.dropdown-menu[aria-labelledby="' + dropdownId + '"]').slideToggle(400);
  });

  //listening click anywhere on screen to close dropdown menu
  $(document).on("click", evt => {
    if (!$(evt.target).is(".dropdown")) {
      $(".dropdown-menu").slideUp(350);
    }
  });

  //to display navbar links on clicking navbar-toggler button
  $(".navbar-toggler").click(function() {
    let collapseId = $(this).attr("data-target");
    $(collapseId).slideToggle(300);
  });

   //animating home button
  $('.home-button').animate({
  left: 30,
  opacity: 1
  }, 500 );

  //showing code of navbar
  let codeContainer = $(".code-container code");
  let navCode = $("nav").prop("outerHTML");
  let navDarkCode = $('nav.nav-dark').prop("outerHTML");
  codeContainer.eq(0).text(navCode);
  codeContainer.eq(1).text(navDarkCode);
  codeContainer.eq(0).html(
    codeContainer.eq(0)
      .html()
      .replace(/\n/g, "<br/>")
      .replace(/ /g, "&nbsp;")
      .replace(/\n/g, "<br/>")
  );
  codeContainer.eq(1).html(
    codeContainer.eq(1)
      .html()
      .replace(/\n/g, "<br/>")
      .replace(/ /g, "&nbsp;")
      .replace(/\n/g, "<br/>")
  );

}); //end document ready function
