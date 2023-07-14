
function ffunction(id){

    id.style.color="black";
    document.querySelectorAll(`i:not(:is(#${id}))`).forEach(Element=>{
        Element.style.color="white";
    })
    ;
}