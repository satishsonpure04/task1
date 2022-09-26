var logo = document.querySelector("#secMenu")
var menu = document.querySelector("#menu")

var flag = 0
menu.addEventListener("click",function(){
if(flag===0){
    logo.style.display = "block"
    flag =1
}else{
    logo.style.display = "none"
    flag= 0
}
    
})

function menushow(){
    console.log("click");

}