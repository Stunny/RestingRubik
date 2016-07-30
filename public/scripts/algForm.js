//Script starts
$('#addAlg').submit(function(event){

  event.preventDefault();

  var $form = $(this),
      nom   = $form.find('input[name="nombre"]').val(),
      nummv = $form.find('input[name="moves_number"]').val(),
      moves = $form.find('input[name="moves"]').val(),
      appl2 = $form.find('input[name="applies_to"]').val(),
      tipo  = $form.find('select[name="kind"]').val(),
      url   = $form.attr('action'),
      token = $('#token').val();

  $.ajaxSetup({
    headers : {'x-access-token' : token}
  });

  var send = $.post(url,{
    nombre         :nom,
    moves_number   :nummv,
    moves          :moves,
    applies_to     :appl2,
    kind           :tipo
  }, "application/json");

  send.done(function(alg, textStatus){
    if($('#result_body').hasClass()) $('#result_body').removeAttr('class');
    console.log(alg);
    console.log(textStatus);
    $('#result_body').addClass('json');
    $('#result_body').text(JSON.stringify(alg, null, "\t"));
    hljs.highlightBlock($('#result_body').get(0));
  });

  send.fail(function(jqxhr, textStatus, errorThrown){
    console.log(textStatus, errorThrown, errorThrown.msg);
  });
});
