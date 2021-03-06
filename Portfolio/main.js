function transition1() {
    // Hide to left / show from left
    $("#page-home").toggle("slide", {direction:"right"}, 1000);
    $("#div_hero2").toggle("slide", {direction:"left"}, 1000);
    $(".profile-section").animate({
      top: '0px'
    }, 2500, "easeOutCirc");
    $("#profile-image").delay(2000).fadeIn(1000);
    $("p").delay(3000).animate({
      opacity: 1
    }, 1000);
    $("h2").delay(3000).animate({
      opacity: 1
    }, 1000);
    $("h3").delay(3000).animate({
      opacity: 1
    }, 1000);
}

function transition2() {
    // Hide to left / show from left
    $("#div_hero2").toggle("slide", {direction:"left"}, 1000);
    $("#page-home").toggle("slide", {direction:"right"}, 1000);
}

function transition3() {
    // Hide to left / show from left
    $("#page-home").toggle("slide", {direction:"left"}, 1000);
    $("#div_hero3").toggle("slide", {direction:"right"}, 1000);
    $(".portfolio-section").animate({
      top: '0px'
    }, 2500, "easeOutCirc");
    $("#portfolio-image").each(function(i) {
    $(this).delay(100 * i).fadeIn(500);
});
}

function transition4() {
    // Hide to left / show from left
    $("#div_hero3").toggle("slide", {direction:"right"}, 1000);
    $("#page-home").toggle("slide", {direction:"left"}, 1000);
}

function toggleContent1() {
  $('#button-about').removeClass('selected');
  $(this).addClass('selected');
  $('.contact-section').delay(1100).slideDown(1000);
  $('.about-section').slideUp(1000); //hide about section // display contact section
}


function toggleContent2() {
  $('#button-contact').removeClass('selected');
  $(this).addClass('selected');
  $('.contact-section').slideUp(1000); //hide contact section X
  $('.about-section').delay(1100).slideDown(1000); //display about section X
}

function toggleSectionPhotography() {
  $('#button-digital, #button-traditional, #button-frontend').removeClass('selected');
  $(this).addClass('selected');
  $('.portfolio-section').scrollTop(0);
  $('.digital-section, .traditional-section, .frontend-section').fadeOut(750);
  $('.photography-section').delay(750).fadeIn(750); //hide about section // display contact section
}

function toggleSectionDigital() {
  $('#button-photography, #button-traditional, #button-frontend').removeClass('selected');
  $(this).addClass('selected');
  $('.portfolio-section').scrollTop(0);
  $('.photography-section, .traditional-section, .frontend-section').fadeOut(750);
  $('.digital-section').delay(750).fadeIn(1500); //hide about section // display contact section
}

function toggleSectionTraditional() {
  $('#button-digital, #button-photography, #button-frontend').removeClass('selected');
  $(this).addClass('selected');
  $('.portfolio-section').scrollTop(0);
  $('.digital-section, .photography-section, .frontend-section').fadeOut(750);
  $('.traditional-section').delay(750).fadeIn(750); //hide about section // display ontact section
}

function toggleSectionFrontend() {
  $('#button-digital, #button-photography, #button-traditional').removeClass('selected');
  $(this).addClass('selected');
  $('.portfolio-section').scrollTop(0);
  $('.digital-section, .photography-section, .traditional-section').fadeOut(750);
  $('.frontend-section').delay(750).fadeIn(750); //hide about section // display ontact section
}

function showDescription() {
  $(this).next('.description').fadeToggle();
}

function backgroundLoad() {
  $(".img_highres").off().on("load", function() {
     var id = $(this).attr("id");
     var highres = $(this).attr("src").toString();
     var target = "#div_" + id.substring(4);
     $(target).css("background-image", "url(" + highres + ")");
  });
}

$(document).ready(function() {
    $('.contact-section').slideUp();
    $('#button-about').addClass('selected');
    $('#button-frontend').addClass('selected');
    $('#div_hero1').fadeIn(1000);
    $('.hero-image-text, .home-social-media, .navigation-home').delay(1500).fadeIn(1000);
    $('.navigation-home').delay(300).animate({
      width: '100%',
      left: '0',
      opacity: '1'
    }, 1500);
    $('.hero-image-center').delay(500).fadeIn(2000);
    $('a.scrollitemAbout').click(transition1);
    $('a.scrollitemHome1').click(transition2);
    $('a.scrollitemWork').click(transition3);
    $('a.scrollitemHome2').click(transition4);
    $('#button-about').click(toggleContent2);
    $('#button-contact').click(toggleContent1);
    $('#button-traditional').click(toggleSectionTraditional);
    $('#button-digital').click(toggleSectionDigital);
    $('#button-photography').click(toggleSectionPhotography);
    $('#button-frontend').click(toggleSectionFrontend);
    $('.portfolio-image').click(showDescription);

    //replace lowres background images with highres versions
    backgroundLoad();
    setTimeout(backgroundLoad, 1000);
    setTimeout(backgroundLoad, 10000);

    //lozad lazy load
    const observer = lozad();
    observer.observe();

    //image replacer high res when loaded

});
