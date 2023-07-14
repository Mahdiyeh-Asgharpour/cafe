
function ffunction(id){

    
    document.querySelectorAll("i").forEach((item)=>{
        if(item.id==id){
            document.getElementById(id).style.color="black";
        }
        else{
            item.style.color="white";
        }
       
    })
    ;
}