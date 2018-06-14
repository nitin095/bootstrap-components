$(document).ready(() => {

  //showing clicked tab and hiding rest tabs of same accordion
  $(".accordion button").click(function() {
    let collapseId = $(this).attr("data-target");
    $(collapseId).slideToggle(300);
    $('body').find('.accordion:has('+collapseId+') .collapse').not(collapseId).slideUp(300);
  });

  //displaying code by copying from accordion div 
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
