//Start the script

var deleteType;

$('#getForm').submit(function(event){

  var token = $('#token').val();

  $.ajaxSetup({
    headers: {'x-access-token' : token}
  });

  event.preventDefault();

  var link = $('#back').attr('href')+'api/',
      getRadio = $('#getForm input[name="get"]'),
      checked = getRadio.filter(':checked').val();

  if(checked == 'radioC'){
    link = link +'cube';
    deleteType = 'cube';
  }
  if(checked == 'radioA'){
    link = link +'alg';
    deleteType = 'alg';
  }
  if(checked == 'radioG'){
    link = link +'guide'
    deleteType = 'guide';
  }
  if(checked == 'radioB'){
    link = link + 'brand';
    deleteType = 'brand';
  }

  //var get = $.get(link, {token : token}, "application/json");
  var get = $.ajax({
    async : true,
    type : 'get',
    url: link,
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

$('#deleteForm').submit(function(event){

  event.preventDefault();

  var form = $(this),
      elmtID = form.find('input[id="deleteID"]').val(),
      link = $('#back').attr('href') + 'api/' + deleteType+'/'+elmtID;

  var deleting = $.ajax({
    async:   true,
    url:     link,
    type:    'delete'
  });

  deleting.done(function(resData, textStatus){
            if($('#delete_result').hasClass()) $('#delete_result').removeAttr('class');
            console.log(resData);
            console.log(textStatus);
            $('#delete_result').addClass('json');
            $('#delete_result').text(JSON.stringify(resData, null, "\t"));
            hljs.highlightBlock($('#delete_result').get(0));
          });
  deleting.fail(function(jqxhr, textStatus, errorThrown){
            console.log(textStatus, errorThrown);
          });

});
