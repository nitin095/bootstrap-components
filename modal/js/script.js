$(document).ready(() => {
  $("button.modal-toggler").click(function() {
    let modalId = $(this).attr("data-target");
    if ($(modalId).hasClass("modal-bck-blur")) {
      $(".container").addClass("blur");
    }
    $(modalId).fadeIn(300).css("display", "flex");
    $(modalId).find(".modal-content").slideDown(200).css("display", "inline-flex");

    $(this).parent().siblings("h1,h2").addClass("active");
    $("h1,h2").not($(this).parent().siblings("h1,h2")).removeClass("active");
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

  $(".modal button.close").click(function() {
    $(".container").removeClass("blur");
    $(this)
      .parent()
      .parent()
      .slideUp(200);
    $(this)
      .parent()
      .parent()
      .parent()
      .fadeOut(300);
  });

  $('.modal button[data-dismiss="modal"]').click(function() {
    $(".container").removeClass("blur");
    $(this)
      .parent()
      .parent()
      .slideUp(200);
    $(this)
      .parent()
      .parent()
      .parent()
      .fadeOut(300);
  });

  $(document).on("click", evt => {
    console.log("click detected");
    if (
      !$(evt.target).is("button.modal-toggler") &&
      $(evt.target).is(".modal")
    ) {
      $(".container").removeClass("blur");
      $(".modal .modal-content").slideUp(200);
      $(".modal").fadeOut(300);
    }
  });

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

  $("h1,h2").click(function() {
    $(this).addClass("active");
    $("h1,h2")
      .not(this)
      .removeClass("active");
    modalId = $(this)
      .siblings()
      .find("button")
      .attr("data-target");
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
