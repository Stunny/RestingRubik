$('#addcube').submit(function(event){

  //Evito que el boton de submit mueva a otra pagina.

  event.preventDefault();

  //Recojo los valores introducidos en el formulario
  var $form = $(this),
      nom = $form.find('input[name="nombre"]').val(),
      marca = $form.find('input[name="brand"]').val(),
      layers = $form.find('input[name="capas"]').val(),
      tipo = $form.find('select[name="kind"]').val(),
      url = $form.attr('action'),
      token = $('#token').val();

  $.ajaxSetup({
    headers : {'x-access-token' : token}
  });

  //Envio los valores a la api
  var send = $.post(url,{
    nombre : nom,
    brand  : marca,
    capas  : layers,
    kind   : tipo
  }, "application/json");

  send.done(function(cube, textStatus){
    if($('#result_body').hasClass()) $('#result_body').removeAttr('class');
    console.log(cube);
    console.log(textStatus);
    $('#result_body').addClass('json');
    $('#result_body').text(JSON.stringify(cube, null, "\t"));
    hljs.highlightBlock($('#result_body').get(0));
  });

  // handle errors
  send.fail(function(jqxhr, textStatus, errorThrown) {
    console.log(textStatus, errorThrown, errorThrown.msg)
  });
});
