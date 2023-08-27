const AddButn = document.querySelector(".Butn");
const animeContent = document.querySelector(".anime-Content");
const animeImg = document.querySelector(".Anime-Img");
const AnimeName = document.querySelector(".Anime-Name");



AddButn.addEventListener("click",function(){
    animeContent.style.display = "block";

    // fetch ('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(users =>  showData(users))
    // .catch(err => console.log(err));

    // showData = users =>{
    //     users.forEach(el => {
    //         const createEl = document.createElement('p');
    //         createEl.innerHTML = ` Name : ${users[0].username} `;
    //         animeContent.appendChild(createEl);
    //     });
    // }
    const Api_Url = "https://api.catboys.com/img";
    async function imgRender(){
        try{
            AddButn.disabled = true;
            AddButn.innerText = "Loading...";
            AnimeName.innerText = "Updating";
            animeImg.src = "spinneer.svg";

        const res = await fetch(Api_Url);
        const users = await res.json();
        // return users ;
        AddButn.disabled = false;
        AddButn.innerText = "Get Anime";
        animeImg.src = users.url;
        AnimeName.innerText = users.artist;

        }catch(err){
           
        console.error(err);
        
        }
    }
     imgRender();
     
    
})

//src="images/Anime.jpg" alt="" height="220px" width="240px"
