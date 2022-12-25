let id = (id)=>document.getElementById(id);
let className = (classname)=>document.getElementsByClassName(classname)

let button = document.getElementById("submit")
let userName = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMsg = className("error"),
successIcon = className("fa-circle-check"),
failureicon = className("fa-circle-exclamation");

let position;

// // mouse hover event listener
// button.addEventListener("mouseover", function () {
//     //form validation callback return true or false, trigged because of built in form validation in HTML 'required'
//     if (!form.checkValidity()) {
//       position ? (position = 0) : (position = 100);
//       //adding the css animation property
//       button.style.transform = `translate(${position}px, 0px)`;
//       button.style.transition = "all 0.3s ease";
//     } else {
//       return;
//     }
//   });

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let engine = (id, serial, message)=>{
        if(id.value.trim() === ""){
            errorMsg[serial].innerHTML = message;
            successIcon[serial].style.opacity = "0"
            failureicon[serial].style.opacity = "1"
        }else{
            errorMsg[serial].innerHTML = "";
            successIcon[serial].style.opacity = "1"
            failureicon[serial].style.opacity = "0"
        }
    }

engine(userName, 0, "Username cannot be blank");
engine(email, 1, "Email cannot be blank");
engine(password, 2, "Password cannot be blank");





})


button.addEventListener('mouseenter',moveButton)


function moveButton(){
    
    // username bubble
    // if(userName.value.trim() === "" ){
    //     document.querySelector(".s-bubble-div1").style.opacity = "1"
    // }else{
    //     document.querySelector(".s-bubble-div1").style.opacity = "0"
    // }
//    email bubble


    // password bubble

   if(userName.value.trim() === "" || email.value.trim() === "" || password.value.trim() === ""){
    position ? (position = 0) : (position = 400);

    //adding the css animation property
    button.style.transform = `translate(${position}px, 0px)`;
    button.style.transition = "all 0.5s ease";
    button.style.width = "20%"
   button.style.position = "relative"
   }else {
    return;
  }
} 