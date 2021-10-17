window.onload = function(){
    var completeName = document.getElementById('name');
    var email = document.getElementById('email');
    var password1 = document.getElementById('password')
    var repeatPassword = document.getElementById('repeat-password')
    var age = document.getElementById('age')
    var phoneNumber = document.getElementById('phone-number')
    var address = document.getElementById('address')
    var location = document.getElementById('location')
    var zipCode = document.getElementById('zip-code')
    var idNumber = document.getElementById('id-number')

// VAlIDATE NAME
    completeName.addEventListener('blur', validateName)
    function validateName(e){
        if (e.target.value.length < 6){
            e.target.nextElementSibling.innerHTML = "Name must contain at least 6 letters"
        }
        else if (!e.target.value.includes(" ")){
            e.target.nextElementSibling.innerHTML = "Name must contain at least 2 words"
        }
    }
    completeName.addEventListener('focus',validateName1)
    function validateName1(e){
        e.target.nextElementSibling.innerHTML = " "
    }

// VALIDATE EMAIL
    email.addEventListener('blur', validateemail)
    function validateemail(e){
        if (!e.target.value.includes("@"&&".")){
            e.target.nextElementSibling.innerHTML = "It must be a valid email"
        }
    }
    email.addEventListener('focus',validateemail1)
    function validateemail1(e){
        e.target.nextElementSibling.innerHTML = " "
    }
   
// VALIDATE PASSWORD
    password1.addEventListener('blur',validatePassword)
    function validatePassword(e){
        if (e.target.value.length < 8){
            e.target.nextElementSibling.innerHTML = "Password must contain at least 8 characters"
        }
        else if (!e.target.value.includes())
    }

    
    







}
