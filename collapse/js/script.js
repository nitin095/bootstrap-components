$(document).ready(() => {
  $(".accordion button").click(function() {
    console.log("accordion button clicked");
    let collapseId = $(this).attr("data-target");
    $(collapseId).slideToggle(300);
    $(collapseId)
      .parent()
      .children(".collapse")
      .not(collapseId)
      .slideUp(300);
  });

  let codeContainer = $(".code-container code");
  let accCode = $(".accordion").prop("outerHTML");
  codeContainer.text(accCode);
  codeContainer.html(
    codeContainer
      .html()
      .replace(/\n/g, "<br/>")
      .replace(/ /g, "&nbsp;")
      .replace(/\n/g, "<br/>")
  );

  let CodeContainerAccDark = $(".acc-dark code");
  let accDarkCode = $(".accordion-dark").prop("outerHTML");
  CodeContainerAccDark.text(accDarkCode);
  CodeContainerAccDark.html(
    CodeContainerAccDark.html()
      .replace(/\n/g, "<br/>")
      .replace(/ /g, "&nbsp;")
      .replace(/\n/g, "<br/>")
  );
}); //end document ready function
