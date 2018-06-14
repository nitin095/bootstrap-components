$(document).ready(() => {
  let modalId = "";
  //on modal button click showing modal and it's code
  $("button.modal-toggler").click(function() {
    modalId = $(this).attr("data-target");
    if ($(modalId).hasClass("modal-bck-blur")) {
      //blur background if modal has class .modal-bck-blur
      $(".container").addClass("blur");
    }
    $(modalId).fadeIn(300).css("display", "flex");
    $(modalId).find(".modal-content").slideDown(200).css("display", "inline-flex");
  });

  //to close modal 
  $('.modal button.close,.modal button[data-dismiss="modal"]').click(() => {
    if ($(modalId).hasClass("modal-bck-blur")) {
      $(".container").removeClass("blur");
    }
    $(modalId).find('.modal-content').slideUp(200);
    $(modalId).fadeOut(300);
  });

  //listening click anywhere on screen except modal-content and closing modal
  $(document).on("click", evt => {
    if (
      !$(evt.target).is("button.modal-toggler") &&
      $(evt.target).is(".modal")
    ) {
      if ($(modalId).hasClass("modal-bck-blur")) {
        $(".container").removeClass("blur");
      }
      $(".modal .modal-content").slideUp(200);
      $(".modal").fadeOut(300);
    }
  });

  //animating home button
  $('.home-button').animate({
  left: 30,
  opacity: 1
  }, 500 );

  //displaying code
  let codeContainer = $(".code-container code");
  let modalCode = $("#modal").prop("outerHTML");
  codeContainer.text(modalCode);
  codeContainer.html(
    codeContainer
      .html()
      .replace(/\n/g, "<br/>")
      .replace(/ /g, "&nbsp;")
      .replace(/\n/g, "<br/>")
  );

  //adding active class on click on headings and displaying that modal code
  $("h1,h2").click(function() {
    $(this).addClass("active");
    $("h1,h2").not(this).removeClass("active");
    $(".code-name").html($(this).text());
    modalId = $(this).siblings().find("button").attr("data-target");
    modalCode = $(modalId).prop("outerHTML");
    codeContainer.text(modalCode);
    codeContainer.html(
      codeContainer
        .html()
        .replace(/\n/g, "<br/>")
        .replace(/ /g, "&nbsp;")
        .replace(/\n/g, "<br/>")
    );
  });
  
}); //end document ready function
