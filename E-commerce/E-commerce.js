let login = document.querySelector("#right1");
let particularUser = JSON.parse(localStorage.getItem("particularUser"));
console.log(particularUser);
let maleCont = document.querySelector("#maleCont");
let femaleCont = document.querySelector("#femaleCont");
let kidsCont = document.querySelector("#kidCont");
let electroCont = document.querySelector("#electroCont");
let popup = document.querySelector('#popup');
let x = document.querySelector("#x");
let dynamic = document.querySelector("#dynamic");
console.log(dynamic);
let cartStorage = [];

x.addEventListener("click",()=>{
    popup.style.right="-100%";
})


if(particularUser){
    login.innerHTML=`<span>${particularUser.first}</span>
    <a href="./E-commerce.html" id="logout"><button>Logout</button></a>`
    let logout = document.querySelector("#logout");

logout.addEventListener("click",(e)=>{
   localStorage.removeItem("particularUser");
});

}


async function fetchData(){
   let dataFromServer =await fetch("https://www.shoppersstack.com/shopping/products/alpha");
    let allData = await dataFromServer.json();
    console.log(dataFromServer)
    console.log(allData);
     
    //^=======male section====
    let maleData = allData.data.filter((e)=>{
        if(e.category=="men"){
        return e;
        }
    })
    console.log(maleData);


    maleData.map((e)=>{
        maleCont.innerHTML+=` <div id = "${e.productId}">
        <img src="${e.productImageURLs[0]}">
        <h2>Product Name: ${e.name}</h2>
        <h3>Price: ${e.price}</h3>
        <h4>Rating: ${e.rating}</h4>
        <button class="btn">Add to Cart</button>
    </div>`
    })

     //^=======female section====
    let femaleData = allData.data.filter((e)=>{
        if(e.category=="women"){
            return e;
        }
    });
    console.log(femaleData)

    femaleData.map((e)=>{
        femaleCont.innerHTML+=` <div id = "${e.productId}">
        <img src="${e.productImageURLs[0]}">
        <h2>Product Name: ${e.name}</h2>
        <h3>Price: ${e.price}</h3>
        <h4>Rating: ${e.rating}</h4>
        <button class="btn">Add to Cart</button>
    </div>`
    });
     //^=======kids section====
     let kidsData = allData.data.filter((e)=>{
        if(e.category=="kids"){
            return e;
        }
    });
    console.log(kidsData)

    kidsData.map((e)=>{
        kidsCont.innerHTML+=` <div id = "${e.productId}">
        <img src="${e.productImageURLs[0]}">
        <h2>Product Name: ${e.name}</h2>
        <h3>Price: ${e.price}</h3>
        <h4>Rating: ${e.rating}</h4>
        <button class="btn">Add to Cart</button>
    </div>`
    });
     //^=======electronics section====
 let electroData = allData.data.filter((e)=>{
    if(e.category="electronics")return e;
 })
    console.log(electroData);
    

 electroData.map((e)=>{
    electroCont.innerHTML+=` <div id = "${e.productId}">
    <img src="${e.productImageURLs[0]}">
    <h2>Product Name: ${e.name}</h2>
    <h3>Price: ${e.price}</h3>
    <h4>Rating: ${e.rating}</h4>
    <button class="btn">Add to Cart</button>
</div>`
});
    let btn = document.querySelectorAll(".btn");
        btn.forEach((e)=>{
           e.addEventListener("click",()=>{
            popup.style.right="0";
            if(particularUser){
                let parentElement =e.parentElement.id;
                console.log(parentElement);
                let oneProduct = allData.data.find((e)=>{
                           if(e.productId==parentElement){
                           return e;
                           }
                })
                // console.log(oneProduct);
                cartStorage.push(oneProduct);
                console.log(cartStorage);
               print();
               subtotal();
               del();
               grandTotal();
            }else{
                dynamic.innerHTML=`<a href="./Font_Awesome.html">Login first</a>`;
            }
           })
        })

}
fetchData();
function print(){
    dynamic.innerHTML="";
                cartStorage.map((e)=>{
                    dynamic.innerHTML+=` <div class="cart-design" id="${e.productId}">
                    <div><img src="${e.productImageURLs[0]}" alt=""></div>
                 <div>
                    <h3>${e.name}</h3>
                    <input type="number">
                 </div>
                    <div><h4 class = "price">${e.price}</h4></div>
                    <div><h4 class = "sub">${e.price}</h4>
                    <i class="fa-sharp fa-solid fa-trash"></i></div>
                </div>`
                })
}

function del(){
    let trash = document.querySelectorAll(".fa-trash"); 
               trash.forEach((e)=>{
                e.addEventListener("click",()=>{
                   let parentElement = e.parentElement.parentElement;
                   console.log(e,parentElement);
                   cartStorage=cartStorage.filter((e)=>{
                        if(parentElement.id!=e.productId){
                            return e;
                        }
                   });
                   print();
                   grandTotal();
                })
               })

}

function subtotal(){
    let sub = document.querySelectorAll(".sub");
    console.log(sub);

    let quantity = document.querySelectorAll("input");
    quantity.forEach((e)=>{
        e.addEventListener("input",()=>{
           if(e.value<1){
            e.value= 1;
           }
           let parentElement = e.parentElement.parentElement;
           let price = parentElement.querySelector(".price");
           let sub = parentElement.querySelector(".sub");
           sub.innerHTML=e.value*price.innerHTML;
           grandTotal();
        });
    })
}

function grandTotal(){
    let gt = document.querySelector("#gt");
    let sub = document.querySelectorAll(".sub");
    let sum =0;
    sub.forEach((e)=>{
        let total =parseInt(e.innerHTML) ;
        sum = sum+total;
    });
    gt.innerHTML = sum;
}