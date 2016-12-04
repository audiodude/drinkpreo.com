$(function() {

  $('#email-form').submit(function() {
   // This returns a CORS error, but the data still gets posted.
   $.ajax({
     type: 'POST',
     url: $(this).attr('action'),
     data: $(this).serialize(),
     dataType: 'html',
     success: function() {
       $('#main-submit').hide();
       $('#thankyou').show();
     }
   });
    return false;
  });

});
