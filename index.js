function loadData(){
    fetch  ("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayData(data.categories))
}


function displayData(catagory){
    const mycataContainer = document.getElementById('catagroy_container')

  catagory.forEach(showData => {
    
    const cataBtn = document.createElement('button');
    cataBtn.classList ='btn  hover:bg-red-600   hover:text-white'
   
    cataBtn.innerText = showData.category;
    
    mycataContainer.appendChild(cataBtn)

  });

}
loadData()