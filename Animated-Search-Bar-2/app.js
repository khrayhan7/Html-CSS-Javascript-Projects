const SearchIcon = document.querySelector(".fa-search");
const Container = document.querySelector(".container");

SearchIcon.addEventListener("click",function(){
    Container.classList.toggle("befClick");
})