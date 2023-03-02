 
async function avoid(func) {
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
     const nulTitle = "Features is not avilable";
    const inject = document.getElementById("inject");
    
    value.forEach((element) => {
      const createDiv = document.createElement("div");
      createDiv.classList.add("col-10", "col-lg-4");
      createDiv.innerHTML = `<div class="card">
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">${
                  element.description ? element.description : nulTitle
                }</p>
                <hr/>
                <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5 class="card-title">${element.name}</h5>
                  <p>${element.published_in}<p/>
                </div>
                <button>srch</button>
                </div>
            </div>
        </div>`;
      inject.appendChild(createDiv);
      console.log(element);
    });
}




 

