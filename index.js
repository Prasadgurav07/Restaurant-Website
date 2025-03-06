let Btn = document.getElementById("Btn");

Btn.addEventListener("click", function(){
    alert("Order Succesfully")
})

let cvbtn = document.getElementById("cvbtn")

cvbtn.addEventListener("click", function(){
    alert("Succesfully Added")
})


submit.addEventListener("click", function(){

    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if (email.value === "" && pass.value === "") {
        alert('Both Fields are required ')
    } else {
        alert('Login Successful! ' )
    }
})

