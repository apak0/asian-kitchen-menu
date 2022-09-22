const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Sayfa ilk yüklendiğinde menüdeki bütün ürünleri gösterilmesini sağlayan event listener
document.addEventListener("DOMContentLoaded", showAllMenu)

// Menüler için ayrı ayrı arraylerin oluşturulması
let copyMenuKorea = menu.filter(item => item.category ==="Korea")
let copyMenuJapan = menu.filter(item => item.category ==="Japan")
let copyMenuChina = menu.filter(item => item.category ==="China")

//Yemkeklerin listeleneceği Sayfanın bulunduğu div'in değişkene atanması
const homePage = document.querySelector(".section-center");

//Butonların oluşturulması ve butonlara event eklenmesi
const menuButtons = document.querySelector(".btn-container")
//All button Start
// 1. Create button
let allBtn = document.createElement("button");
allBtn.innerHTML = "All";
allBtn.className ="all btn btn-outline-dark me-3"

// 2. Append somewhere
menuButtons.appendChild(allBtn);

// 3. Add event handler
allBtn.addEventListener ("click", function() {
  homePage.innerHTML = ""
  let allFood =  menu.map(function(item){
   
      homePage.innerHTML +=`
    
      <div class="menu-items col-lg-6 col-sm-12">
      <img src="${item.img}" class="photo" alt="">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">
          ${item.desc}
        </div>
      </div>
    </div>
      `
  });
});
// All button END
//////////////////////////////////////////////////////////////////////////////////////

//Korea button Start
// 1. Create button
let koreaBtn = document.createElement("button");
koreaBtn.innerHTML = "Korea";
// koreaBtn.style.marginLeft= "15px";
koreaBtn.className ="all btn btn-outline-dark me-3"
// 2. Append somewhere
menuButtons.appendChild(koreaBtn);

// 3. Add event handler
koreaBtn.addEventListener ("click", function() {
  homePage.innerHTML = ""
  let koreaFood =  menu.map(function(item){
    if(item.category ==="Korea"){
      homePage.innerHTML +=`
    
      <div class="menu-items col-lg-6 col-sm-12">
      <img src="${item.img}" class="photo" alt="">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">
          ${item.desc}
        </div>
      </div>
    </div>
      `
    }
  });
});
// Korea button END
//////////////////////////////////////////////////////////////////////////////////////

//Japan button Start
// 1. Create button
let japanBtn = document.createElement("button");
japanBtn.innerHTML = "Japan";
japanBtn.className ="all btn btn-outline-dark me-3"
// 2. Append somewhere
menuButtons.appendChild(japanBtn);

// 3. Add event handler
japanBtn.addEventListener ("click", function() {
  homePage.innerHTML = ""
  let japanFood =  menu.map(function(item){
    if(item.category ==="Japan"){
      homePage.innerHTML +=`
    
      <div class="menu-items col-lg-6 col-sm-12">
      <img src="${item.img}" class="photo" alt="">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">
          ${item.desc}
        </div>
      </div>
    </div>
      `
    }
  });
});
// China button END
//////////////////////////////////////////////////////////////////////////////////////

//All button Start
// 1. Create button
let chinaBtn = document.createElement("button");
chinaBtn.innerHTML = "China";
chinaBtn.className ="all btn btn-outline-dark me-3"
// 2. Append somewhere
menuButtons.appendChild(chinaBtn);

// 3. Add event handler
chinaBtn.addEventListener ("click", function() {
  homePage.innerHTML = ""
  let chinaFood =  menu.map(function(item){
    if(item.category ==="China"){
      homePage.innerHTML +=`
    
      <div class="menu-items col-lg-6 col-sm-12">
      <img src="${item.img}" class="photo" alt="">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">
          ${item.desc}
        </div>
      </div>
    </div>
      `
    }
  });
});

// China button END
//////////////////////////////////////////////////////////////////////////////////////

// Bütün menünün gösterilmesini sağlayan fonksiyon
function showAllMenu (){
  const homePageFood = menu.map(function(item){
    homePage.innerHTML +=`
    
    <div class="menu-items col-lg-6 col-sm-12">
    <img src="${item.img}" class="photo" alt="">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
        ${item.desc}
      </div>
    </div>
  </div>
    `
  });
}

