window.onload = function(){
    var completeName = document.getElementById('name');
    var email = document.getElementById('email');
    var password1 = document.getElementById('password');
    var repeatPassword = document.getElementById('repeat-password');
    var age = document.getElementById('age');
    var phoneNumber = document.getElementById('phone-number');
    var address = document.getElementById('address');
    var city = document.getElementById('city');
    var zipCode = document.getElementById('zip-code');
    var idNumber = document.getElementById('id-number');

// VAlIDATE NAME
    completeName.addEventListener('blur', validateName1)
    function validateName1(e){
        if (e.target.value.length < 6){
            e.target.nextElementSibling.innerHTML = "Name must contain at least 6 letters"
        }
        else if (!e.target.value.includes(" ")){
            e.target.nextElementSibling.innerHTML = "Name must contain at least 2 words"
        }
    }
    completeName.addEventListener('focus', validateName2)
    function validateName2(e){
        e.target.nextElementSibling.innerHTML = " "
    }

// VALIDATE EMAIL
    email.addEventListener('blur', validateemail1)
    function validateemail1(e){
        if (!e.target.value.includes("@"&&".")){
            e.target.nextElementSibling.innerHTML = "It must be a valid email"
        }
    }
    email.addEventListener('focus', validateemail2)
    function validateemail2(e){
        e.target.nextElementSibling.innerHTML = " "
    }
   
// VALIDATE PASSWORD
    password1.addEventListener('blur', validatePassword1)
    function validatePassword1(e){
        if (e.target.value.length < 8){
            e.target.nextElementSibling.innerHTML = "Password must contain at least 8 characters"
        }
        else if (!e.target.value.includes( "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0")){
            e.target.nextElementSibling.innerHTML = "Password must contain letters and numbers1"
        }
        else if (!e.target.value.includes( "a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z" || "A" || "B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J" || "K" || "L" || "M" || "N" || "O" || "P" || "Q" || "R" || "S" || "T" || "U" || "V" || "W" || "X" || "Y" || "Z")){
           e.target.nextElementSibling.innerHTML = "Password must contain letters and numbers2"
        }  
    }
    password1.addEventListener('focus', validatePassword2)
    function validatePassword2(e){
        e.target.nextElementSibling.innerHTML = " "
    }

// VALIDATE REPEATPASSWORD
    repeatPassword.addEventListener('blur', validateRepeatPass1)
    function validateRepeatPass1(e){
        if (e.target.value != password1.value){
           e.target.nextElementSibling.innerHTML = "Password must be the same than in the previous gap"
        }
    }
    repeatPassword.addEventListener('focus', validateRepeatPass2)
    function validateRepeatPass2(e){
        e.target.nextElementSibling.innerHTML = " "
    }

// VALIDATE AGE
    age.addEventListener('blur', validateAge1)
    function validateAge1(e){
        if (e.target.value < 18){
            e.target.nextElementSibling.innerHTML = "You must be at least 18 years old"
        }
        // else if (e.target.value != Number.isInteger){
        //      e.target.nextElementSibling.innerHTML = "Age must be an integer number"
        // }
    }
    age.addEventListener('focus', validateAge2)
    function validateAge2(e){
        e.target.nextElementSibling.innerHTML = " "
    }

// VALIDATE PHONE NUMBER
    phoneNumber.addEventListener('blur', validatePhoneNumber1)
    function validatePhoneNumber1(e){
        if (e.target.value.length < 7){
            e.target.nextElementSibling.innerHTML = "Phone number must be at least 7 digits long"
        }
        else if (e.target.value.includes("+" || "-" || " ")){
            e.target.nextElementSibling.innerHTML = "Only numbers are accepted in this gap"
        }
    }
    phoneNumber.addEventListener('focus', validatePhoneNumber2)
    function validatePhoneNumber2(e){
        e.target.nextElementSibling.innerHTML = " "
    }

// VALIDATE ADDRESS
    address.addEventListener('blur', validateAddress1)
    function validateAddress1(e){
        if (e.target.value.length < 5){
            e.target.nextElementSibling.innerHTML = "Address must have at least 5 characters"
        }
        // else if (!e.target.value.includes(Number)){
        //     e.target.nextElementSibling.innerHTML = "Address must contain at least a word and a number"
        // }
        else if (!e.target.value.includes(" ")){
            e.target.nextElementSibling.innerHTML = "Address must contain at least one space"
        }
    }
    address.addEventListener('focus', validateAddress2)
    function validateAddress2(e){
        e.target.nextElementSibling.innerHTML = " "
    }

// VALIDATE CITY
    city.addEventListener('blur', validateCity1)
    function validateCity1(e){
        if (e.target.value.length < 3){
            e.target.nextElementSibling.innerHTML = "City name must have at least 3 letters"
        }
    }
    city.addEventListener('focus', validateCity2)
    function validateCity2(e){
        e.target.nextElementSibling.innerHTML = " "
    }

// VALIDATE ZIP CODE
    zipCode.addEventListener('blur', validateZipCode1)
    function validateZipCode1(e){
        if (e.target.value.length < 3){
            e.target.nextElementSibling.innerHTML = "Zip Code must have at least 3 letters and/or numbers"
        }
    }
    zipCode.addEventListener('focus', validateZipCode2)
    function validateZipCode2(e){
        e.target.nextElementSibling.innerHTML = " "
    }

// VALIDATE IDNUMBER
    idNumber.addEventListener('blur', validateID1)
    function validateID1(e){
        if (e.target.value.length < 7 || e.target.value.length > 8){
            e.target.nextElementSibling.innerHTML = "ID Number must have 7 or 8 digits"
        }
    }
    idNumber.addEventListener('focus', validateID2)
    function validateID2(e){
        e.target.nextElementSibling.innerHTML = " "
    }
}
