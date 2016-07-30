$('#regForm').submit(function(event){

  event.preventDefault();

  var form = $(this),
      uname = form.find('input[id="user_name"]').val(),
      psswd = form.find('input[id="user_psswd"]').val(),
      psswd2 = form.find('input[id="psswd2"]').val(),

      domain = $('#back').attr('href')+'register';

      if(psswd != psswd2 || psswd == '' || psswd2 == ''){
        $('#reg_result').text("Passwords don't match");
      }else{

        var register = $.post(domain, {
          name : uname,
          password : psswd
        }, "application/json");

        register.done(function(resData, textStatus){
          if($('#reg_result').hasClass()) $('#reg_result').removeAttr('class');
          console.log(resData);
          console.log(textStatus);
          $('#reg_result').addClass('json');
          $('#reg_result').text(JSON.stringify(resData, null, "\t"));
          hljs.highlightBlock($('#reg_result').get(0));
        });

        // handle errors
        register.fail(function(jqxhr, textStatus, errorThrown) {
          console.log(textStatus, errorThrown, errorThrown.msg)
        });
      }

});
