
var cont = document.createElement("DIV");
cont.class = "container";
//cont.class.width = "600px";
//cont.class.height = "800px";
var btns = [
  {
    "name" : "Create Deductible",
    "function" : "deductible('new')"
  }
];
for(i = 0; i < btns.length; i++){
  btns[i].id = "btn-" + i;
}
function deductible(x){
  if(x = 'new'){
    var y = document.createElement("INPUT");
  }
}
