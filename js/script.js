//Declaring Global variable
let showingSubMenu = false;
let subMenuEl = document.getElementById("sub-menu");
let topMenuEl = document.getElementById("top-menu");
let mainEl = document.querySelector("main");
let bodyel = document.querySelector("body");

// Menu data structure

const menuLinks = [
  //0
  { text: "about", href: "/about" },
  //1
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
//2
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
//3
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];


//styles main element

mainEl.style.setProperty("background-color", "var(--main-bg");

//adds h1 element to main

let h1 = document.createElement("h1");
// bodyel.appendChild(h1);
h1.innerText = "SEI Rocks!";
mainEl.appendChild(h1);
mainEl.setAttribute("class", "flex-ctr");

//formats link bar

topMenuEl.style.setProperty("height", "100%");
topMenuEl.style.setProperty("background-color", "var(--top-menu-bg)");
topMenuEl.setAttribute("class", "flex-around");

//attach event listener to top menu

topMenuEl.addEventListener("click", topClick);

// assigns values to menu links and converts object elements to links

menuLinks.forEach(function (link) {
  let linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});

//declaring and styling sub-menu

subMenuEl.style.setProperty("height", "100%");
subMenuEl.style.setProperty("background-color", "var(--sub-menu-bg)");
subMenuEl.style.setProperty("position", "absolute");
subMenuEl.style.setProperty("top", "0");
subMenuEl.setAttribute("class", "flex-around");

//define top menu links

let topMenuLinks = document.querySelectorAll("#top-menu a");
let bottomMenuLinks = document.querySelectorAll("#sub-menu a")

//console logs
console.dir(topMenuEl);
console.dir(topMenuLinks);

//topMenuEl function delaration

function topClick(event) {
  event.preventDefault();
  let link = event.target;

  if (link.tagName !== "A") {
    return;
  }
  // console.log(link.tagName);
  // console.log(link.textContent);

  //Task 5.3
  if (link.classList.contains("active")) {
    link.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  //Task 5.5
  link.setAttribute("class", "active");

  //Task 5.6
//copied from solution... need help
  var linkData = menuLinks.find(function(linkObj) {
    return linkObj.text === link.textContent;
  });

  showingSubMenu = 'subLinks' in linkData;
  if (link.textContent === 'about'){
    h1.innerText = 'about';
}

  //Task 5.7
  if (showingSubMenu){
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top ='100%';
    }else{
    subMenuEl.style.top ='0';}
  
}

function buildSubMenu(arr){
  subMenuEl.textContent = '';
  arr.forEach(function(linkData){
    let subLink = document.createElement('a');
    subLink.setAttribute('href',linkData.href);
    subLink.textContent = linkData.text;
    subMenuEl.appendChild(subLink);
    
  })
}
subMenuEl.addEventListener('click', (function(event){
  event.preventDefault();
  let subClick = event.target;
  if (subClick.tagName !== "A"){
    return;
  }
  console.log(subClick.textContent);
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  })
  h1.textContent = subClick.textContent;



}))