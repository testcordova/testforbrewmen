$(document).ready(function() 
{
    $("form[name='registration']").validate(
    {
      rules: 
      {
        email:
        {
            required: true,
            email: true
        },
        password: 
        {
            required: true
        }
      },
     messages: 
      {
        email: 
        {
            required: "Please enter a login",
            email: "Please enter a valid username"
        },
        password: 
        {
            required: "Please provide a password"
        },
      },
      submitHandler: function(form)
      {
        myRequest() ;
      }
   });
});

function myRequest() 
{
    var ifConnected = window.navigator.onLine;
    if (ifConnected)
     {
     // alert('Connection available');
    } else
    {
  alert('Connection not available');
    }
    var password = document.getElementById("password").value;
    var email= document.getElementById("email").value;
    var dialog = document.getElementById("myDialog");
    var settings = 
    {
        "url": "https://api.brewmen.online/api/token",
        "method": "POST",
        "timeout": 0,
        "headers": 
        {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data":
        {
          "username": email,
          "password": password,
          "grant_type": "password"
        },
        beforeSend: function ()
        {
        $('#myDialog').css("margin-top", $(window).height() / 2 - $('.modal-content').height() / 2);
        $("#myDialog").modal("show");
        },
         success : function()
         { 
           $("#myDialog").modal("hide");
            document.location.href = "menu.html";
         },
         error: function (jqXHR, exception)
         {
          $("#myDialog").modal("hide");
           var msg = '';
            if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
            msg = 'Time out error.';
            } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
            } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg);
           $("#myDialog").modal("hide");
          //alert("вы ввели не правильный пароль");
         }
    };
    $.ajax(settings).done(function (response)
    {
      console.log(response);
    });
}