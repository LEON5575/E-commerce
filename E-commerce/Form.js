let firstName = document.querySelectorAll("input")[0];
let lastName = document.querySelectorAll("input")[1];
let email = document.querySelectorAll("input")[2];
let mobile = document.querySelectorAll("input")[3];
let password = document.querySelectorAll("input")[4];
let confirmPassword = document.querySelectorAll("input")[5];

let e_first = document.querySelectorAll("span")[0];
let e_last = document.querySelectorAll("span")[1];
let e_email = document.querySelectorAll("span")[2];
let e_mobile = document.querySelectorAll("span")[3];
let e_pass = document.querySelectorAll("span")[4];
let ec_pass = document.querySelectorAll("span")[5];

let form = document.querySelector("form");
let storage =[];
let localData = JSON.parse(localStorage.getItem("data"));
console.log(localData);

if(localData){
  storage=localData;
  console.log(storage);
}


form.addEventListener("submit",(e)=>{
    //*square brackets for characters and numbers
    //*curly braces for length;
    let regex =/^[a-zA-Z]{2,15}$/;    //!regular expression for validation
    let regex1 =/^[6-9][0-9]{9}$/;    //!for validation
    let regex2 =/^[a-zA-Z0-9]{8,15}$/  //!for validation
    let flag = true;
   

    //^for first name
    if(firstName.value == ""){
        e_first.innerHTML="first name required! <br>";
        e.preventDefault();
    }
    else if(regex.test(firstName.value)){
            e_first.innerHTML="";
    }else{
        e_first.innerHTML ="invalid first name!";
        e.preventDefault();
        flag = false;
    }
      //^for last name
    if(lastName.value==""){
        e_last.innerHTML = "last name required! <br>"
        e.preventDefault()
        flag = false;
    }
    else if(regex.test(lastName.value)){
        e_last.innerHTML="";
    }else{
    e_last.innerHTML ="invalid last name!";
    e.preventDefault();
   }
    //^for email
    if(email.value==""){
        e_email.innerHTML = "email required! <br>"
        e.preventDefault();
        flag = false;
    }
    else{
        e_email.innerHTML="";
    }
     //^for mobileNo:-
     if(mobile.value==""){
        e_mobile.innerHTML="mobile number required! <br>"
        e.preventDefault();
        flag = false;
     }
     else if(regex1.test(mobile.value)){
        e_mobile.innerHTML="";
     }else{
        e_mobile.innerHTML="Invalid mobile number!"
        e.preventDefault();
     }
      //^for password:-
      if(password.value==""){
        e_pass.innerHTML="Password is required! <br>"
        e.preventDefault();
        flag = false;
     }
     else if(regex2.test(password.value)){
        e_pass.innerHTML="";
     }else{
        e_pass.innerHTML="Invalid Password!"
        e.preventDefault();
        flag=false;
     }
      //^for confirm password:-
      if(confirmPassword.value==password.value){
        ec_pass.innerHTML="";
      }else{
        ec_pass.innerHTML="Password is not matched <br>"
        e.preventDefault();
        flag = false;
      }

      if(flag){
        let obj ={
          first:firstName.value,
          last:lastName.value,
          emil:email.value,
          phone:mobile.value,
          pass:password.value,
        };
        storage.push(obj);
        console.log(storage);
         localStorage.setItem("data",JSON.stringify(storage));
      }
})

//*=========================================================================
// let eye =document.querySelector(".fa-eye");
// eye.addEventListener("click",(e)=>{
//   let pass = document.getElementById('pass');
//       if(pass.type ==='password'){
//         pass.type ='text';
//       }else{
//         pass.type ='password'
//       }
// })
// //*===========================================================================
