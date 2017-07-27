$('#addbrand').submit(function(event){

  //Evito que el boton de submit mueva a otra pagina.

  event.preventDefault();

  //Recojo los valores introducidos en el formulario
  var $form = $(this),
      nom = $form.find('input[name="nombre"]').val(),
      pais = $form.find('input[name="pais"]').val(),
      website = $form.find('input[name="web"]').val(),
      url = $form.attr('action'),
      token = $('#token').val();

  $.ajaxSetup({
    headers : {'x-access-token' : token}
  });

  //Envio los valores a la api
  var send = $.post(url,{
    nombre : nom,
    pais  : pais,
    web  : website
  }, "application/json");

  send.done(function(brand, textStatus){
    if($('#result_body').hasClass()) $('#result_body').removeAttr('class');
    console.log(brand);
    console.log(textStatus);
    $('#result_body').addClass('json');
    $('#result_body').text(JSON.stringify(brand, null, "\t"));
    hljs.highlightBlock($('#result_body').get(0));
  });

  // handle errors
  send.fail(function(jqxhr, textStatus, errorThrown) {
    console.log(textStatus, errorThrown, errorThrown.msg)
  });
});
