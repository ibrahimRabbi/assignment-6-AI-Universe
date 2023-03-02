 
async function avoid(func) {
    loader(true)
    const cautch = await fetch("https://openapi.programming-hero.com/api/ai/tools");  
    const final = await cautch.json() 
    func(final.data.tools);
}


function createElement(value) {
    const sliced = value.slice(0, 6)
    cC(sliced)  
}
avoid(createElement)
 


document.getElementById("seeMore").addEventListener('click', function () {
      avoid(cC)
 })



function cC(value) {
    const inject = document.getElementById("inject");
    
    value.forEach((element) => {
      const createDiv = document.createElement("div");
      createDiv.classList.add("col-10", "col-lg-4");
      createDiv.innerHTML = `<div class="card">
            <img src="${element.image}" class="card-img-top" style="height:200px;" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                 <ol>
                     <li>Natural language processing</li>
                     <li>Contextual understanding</li>
                     <li>Text generation</li>
                 </ol>
                <hr/>
                <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5 class="card-title">${element.name}</h5>
                  <div class="date-area d-flex align-items-center justify-content-center gap-1">
                  <i class="fa-solid fa-calendar-days mb-3"></i>
                  <p>${element.published_in}<p/>
                  </div>
                </div>
                <a href="" class="btn">
                <i class="modal-button fa-solid fa-circle-arrow-right"></i>
                </a>
                </div>
            </div>
        </div>`;
      inject.appendChild(createDiv);
       loader(false)
    });
}

//loader function

function loader(condition) {
    const loaderSec = document.getElementById("loaderSec");
    condition ? loaderSec.classList.remove('d-none') : loaderSec.classList.add('d-none')
}




 

