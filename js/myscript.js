
var table,plant,headphone;
table = prompt(" Do YOU NEED AN OFFICE DESKTOP? (please answer with yes and no)");
plant=prompt("DO TOU NEED AN Amazonica Plant? (please answer with yes and no)");
headphone=prompt("DO YOU NEED AN APPLE HEADPHONE? (please answer with yes and no)");

if(table=='y' || table=='yes' ){
    $(document).ready(function(){
        $(".intro").css("background-color","yellow");
      });

}
if(plant=='y' || plant=='yes' ){
    $(document).ready(function(){
        $(".intro2").css("background-color","yellow");
      });

}
if(headphone=='y' || headphone=='yes' ){
    $(document).ready(function(){
        $(".intro3").css("background-color","yellow");
      });

}