//Start the script
function cleanPutForm() {
  $('#putID').val('');

  var $form = $('#putForm');
  $form.find('input[name="in1"]').removeAttr('placeholder');
  $form.find('input[name="in1"]').val('');
  $form.find('input[name="in2"]').removeAttr('placeholder');
  $form.find('input[name="in2"]').val('');
  $form.find('input[name="in3"]').removeAttr('placeholder');
  $form.find('input[name="in3"]').val('');
  $form.find('input[name="in4"]').removeAttr('placeholder');
  $form.find('input[name="in4"]').val('');
  $form.find('input[name="in5"]').removeAttr('placeholder');
  $form.find('input[name="in5"]').val('');
  $form.find('input[name="in5"]').prop('disabled', false);
}
function setPutToCube(){
  var $form = $('#putForm');
  cleanPutForm();
  $form.find('input[name="in1"]').prop('type', 'text');
  $form.find('input[name="in1"]').attr('placeholder', 'Nombre');
  $form.find('input[name="in2"]').prop('type', 'text');
  $form.find('input[name="in2"]').attr('placeholder', 'Marca');
  $form.find('input[name="in3"]').prop('type', 'text');
  $form.find('input[name="in3"]').attr('placeholder', 'Capas');
  $form.find('input[name="in4"]').prop('type', 'text');
  $form.find('input[name="in4"]').attr('placeholder', 'Tipo');
  $form.find('input[name="in5"]').prop('disabled', true);
}
function setPutToAlg(){
  var $form = $('#putForm');
  cleanPutForm();
  $form.find('input[name="in1"]').prop('type', 'text');
  $form.find('input[name="in1"]').attr('placeholder', 'Nombre');
  $form.find('input[name="in2"]').prop('type', 'number');
  $form.find('input[name="in2"]').attr('placeholder', '#Movims');
  $form.find('input[name="in3"]').prop('type', 'text');
  $form.find('input[name="in3"]').attr('placeholder', 'Moves');
  $form.find('input[name="in4"]').prop('type', 'text');
  $form.find('input[name="in4"]').attr('placeholder', 'Aplica a');
  $form.find('input[name="in5"]').prop('type', 'text');
  $form.find('input[name="in5"]').attr('placeholder', 'Tipo');
}
function setPutToGuide(){
  var $form = $('#putForm');
  cleanPutForm();
  $form.find('input[name="in1"]').prop('type', 'text');
  $form.find('input[name="in1"]').attr('placeholder', 'Cubo');
  $form.find('input[name="in2"]').prop('type', 'text');
  $form.find('input[name="in2"]').attr('placeholder', 'Autor');
  $form.find('input[name="in3"]').prop('type', 'text');
  $form.find('input[name="in3"]').attr('placeholder', 'URL');
  $form.find('input[name="in4"]').prop('type', 'number');
  $form.find('input[name="in4"]').attr('placeholder', 'Partes');
  $form.find('input[name="in5"]').prop('type', 'text');
  $form.find('input[name="in5"]').attr('placeholder', 'Formato');
}

var putType;

$('#getForm').submit(function(event){

  var token = $('#token').val();

  $.ajaxSetup({
    headers: {'x-access-token' : token}
  });

  console.log(token);
  event.preventDefault();

  var link = $('#back').attr('href')+'api/',
      getRadio = $('#getForm input[name="get"]'),
      checked = getRadio.filter(':checked').val();

  if(checked == 'radioC'){
    link = link +'cube';
    putType = 'cube';
    setPutToCube();
  }
  if(checked == 'radioA'){
    link = link +'alg';
    putType = 'alg';
    setPutToAlg();
  }
  if(checked == 'radioG'){
    link = link +'guide'
    putType = 'guide';
    setPutToGuide();
  }

  //var get = $.get(link, {token: token}, "application/json");
  var get = $.ajax({
    async : true,
    type : 'get',
    url: link
  });

  get.done(function(elmts, textStatus){
    if($('#get_body').hasClass()) $('#get_body').removeAttr('class');

    console.log(elmts);
    console.log(textStatus);

    $('#get_body').addClass('json');
    $('#get_body').text(JSON.stringify(elmts, null, "\t"));
    hljs.highlightBlock($('#get_body').get(0));
  });

  get.fail(function(jqxhr, textStatus, errorThrown){
    console.log(textStatus, errorThrown, errorThrown.msg);
  });

});
$('#putForm').submit(function(event){
  var token = $('#token').val();

  event.preventDefault();

  var link = $('#back').attr('href')+'api/'+putType,
      form = $(this),
      objID = $('#putID').val(),

      in1 = form.find('input[name="in1"]').val(),
      in2 = form.find('input[name="in2"]').val(),
      in3 = form.find('input[name="in3"]').val(),
      in4 = form.find('input[name="in4"]').val(),
      in5 = form.find('input[name="in5"]').val();

  link = link +'/'+objID;

  var putData;
  switch(putType){
    case 'cube':
      putData = {
        nombre : in1,
        brand  : in2,
        capas  : in3,
        kind   : in4
      };
      break;
    case 'alg':
      putData = {
        nombre       : in1,
        moves_number : in2,
        moves        : in3,
        applies_to   : in4,
        kind         : in5
      };
      break;
    case 'guide':
      putData = {
        cube     : in1,
        author   : in2,
        url      : in3,
        parts    : in4,
        format   : in5
      };
      break;
    default:
      putData = {};
      break;
  }
  putting = $.ajax({
    async: true,
    url   :link,
    type  :'put',
    data  : JSON.stringify(putData),
    contentType: "application/json"
  });
  putting.done(function(resData, textStatus){
            if($('#put_result').hasClass()) $('#put_result').removeAttr('class');
            console.log(resData);
            console.log(textStatus);
            $('#put_result').addClass('json');
            $('#put_result').text(JSON.stringify(resData, null, "\t"));
            hljs.highlightBlock($('#put_result').get(0));
          });
  putting.fail(function(jqxhr, textStatus, errorThrown){
            console.log(textStatus, errorThrown);
          });
});
