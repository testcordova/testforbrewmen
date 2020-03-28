$(document).ready(function() 
{
      getCookie();
      var settings = 
      {
        "url": "https://api.brewmen.online/api/Beers",
        "method": "GET",
        "timeout": 0,
        "headers": 
         {
            "Content-Type": "application/x-www-form-urlencoded"
         },
    beforeSend: function ()
    {
      //выравниваем по центру
     $('#myModalBoxLoading').css("margin-top", $(window).height() / 2 - $('.modal-content').height() / 2);
     //показываем окно
     $("#myModalBoxLoading").modal('show');
    },
    complete: function ()
    {
    },
    success: function ()
    {
      $("#myModalBoxLoading").modal("hide");
    }
  };
  $.ajax(settings).done(function (response)
  {
        for(var i=0;i<response.length;i++)
          {  
            var image;
            //проверка на то есть ли изображение у данного пива или нет
            //если нет то ставим изображение по умолчанию
            if(response[i].BeersPhoto.length==1)
            {
              image= response[i].BeersPhoto[0].Path;
            }else
            {
              image="https://market.brewmen.online/Uploads/Beers/0.jpg";
            }
            var myCol = $('<div class="col-sm-3 col-md-10 pb-2"></div>');
            var myCard=$('<div class="card border-info"><div class="card-body"><div class="float-right"><div class="dropdown d-inline-block"><button class="btn btn-success"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-bars"></i></button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Item 1</a><a class="dropdown-item" href="#">Item 2</a><a class="dropdown-item" href="#">Item 3</a></div></div></div><div class="row"><div class="col"><img src="'+image+'" align="center"  width="100px" height="100px" class="rounded-circle" /></div></div><div class="row"><div class="col"><br><b>Наименование:</b><br>'+response[i].Name+'</div></div><div class="row"><div class="col"><br><b>Описание:</b><br>'+response[i].Discription+'</div></div></div><div class="row"><div class="col"><div class="text-center"><button type="button" class="btn btn-success" onclick="myFunc();">Редактировать</button><br><br></div></div></div></div></div>'); 
           myCard.appendTo(myCol);
           myCol.appendTo('#contentPanel');
         }
       $("#myModalBoxLoading").modal("hide");
  });
});
function getCookie()
{
    if(document.cookie.length!=0)  
        {  
           var x = document.getElementById("loginTxt"); 
           var st=document.cookie;
           var from = st.indexOf('brewmenLogin=');
           var to= st.indexOf(';',from);
           var res= st.substring(from+13,to)
           x.innerHTML = "Вы зашли под логином: "+res;
        }  
        else  
        {  
           //alert("Cookie not available");  
        }  
} 
function clearForm()
{
  $("#contentPanel").empty();
}
function addCard()
{ 
  var myCol = $('<div class="col-sm-3 col-md-10 pb-2"></div>');
  var myCard=$('<div class="card border-info"><div class="card-body"><div class="float-right"><div class="dropdown d-inline-block"><button class="btn btn-success"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-bars"></i></button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Item 1</a><a class="dropdown-item" href="#">Item 2</a><a class="dropdown-item" href="#">Item 3</a></div></div></div><div class="row"><div class="col"><img src="https://market.brewmen.online/Uploads/Beers/Beers-12.jpg" align="center"  width="100px" height="100px" class="rounded-circle" /></div></div><div class="row"><div class="col"><br><b>Наименование:</b><br>Пшеничное/Weizen</div></div><div class="row"><div class="col"><br><b>Описание:</b><br>Классический пшеничный сорт пива.</div></div></div><div class="row"><div class="col"><div class="text-center"><button type="button" class="btn btn-success" onclick="myFunc();">Редактировать</button><br><br></div></div></div></div></div>');
  myCard.appendTo(myCol);
  myCol.appendTo('#contentPanel');
}
function myFunc()
{
  // alert("Здесь будет обработчик"); 
  $("#myModalBox").modal('show');
}