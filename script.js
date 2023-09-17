const firstname=document.querySelector(".textinput1");
const lastname=document.querySelector(".textinput2");
const emailaddress=document.querySelector(".email");
const password=document.querySelector(".password");
const buttondiv=document.querySelector(".buttondiv");
const country=document.querySelector(".select");
const checkbox=document.querySelector(".box1");
const checked=document.querySelector(".box2");
const eyeButton=document.querySelectorAll('span')[11];
const eyefill2=document.querySelectorAll('span')[12];
console.log(eyeButton,eyefill2)
const button=document.querySelector(".button1");
var arr=[firstname, lastname, emailaddress, password];
const alert1=document.querySelector(".firstname1");
const alert2=document.querySelector(".lastname");
const alert3=document.querySelector(".emaildiv");
const alert4=document.querySelector(".passworddiv");
const cont=document.querySelector(".condition");
var warning=[alert1, alert2, alert3, alert4]
var obj={
    firstname:"",
    lastname:"",
    password:"",
    checked:"false",
    emailaddress:"",
    checkbox:"false",
    country:""
}




button.addEventListener("click", (e)=>{
    e.preventDefault();
    arr.forEach(function(item, i){
        if(item.value==""){
            item.style.border="3px solid red";
            warning[i].style.display="block";        
     }

     if(item.value!==""){
        item.style.border="2px solid black"
        warning[i].style.display="none"; 
       obj.firstname=arr[0].value
       obj.lastname=arr[1].value
       obj.emailaddress=arr[2].value
     }

     if(country.value!==""){
        obj.country=country.value
     }
     if(checkbox.checked!==""){
        obj.checkbox=checkbox.checked
     }
     if(checked.checked!=="")
     cont.style.display="none";
     obj.checked=checked.checked
      

     if(password.value==""){
        buttondiv.style.border="none";
    }
     if(password.value!==""){
        buttondiv.style.border="none";
        obj.password=password.value
    }


    if(checked.checked==""){
        cont.style.display="block";
    }
    })

    // fetch()
       //get, post, put, delete
// console.log(obj)
localStorage.setItem("myitem", JSON.stringify(obj))

})      


eyeButton.addEventListener('click', ()=>{
    if(password.type=="password"){
        password.type="text";
        eyefill2.style.display="block";
        eyeButton.style.display="none";
    }
    
})   


eyefill2.addEventListener('click', ()=>{
    if(password.type=="text"){
        password.type="password";
        eyeButton.style.display="block";
        eyefill2.style.display="none";
        
    }
    
})


