let list = document.querySelectorAll("ul li a");
let search = document.querySelector(".form");
let search2 = document.querySelector(".form .fas");
let menuu = document.querySelector(".toggel-menu");
let mainUl = document.querySelector("nav ul");
let newinput = document.createElement("input");
let dd = document.querySelector(".form .fa-sharp");



search2.addEventListener("click", () => {
    search.style.marginLeft = "270px";
    console.log(search2)
    newinput.setAttribute("type", "text");
    newinput.setAttribute("class", "ff");
    search.appendChild(newinput);
    newinput.onfocus;
    newinput.style.display = "block";
    dd.style.display = "block";
});

menuu.addEventListener("click", () => {
    //text-shadow: ;
    if (mainUl.style.display == "flex") {
        mainUl.toggleAttribute(mainUl.style.display = "none")
        menuu.style.textShadow = "none";
        menuu.style.color = "white";
    }
    else {
        mainUl.toggleAttribute(mainUl.style.display = "flex")
        menuu.style.textShadow = "1px 1px 15px #19c8fa";
        menuu.style.color = "#19c8fa";
    }
    console.log(mainUl);

});

dd.addEventListener("click", () => {

    search.style.marginLeft = "30px";
    newinput.style.display = "none";
    dd.style.display = "none";
});


list.forEach((li) => {
    li.addEventListener("click", (e) => {
        //Remove Active for all li...
        list.forEach((li) => {
            li.classList.remove("active");
        });
        //add Active class to current  element...
        e.currentTarget.classList.add("active");
    });
});


//bacround and arrwo..
let leftArrow = document.querySelector(".landing .fa-angle-left");
let rightArrow = document.querySelector(".landing .fa-angle-right");
let Thecircles = document.querySelectorAll(".landing .bullets li");
let backgroundImage1 = document.querySelector(".landing");
let backgroundForText = document.querySelector(".landing .text");
let textH2 = document.querySelector(".content h2");
let textP = document.querySelector(".content p");


function deleteallActive() {
    //remove all active2 for allcircles
    Thecircles.forEach((e) => {
        e.classList.remove("active2");
    });
}
function activeA0() {
    deleteallActive();
    Thecircles[0].setAttribute("class", "active2");
    //backgroundImage[0]
    backgroundImage1.style.backgroundImage = 'url("pac/Picsart_23-06-28_02-41-33-792.jpg")';
    textH2.textContent = "Start Learning !";
    textP.textContent = "Create an account and follow the courses, the components of 13 courses, where the first course begins with teaching the basics and the last course ends with high-level and professional !!";
}
function activeB1() {
    deleteallActive();
    //backgroundImage[1]
    backgroundImage1.style.backgroundImage = 'url("pac/Picsart_23-06-28_02-19-50-343.jpg")';
    Thecircles[1].setAttribute("class", "active2")
    textH2.textContent = "Welcome to the MR3_2004 page.";
    textP.textContent = "Here you will learn many things about programming and hacking";
}

function activeC2() {
    deleteallActive();
    //backgroundImage[2]
    backgroundImage1.style.backgroundImage = 'url("pac/Picsart_23-06-28_02-14-58-741.jpg")';
    //remove background For Text
    backgroundForText.style.display = "none"
    Thecircles[2].setAttribute("class", "active2")
}
// left Arrow
leftArrow.addEventListener("click", () => {
    backgroundForText.style.display = "block";
    if (Thecircles[1].classList.contains("active2")) {
        activeA0()
    }
    else if (Thecircles[0].classList.contains("active2")) {
        activeC2()
    }

    else {
        activeB1()
    }

});

// left right
rightArrow.addEventListener("click", () => {
    backgroundForText.style.display = "block";
    if (Thecircles[1].classList.contains("active2")) {
        activeC2()
    }
    else if (Thecircles[2].classList.contains("active2")) {
        activeA0()
    }
    else {
        activeB1()
    }
});






