function clickConfirm(){
 var c = confirm('Are you sure you want to continue');
 if(c){
   var div = document.getElementById("msg");
   div.innerHTML = "You clicked 'Yes'";
 }else{
   var div = document.getElementById("msg");
   div.innerHTML = "You clicked 'Cancel'";
 }
}
