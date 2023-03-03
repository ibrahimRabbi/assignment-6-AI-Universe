//  data fetching function 
async function avoid(func) {
    loader(true)
    const cautch = await fetch("https://openapi.programming-hero.com/api/ai/tools");  
    const final = await cautch.json() 
    func(final.data.tools);
}

document.getElementById("sortBtn").addEventListener("click", () => {
  
   avoid(sortingFunc)
});

 


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
      createDiv.classList.add("col-10", "col-lg-4" ,'mx-auto');
      createDiv.innerHTML = `<div class="card">
            <img src="${element.image}" class="card-img-top" style="height:200px;" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                 <ol>
                     <li>${element.features[0]}</li>
                     <li>${element.features[1]}</li>
                     <li>${element.features[2]}</li>
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
    

    
}




//loader function

function loader(condition) {
    const loaderSec = document.getElementById("loaderSec");
    condition ? loaderSec.classList.remove('d-none') : loaderSec.classList.add('d-none')
}




// fetching modal function 
async function modalData(id) {
  const fetching = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
  const converting = await fetching.json();
   createModal(converting)
}





function createModal(value) {

    document.getElementById("description").innerText = value.data.description;
    // pricing function 
    const price1 = document.getElementById("price1");
    if (value.data.pricing[0].price == 0 || value.data.pricing[0].price == "No cost") {
        price1.innerText = "free of cost"
    } else {
        price1.innerText = value.data.pricing[0].price
    }
    
    const price2 = document.getElementById("price2");
    if (value.data.pricing[1].price == 0 || value.data.pricing[1].price == "No cost") {
        price2.innerText = "free of cost"
    } else {
        price2.innerText = value.data.pricing[1].price
    }

    const price3 = document.getElementById("price3");
    if ( value.data.pricing[2].price == 0 || value.data.pricing[2].price == "No cost") {
      price3.innerText = "free of cost";
    } else {
      price3.innerText = value.data.pricing[2].price;
    }

      
    
     

// feature_name function 
    document.getElementById("feature1").innerText = value.data.features[1].feature_name;
    document.getElementById("feature2").innerText = value.data.features[2].feature_name 
    document.getElementById("feature3").innerText = value.data.features[3].feature_name;
    
    // integrations function 
    document.getElementById("integrations1").innerText = value.data.integrations[0] ? value.data.integrations[1] : "data not found";
    document.getElementById("integrations2").innerText = value.data.integrations[1] ? value.data.integrations[1] : 'data not found'
    document.getElementById("integrations3").innerText = value.data.integrations[2] ? value.data.integrations[2] : 'data not found'

//modal image function
    const imgCrd = document.getElementById("img");
    imgCrd.setAttribute('src', `${value.data.image_link[0]}`);
//modal title function
    document.getElementById("title").innerText = value.data.input_output_examples[0].input
    const cardText = value.data.input_output_examples[0].input
    document.getElementById("card-text").innerText = cardText  ? cardText : 'no! not yet take a break'
    
console.log(value)
    
//accorcy function 
   const accorcy=  document.getElementById("accorcy")
          
    if (value.data.accuracy.score !== null) {
        const accuracyValue = value.data.accuracy.score;
        let acch = accuracyValue.toString();
        let toArry = acch.split(".");
        toArry.shift();
        const toString = toArry.toString();
        accorcy.innerText = `accuracy ${toString}%`;
    } else {
        accorcy.innerText = ""
    }     
                         
}




  




 
