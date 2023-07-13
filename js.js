
function ffunction(id){

    id.style.color="black";
    document.querySelectorAll(`i:not(:is(#${id}))`).style.color="white";
}