//Script starts
  $('#addGuide').submit(function(event){

    event.preventDefault();

    var $form = $(this),
        cubo     = $form.find('input[name="cube"]').val(),
        autor    = $form.find('input[name="author"]').val(),
        link     = $form.find('input[name="url"]').val(),
        partes   = $form.find('input[name="parts"]').val(),
        formato  = $form.find('select[name="format"]').val(),
        postLink = $form.attr('action'),
        token = $('#token').val();

    $.ajaxSetup({
      headers : {'x-access-token' : token}
    });

    var send = $.post(link,{
      cube     :cubo,
      author   :autor,
      url      :link,
      parts    :partes,
      format   :formato
    }, "application/json");

    send.done(function(guide, textStatus){
      if($('#result_body').hasClass()) $('#result_body').removeAttr('class');
      console.log(guide);
      console.log(textStatus);
      $('#result_body').addClass('json');
      $('#result_body').text(JSON.stringify(guide, null, "\t"));
      hljs.highlightBlock($('#result_body').get(0));
    });

    send.fail(function(jqxhr, textStatus, errorThrown){
      console.log(textStatus, errorThrown, errorThrown.msg);
    });
  });
