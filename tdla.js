$("ol").on("click","li",function(){
$(this).css("background-color","grey");
$(this).css("text-decoration","none");
});
$("ol").on("dblclick","li",function(){
$(this).css("color","black");
$(this).css("text-decoration","none");
});
$("ol").on("click","span",function(event){
   $(this).parent().remove();
    event.stopPropagation();
});
$("button").on("click",function()
{
  var todol = $("input").val();
  $("ol").append('<li><span><i class="fas fa-trash-alt"></i></span>' + todol+"</li>");
  $("input").val("pqr");
  var todol = $("output").val();
  $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span>' + todol+"</li>");
  $("output").val("xyz");
});
