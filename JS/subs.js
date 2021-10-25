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
            e.target.nextElementSibling.classList.add('error')
        }
        else if (!e.target.value.includes(" ")){
            e.target.nextElementSibling.innerHTML = "Name must contain at least 2 words"
            e.target.nextElementSibling.classList.add('error')
        }
    }
    completeName.addEventListener('focus', validateName2)
    function validateName2(e){
        e.target.nextElementSibling.innerHTML = " "
        e.target.nextElementSibling.classList.remove('error')
    }

// VALIDATE EMAIL
    email.addEventListener('blur', validateemail1)
    function validateemail1(e){
        if (!e.target.value.includes("@"&&".")){
            e.target.nextElementSibling.innerHTML = "It must be a valid email"
            e.target.nextElementSibling.classList.add('error')
        }
    }
    email.addEventListener('focus', validateemail2)
    function validateemail2(e){
        e.target.nextElementSibling.innerHTML = " "
        e.target.nextElementSibling.classList.remove('error')
    }
   
// VALIDATE PASSWORD
    password1.addEventListener('blur', validatePassword1)
    function validatePassword1(e){
        if (e.target.value.length < 8){
            e.target.nextElementSibling.innerHTML = "Password must contain at least 8 characters"
            e.target.nextElementSibling.classList.add('error')
        }
        else if (!e.target.value.includes("1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0")){
            e.target.nextElementSibling.innerHTML = "Password must contain letters and numbers"
            e.target.nextElementSibling.classList.add('error')
        }
        else if (!e.target.value.includes( "a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z" || "A" || "B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J" || "K" || "L" || "M" || "N" || "O" || "P" || "Q" || "R" || "S" || "T" || "U" || "V" || "W" || "X" || "Y" || "Z")){
           e.target.nextElementSibling.innerHTML = "Password must contain letters and numbers2"
           e.target.nextElementSibling.classList.add('error')
        }  
    }
    password1.addEventListener('focus', validatePassword2)
    function validatePassword2(e){
        e.target.nextElementSibling.innerHTML = " "
        e.target.nextElementSibling.classList.remove('error')
    }

// VALIDATE REPEATPASSWORD
    repeatPassword.addEventListener('blur', validateRepeatPass1)
    function validateRepeatPass1(e){
        if (e.target.value != password1.value){
           e.target.nextElementSibling.innerHTML = "Password must be the same than in the previous gap"
           e.target.nextElementSibling.classList.add('error')
        }
    }
    repeatPassword.addEventListener('focus', validateRepeatPass2)
    function validateRepeatPass2(e){
        e.target.nextElementSibling.innerHTML = " "
        e.target.nextElementSibling.classList.remove('error')
    }

// VALIDATE AGE
    age.addEventListener('blur', validateAge1)
    function validateAge1(e){
        if (e.target.value < 18){
            e.target.nextElementSibling.innerHTML = "You must be at least 18 years old"
            e.target.nextElementSibling.classList.add('error')
        }
        // else if (e.target.value != Number.isInteger){
        //      e.target.nextElementSibling.innerHTML = "Age must be an integer number"
        // }
    }
    age.addEventListener('focus', validateAge2)
    function validateAge2(e){
        e.target.nextElementSibling.innerHTML = " "
        e.target.nextElementSibling.classList.remove('error')
    }

// VALIDATE PHONE NUMBER
    phoneNumber.addEventListener('blur', validatePhoneNumber1)
    function validatePhoneNumber1(e){
        if (e.target.value.length < 7){
            e.target.nextElementSibling.innerHTML = "Phone number must be at least 7 digits long"
            e.target.nextElementSibling.classList.add('error')
        }
        else if (e.target.value.includes("+" || "-" || " ")){
            e.target.nextElementSibling.innerHTML = "Only numbers are accepted in this gap"
            e.target.nextElementSibling.classList.add('error')
        }
    }
    phoneNumber.addEventListener('focus', validatePhoneNumber2)
    function validatePhoneNumber2(e){
        e.target.nextElementSibling.innerHTML = " "
        e.target.nextElementSibling.classList.remove('error')
    }

// VALIDATE ADDRESS
    address.addEventListener('blur', validateAddress1)
    function validateAddress1(e){
        if (e.target.value.length < 5){
            e.target.nextElementSibling.innerHTML = "Address must have at least 5 characters"
            e.target.nextElementSibling.classList.add('error')
        }
        // else if (!e.target.value.includes(Number)){
        //     e.target.nextElementSibling.innerHTML = "Address must contain at least a word and a number"
        // }
        else if (!e.target.value.includes(" ")){
            e.target.nextElementSibling.innerHTML = "Address must contain at least one space"
            e.target.nextElementSibling.classList.add('error')
        }
    }
    address.addEventListener('focus', validateAddress2)
    function validateAddress2(e){
        e.target.nextElementSibling.innerHTML = " "
        e.target.nextElementSibling.classList.remove('error')
    }

// VALIDATE CITY
    city.addEventListener('blur', validateCity1)
    function validateCity1(e){
        if (e.target.value.length < 3){
            e.target.nextElementSibling.innerHTML = "City name must have at least 3 letters"
            e.target.nextElementSibling.classList.add('error')
        }
    }
    city.addEventListener('focus', validateCity2)
    function validateCity2(e){
        e.target.nextElementSibling.innerHTML = " "
        e.target.nextElementSibling.classList.remove('error')
    }

// VALIDATE ZIP CODE
    zipCode.addEventListener('blur', validateZipCode1)
    function validateZipCode1(e){
        if (e.target.value.length < 3){
            e.target.nextElementSibling.innerHTML = "Zip Code must have at least 3 letters and/or numbers"
            e.target.nextElementSibling.classList.add('error')
        }
    }
    zipCode.addEventListener('focus', validateZipCode2)
    function validateZipCode2(e){
        e.target.nextElementSibling.innerHTML = " "
        e.target.nextElementSibling.classList.remove('error')
    }

// VALIDATE IDNUMBER
    idNumber.addEventListener('blur', validateID1)
    function validateID1(e){
        if (e.target.value.length < 7 || e.target.value.length > 8){
            e.target.nextElementSibling.innerHTML = "ID Number must have 7 or 8 digits"
            e.target.nextElementSibling.classList.add('error')
        }
    }
    idNumber.addEventListener('focus', validateID2)
    function validateID2(e){
        e.target.nextElementSibling.innerHTML = " "
        e.target.nextElementSibling.classList.remove('error')
    }

// FORM VERIFICATION
    var myBtn = document.getElementById('myBtn')
    var errors = document.getElementsByClassName('error')
    var textSpan = document.getElementsByClassName('close')
    var modalTitle = document.getElementById('modal-title')
    var modalText = document.getElementById('modal-text')

    myBtn.addEventListener('click', validateForm)
    function validateForm(e){
        e.preventDefault()
        if(errors.length != 0){
            textSpan[0].nextElementSibling.innerHTML = "Submitting unsuccesfull";
            modal.style.display = "block";
        }
        else{
            var url = "https://curso-dev-2021.herokuapp.com/newsletter?"
            var parameters = `name=${completeName.value}&email=${email.value}&password=${password1.value}&repeat_password=${repeatPassword.value}&age=${age.value}&phone=${phoneNumber.value}&address=${address.value}&city=${city.value}&postal_code=${zipCode.value}&id=${idNumber.value}`
            textSpan[0].nextElementSibling.innerHTML = "Succesfully submitted"
            sendRequest(url+parameters)
        }
    }
    function sendRequest(url){
        fetch(url)
        .then(
            function(res){
                return res.json()
            }
        )
        .then(
            function(data){
                modal.style.display = "block"
                var output = '';
            for (var property in data) {
                output += property + ': ' + data[property]+ '<br>';
            }
            modalTitle.innerHTML = 'Your subscription was successful! Here is your data:';
            modalTitle.style.color = 'green';
            modalText.innerHTML = output;
            uploadStorage("")
            }
        )
        .catch(
            function(err){
                modalTitle.innerHTML = 'There was an error in your subscription: '
                modalText.innerHTML = err;
                modalTitle.style.color = 'red';
            }
        )
    }
// UPLOAD LOCAL STORAGE
    function uploadStorage(){
        localStorage.setItem('name', completeName.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password1.value)
        localStorage.setItem('repeat password', repeatPassword.value)
        localStorage.setItem('age', age.value)
        localStorage.setItem('phone number', phoneNumber.value)
        localStorage.setItem('address', address.value)
        localStorage.setItem('city', city.value)
        localStorage.setItem('zip code', zipCode.value)
        localStorage.setItem('id number', idNumber.value)
    }
// CHECK LOCAL STORAGE
    window.onload = checkStorage
    function checkStorage(){
        fnameInput.value = !!localStorage.getItem('name') ? localStorage.getItem('name') : null;
        emailInput.value = !!localStorage.getItem('email') ? localStorage.getItem('email') : null;
        passwordInput.value = !!localStorage.getItem('password') ? localStorage.getItem('password') : null;
        repeatPasswordInput.value = !!localStorage.getItem('repeat password') ? localStorage.getItem('repeat password') : null;
        ageInput.value = !!localStorage.getItem('age') ? localStorage.getItem('age') : null;
        phoneInput.value = !!localStorage.getItem('phone number') ? localStorage.getItem('phone number') : null;
        addressInput.value = !!localStorage.getItem('address') ? localStorage.getItem('address') : null;
        cityInput.value = !!localStorage.getItem('city') ? localStorage.getItem('city') : null;
        pCodeInput.value = !!localStorage.getItem('zip code') ? localStorage.getItem('zip code') : null;
        idInput.value = !!localStorage.getItem('id number') ? localStorage.getItem('id number') : null;
    } 
// MODAL
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}