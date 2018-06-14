$(document).ready(() => {

  //showing clicked tab and hiding rest tabs of same accordion
  $(".accordion button").click(function() {
    let collapseId = $(this).attr("data-target");
    $(collapseId).slideToggle(300);
    $('body').find(`.accordion:has(${collapseId}) .collapse`).not(collapseId).slideUp(300);
  });

  //animating home button
  $('.home-button').animate({
  left: 30,
  opacity: 1
  }, 500 );

  //displaying code by copying from accordion div 
  let codeContainer = $(".code-container code");
  let accCode = $(".accordion").prop("outerHTML");
  let accDarkCode = $(".accordion-dark").prop("outerHTML");
  codeContainer.eq(0).text(accCode);
  codeContainer.eq(1).text(accDarkCode);
  codeContainer.eq(0).html(
    codeContainer.eq(0).html()
      .replace(/\n/g, "<br/>")
      .replace(/ /g, "&nbsp;")
      .replace(/\n/g, "<br/>")
  );
  codeContainer.eq(1).html(
    codeContainer.eq(1).html()
      .replace(/\n/g, "<br/>")
      .replace(/ /g, "&nbsp;")
      .replace(/\n/g, "<br/>")
  );
  
}); //end document ready function
