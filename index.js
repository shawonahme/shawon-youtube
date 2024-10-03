//category code start here
function loadData(){
    fetch  ("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayData(data.categories))
}


function displayData(catagory){
    const mycataContainer = document.getElementById('catagroy_container')

  catagory.forEach(showData => {
    
    const cataBtn = document.createElement('div');
   
   
    cataBtn.innerHTML = `<button onclick="loadCategroy(${showData.category_id})" class ='btn bg-red-500 text-white hover:text-black' > ${showData.category}</button>`;
    
    mycataContainer.appendChild(cataBtn)

  });

}
loadData()
// button click by showing category videos
const loadCategroy = (id) =>{

  fetch  (`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then(res => res.json())
  .then(data => videosDataShow(data.category))

}
// button click by showing category videos

//categroy code end here

//card code start here 

function cardData(){
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
  .then(res => res.json())
  .then(data => videosDataShow(data.videos))
}


function videosDataShow(videosData){
  const videocontainer = document.getElementById('videocontainer');
 
  videocontainer.innerHTML ='';
   videosData.forEach(showVideos =>{

    const cardDiv = document.createElement('div');
  

    cardDiv.innerHTML = `
                    <figure class = 'w-[100%] relative h-[200px]  object-cover' >
                      <img class= 'h-full w-full'
                  
                        src= ${showVideos.thumbnail}/>
                       ${showVideos.others.posted_date.length == 0 ?` `: ` <p class='absolute rounded-md  bg-black right-2 text-white p-1 bottom-2'>${postDate(showVideos.others.posted_date)}</p>`} 

                    </figure>
                    <div class="flex gap-3 py-4 justify-start items-center">
                      <div><img class= 'rounded-full w-10 h-10 object-cover'
                  
                        src= ${showVideos.authors[0].profile_picture}/></div>
                      <div>
                      <h3 class=' text-xl font-bold'>${showVideos.title}</h3>
                      
                     <div class ='flex items-center gap-2'> <p class = ' text-gray-500 text-md' > ${showVideos.authors[0].profile_name}</p> ${showVideos.authors[0].verified == true? '<img class="w-4 h-4" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"/>':' '}</div>
                     <p class =' text-gray-500 text-md'> ${showVideos.others.views} views </p>
                      </div>
                      

                    </div>
                  `;

            videocontainer.append(cardDiv)
    
   })
}
cardData()
//card code end here 
//post date show code start here 
function postDate(dateTime){

  const hour = parseInt(dateTime/3600);
  const remainSecond = dateTime % 3600;
  const minute = parseInt(remainSecond /60);
  const sec =dateTime % 60
  

  return `${hour} hour ${minute} minute ${sec} seconds`
    
  
}



//post date show code end here 