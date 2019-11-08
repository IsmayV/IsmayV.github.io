$(document).ready(function() {

  const scrollItem = '.scroll-item';
  const animateClass = 'animate';

  const scrollImgLeft = '.scroll-img-left';
  const slideLeftClass = 'slide-in-left';

  const scrollImgRight = '.scroll-img-right';
  const slideRightClass = 'slide-in-right';


  const animate = element => (
    element.classList.add(animateClass)
  );

  const isAnimated = element => (
    element.classList.contains(animateClass)
  );

  const slideLeft = element => (
    element.classList.add(slideLeftClass)
  );

  const isSlidedLeft = element => (
    element.classList.contains(slideLeftClass)
  );

  const slideRight = element => (
    element.classList.add(slideRightClass)
  );

  const isSlidedRight = element => (
    element.classList.contains(slideRightClass)
  );

  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {

      // when element's is in viewport,
      // animate it!
      if (entry.intersectionRatio > 0) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }

      if (entry.intersectionRatio > 0) {
        slideLeft(entry.target);
        observer.unobserve(entry.target);
      }

      if (entry.intersectionRatio > 0) {
        slideRight(entry.target);
        observer.unobserve(entry.target);
      }

      // remove observer after animation
    });
  });

  // get only these elements,
  // which are not animated yet
  const elementsItems = [].filter.call(
    document.querySelectorAll(scrollItem),
    element => !isAnimated(element, animateClass),
  );

  const elementsImgsLeft = [].filter.call(
    document.querySelectorAll(scrollImgLeft),
    element => !isSlidedLeft(element, slideLeftClass),
  );

  const elementsImgsRight = [].filter.call(
    document.querySelectorAll(scrollImgRight),
    element => !isSlidedRight(element, slideRightClass),
  );

  // start observing your elements
  elementsItems.forEach((element) => intersectionObserver.observe(element));
  elementsImgsLeft.forEach((element) => intersectionObserver.observe(element));
  elementsImgsRight.forEach((element) => intersectionObserver.observe(element));
// carousel

  $('#carousel').carousel({
    interval: 10000
  })

  $('.carousel .carousel-item').each(function(){
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i=0;i<3;i++) {
          next=next.next();
          if (!next.length) {
          	next = $(this).siblings(':first');
        	}

          next.children(':first-child').clone().appendTo($(this));
        }
  });

  $('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var title = button.data('title')
  var tools = button.data('tools')
  var img = button.attr('src') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(title)
  modal.find('.modal-img').attr('src', img)
  modal.find('.modal-tools').text('Tools used: ' + tools)

})


  });
