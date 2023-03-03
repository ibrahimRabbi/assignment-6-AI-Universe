//  data fetching function 
async function avoid(func) {
    loader(true)
    const cautch = await fetch("https://openapi.programming-hero.com/api/ai/tools");  
    const final = await cautch.json() 
    func(final.data.tools);
}

// 6 card generet function  
function createElement(value) {
    const sliced = value.slice(0, 6)
    createCards(sliced);  
}
avoid(createElement)
 


// see more button function 
document.getElementById("seeMore").addEventListener('click', function () {
      avoid(createCards);
 })



//  create card funtion 
function createCards(value) {
    const contentSection = document.getElementById("content-section");
    contentSection.textContent = ' ';
    
    value.forEach((element) => {
      const createDiv = document.createElement("div");
      createDiv.classList.add("col-10", "col-lg-4");
      createDiv.innerHTML = `<div class="card">
            <img src="${element.image}" class="card-img-top" style="height:200px;" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                 <ol>
                     <li>${element.features[0]}</li>
                     <li>${element.features[1]}</li>
                     <li>${element.features[0]}</li>
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
                <button onclick="modalData('${element.id}')" class="btn" data-bs-toggle="modal" data-bs-target="#createModal">
                <i class="modal-button fa-solid fa-circle-arrow-right"></i>
                </button>
                </div>
            </div>
        </div>`;
      contentSection.appendChild(createDiv);
        loader(false)
    });
    console.log(value)
     
}


//loader function

function loader(condition) {
    const loaderSec = document.getElementById("loaderSec");
    condition ? loaderSec.classList.remove('d-none') : loaderSec.classList.add('d-none')
}




// modal function 
async function modalData(id) {
  loader(true);
  const fetching = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
  const converting = await fetching.json();
   createModal(converting)
}

function createModal(value) {

    document.getElementById("description").innerText = value.data.description;

    document.getElementById("price1").innerText = value.data.pricing[0].price;
    document.getElementById("price2").innerText = value.data.pricing[1].price;
    document.getElementById("price3").innerText = value.data.pricing[2].price;


    document.getElementById("feature1").innerText = value.data.features[1].feature_name;
    document.getElementById("feature2").innerText = value.data.features[2].feature_name 
    document.getElementById("feature3").innerText = value.data.features[3].feature_name;
    
    
    document.getElementById("integrations1").innerText = value.data.integrations[0];
    document.getElementById("integrations2").innerText = value.data.integrations[1];
    document.getElementById("integrations3").innerText = value.data.integrations[2];   


    const imgCrd = document.getElementById("img");
    imgCrd.setAttribute('src', `${value.data.image_link[0]}`);

document.getElementById("title").innerText = value.data.input_output_examples[0].input
document.getElementById("card-text").innerText = value.data.input_output_examples[0].output;

    loader(false)
                         
}




 




 
