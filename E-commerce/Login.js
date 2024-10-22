let form = document.querySelector("form");
let userName = document.querySelectorAll("input")[0];
let Password = document.querySelectorAll("input")[1];
let er_user = document.querySelectorAll("span")[0];
let er_pass = document.querySelectorAll("span")[1];
let er_submit = document.querySelectorAll("span")[2];
console.log(er_user,er_pass,er_submit)
console.log(form,userName,Password);

let localData = JSON.parse(localStorage.getItem("data"));
console.log(localData)

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     if(userName.value=="" && Password.value==""){
//         alert('UserName Required');
//         alert('Password Required');
//     }else if(userName.value==''){
//         alert('UserName Required');
//     }else if(Password.value==''){
//         alert('Password Required');
//     }
//     else if(userName.value=="naidudusmanta@gmail.com" && Password.value==123456){
//     alert('Boss Welcome to page');
// }else{
//     alert("Invalid")
// }
// })

form.addEventListener("submit",(e)=>{
er_user.innerHTML="";
er_pass.innerHTML="";
er_submit.innerHTML="";
// e.preventDefault();
let matching = localData.find((e)=>{
    if(userName.value == e.emil && Password.value==e.pass){
        return e;
    }
});
console.log(matching);


    if(userName.value=="" && Password.value==""){
        er_user.innerHTML="*Type Username";
        er_pass.innerHTML="*Type Password";
        e.preventDefault();
    }
    else if(userName.value==""){
        er_user.innerHTML="*Type Username";
        e.preventDefault();
    }else if(Password.value==""){
        er_pass.innerHTML="*Type Password";
        e.preventDefault();
    }
    else if(matching){
        alert("boss welcome to the webpage");
        localStorage.setItem("particularUser",JSON.stringify(matching));
    }else{
        er_submit.innerHTML="Password is incorrect";
        e.preventDefault();
    }
})
