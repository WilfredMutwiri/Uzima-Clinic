
//the services section
serviceLink=document.querySelector("#attendance a");
consultLink=document.querySelector("#consultation a");
labLink=document.querySelector("#lab a");
serviceLink.addEventListener("click",linkclick);
consultLink.addEventListener("click",linkclick);
labLink.addEventListener("click",linkclick);
function linkclick(){
    alert("Content not available. Site under development!")
}
// about section
let about=document.querySelector("#aboutContent a");
about.addEventListener("click",aboutclick);

let aboutChange=document.querySelector("#aboutContent a");
aboutChange.addEventListener("mouseover",aboutover);
aboutChange.addEventListener("mouseleave",aboutleave);
function aboutleave(){
    aboutChange.innerHTML="More About Us";

}

function aboutover(){
    aboutChange.innerHTML="learn more";

}
function aboutclick(){
    alert("Join us to learn more!");
}


// the quizes section

let quizOne=document.querySelector("#quizOne")
let quizTwo=document.querySelector("#quizTwo")
let quizThree=document.querySelector("#quizThree")
let quizFour=document.querySelector("#quizFour")
let quizFive=document.querySelector("#quizFive")
let quizSix=document.querySelector("#quizSix")


quizOne.addEventListener("click",reveal);
quizTwo.addEventListener("click",reveal);
quizThree.addEventListener("click",reveal);
quizFour.addEventListener("click",reveal);
quizFive.addEventListener("click",reveal);
quizSix.addEventListener("click",reveal);


function reveal(){
    let quiz=this.attributes["data-quiz"].value;
    let answer=document.getElementById(quiz);
    if(answer.className==="hide"){
        answer.className="";
    }else{
        answer.className="hide";
    }
}

let ctaButton=document.getElementById("cta");
ctaButton.addEventListener("click",ctaClick);
function ctaClick(){
    alert("Fill the sign Up form to Join us!");
}  
/* 
let faq=document.querySelector("#quizes");
faq.addEventListener("mouseover",faqOver);
function faqOver(){
    let span=document.getElementsByName("#quizes");
    span.style.color="red";
}
*/
// techuse section
let tech1=document.querySelector("#f1 a");
let tech2=document.querySelector("#f2 a");
let tech3=document.querySelector("#f3 a");

tech1.addEventListener("click",techclick);
tech2.addEventListener("click",techclick);
tech3.addEventListener("click",techclick);

function techclick(){
    let member=prompt("Are you a member of Uzima clinic?( 1.YES  2.NO )");
    if(member==1){
        alert("Dear member. The site is still under development. Sorry for the inconvenience.")
    }else if(member==2){
        alert("Kindly sign up to continue reading.")
    }else{
        alert("Wrong choice. Select 1 or 2 to proceed!")
    }
}
// form section
let formLabel=document.querySelector("#SignUpForm");
formLabel.addEventListener("paste",formPaste);
formLabel.addEventListener("cut",formPaste);
function formPaste(e){
    alert("Cut and paste not allowed! Kindly fill the form manually");
}
let signButton=document.querySelector("#signBtn a");
signButton.addEventListener("click",signBtnClick);
function signBtnClick(){
    alert("Thank you for signing up with Uzima clinic.Kindly check your email for a confirmation message");
}



