//--Script start

$('#loginForm').submit(function(event){

  event.preventDefault();

  var form = $(this),
      uname = form.find('input[name="user"]').val(),
      psswd = form.find('input[name="psswd"]').val(),

      url = form.attr('action');

  auth = $.post(url,{
    userName  : uname,
    password  : psswd
  }, "application/json");

  auth.done(function(resData, textStatus){
    if($('#login_result').hasClass()) $('#login_result').removeAttr('class');
    console.log(resData);
    console.log(textStatus);
    $('#login_result').addClass('json');
    $('#login_result').text(JSON.stringify(resData, null, "\t"));
    hljs.highlightBlock($('#login_result').get(0));
  });

  auth.fail(function(jqxhr, textStatus, errorThrown){
    console.log(textStatus, errorThrown);
    $('#login_result').text(textStatus);
  });

});
