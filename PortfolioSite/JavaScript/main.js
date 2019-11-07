$(document).ready(function() {

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
