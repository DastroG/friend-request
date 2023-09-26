var stats = document.querySelector("h5");
var add= document.querySelector("#add");
var flag=0;

add.addEventListener("click",function(){
   if(flag == 0){
    stats.innerHTML="FRIENDS";
    stats.style.color="red";
    add.innerHTML="Remove Friend";
    flag=1;
   }
   else{
    stats.innerHTML="NEW";
    stats.style.color="blueviolet";
    add.innerHTML="Add Friend";
    flag=0;
   }
})
