// function register(event) {
//     event.preventDefault();

//     const user = {
//         firstName: event.target[0].value,
//         lastName: event.target[1].value,
//         email: event.target[2].value,
//         password: event.target[3].value, 
//         confirmPassword: event.target[4].value
  
//     }

//     let result_fn = validateLength(user.firstName, 5)
//     let result_ln = validateLength(user.lastName, 5)
//     console.log(result_fn)
//     console.log(result_ln)

// }


// function validateLength(value, minLength = 2){
//     if (value.length >= minLength)
//         return true

//     return false
// }








/*
camelCase       boxOne          JS, C, c++, (C#)
PascalCase      BoxOne          C#, Pascal, VB
snake_case      box_one         Python, C, VB
kebab-case      box-one         CSS           

*/

// let elementById = document.getElementById("box-one");
// let elementsByClassName = document.getElementsByClassName("box");
// let elementsByName = document.getElementsByName("info");
// let elementsByTagName = document.getElementsByTagName("div");
// let element = document.querySelector(".box")
// let elements = document.querySelectorAll(".box")

// elementsByClassName[0].innerText = "Fadi";
// elementsByClassName[1].innerText = "Khadjar"; 


/* 
hämtar in classen box från html där forEach sedan läggs in för iterera (göra handling på element) style på box classen
*/

// const boxes = document.querySelectorAll(".box");

// boxes.forEach(Element => {
//     Element.style.backgroundColor = "#fdabcf"
//     Element.style.padding = "20px"

// })


// const boxOne = document.querySelector("#box-one")


// function changeState(elementName, state){
//     const element = document.querySelector(elementName)
//     const name = element.querySelector(".name")
//     const status = element.querySelector(".status")

//     if (state){
//         element.classList.add('active')
//         element.classList.remove('inactive')
//         status.innerText = `${name.innerText} är aktiv`
        
//     }
//     else{
//         element.classList.add('inactive')
//         element.classList.remove('active')
//         status.innerText = "inaktiv"
//         status.innerText = `${name.innerText} är aktiv`
//     }
// }

// changeState("#box-one", true)
// changeState("#box-two", false)

/*
------------------------------------------------------------
*/

// const main = document.querySelector("main");
// const users = [
//     {
//         firstName: "Fadi", 
//         lastName: "Khadjar",
//         isActive: false
//     },
//     {
//         firstName: "Emilia", 
//         lastName: "Kremska",
//         isActive: true
//     },

//     {
//         firstName: "Micha", 
//         lastName: "MichMich",
//         isActive: true
//     }
// ]

// for (let user of users){


//     main.innerHTML += 
//     `
//         <div class="${user.isActive ? "active":"inactive"}">
//             <p>${user.firstName} ${user.lastName}</p>
//             <div>${user.isActive ? "Aktiv":"Inaktiv"}</div>
//         </div>
        
//     `

// }

// ---------------------------------------

// I nedanstående fall så är det viktigt att elementet/id:t finns med i html annars så funkar inte funktionaliten i Javascript
//  EVENT listners

// const main = document.querySelector("main");
// const users = [
//     {
//         firstName: "Fadi", 
//         lastName: "Khadjar",
//         isActive: false
//     },
//     {
//         firstName: "Emilia", 
//         lastName: "Kremska",
//         isActive: true
//     },

//     {
//         firstName: "Micha", 
//         lastName: "MichMich",
//         isActive: true
//     }
// ]

// const addBtn = document.querySelector("#addBtn")

// addBtn.addEventListener("click", (event)=> {
//     main.innerHTML = ""
//     for (let user of users){


//     main.innerHTML += 
//     `
//         <div class="${user.isActive ? "active":"inactive"}">
//             <p>${user.firstName} ${user.lastName}</p>
//             <div>${user.isActive ? "Aktiv":"Inaktiv"}</div>
//         </div>
        
//     `
// }
// })

// const clearBtn = document.querySelector("#clearBtn")
// clearBtn.addEventListener("click", (event)=> {
//     main.innerHTML =""
// })

// ------------------------------------------------------

// Ett annat sätt att göra EVENT listners. När vi skriver i källkoden, tex som nedan så skrevs onclick="showList" på ena button i HTML och onclick="clearList" på andra button.
// Detta gör att funktionaliten är fortfarande kvar i JS och påverkas inte om vi tex tar bort element från HTML.

// const main = document.querySelector("main");
// const users = [
//     {
//         firstName: "Josh", 
//         lastName: "Johnsson",
//         isActive: false
//     },
//     {
//         firstName: "Fredd", 
//         lastName: "Freddysson",
//         isActive: true
//     },

//     {
//         firstName: "Mich", 
//         lastName: "MichMich",
//         isActive: true
//     }
// ]

// function clearList(){
//     main.innerHTML = ""

// }

// function showList (){
//     clearList()
//     for (let user of users){
//         main.innerHTML +=

//             `
//                 <div class="${user.isActive ? "active": "inactive"}">
//                     <p>${user.firstName} ${user.lastName}</p>
//                     <div>${user.isActive ? "Aktiv" : "Inaktiv"}</div>
//                 </div>
            
//             `
//     }
// }

// ---------------------------------------------------------------

// nedanstående är funktion fast skriven på ett annat sätt. 
// const clear = () => {
// }

// ------------------------------------------------------


const btnOpen = document.querySelector('#btnOpen'); 
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');


function openMobileMenu(){
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    main.setAttribute('inert', '');
    bodyScrollLockUpgrade.disableBodyScroll(body);
    btnClose.focus();
  
}

function closeMobileMenu(){
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert','');
    main.removeAttribute('inert');
    bodyScrollLockUpgrade.enableBodyScroll(body);
    btnOpen.focus();
    

    setTimeout(() => {
        topNavMenu.style.transition = 'none';
    }, 500);
}

function setupTopNav(e){
    if (e.matches) {
        //is mobile
        console.log('is mobile');
        topNavMenu.setAttribute('inert','');
        topNavMenu.style.transition = 'none';
    }
    else {
        //is tablet/desktop
        console.log('is desktop');
        topNavMenu.removeAttribute('inert');
        // closeMobileMenu();
    }
}


setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
    setupTopNav(e);
});


