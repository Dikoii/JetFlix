const closeButton = document.querySelector('.icon-close');
    closeButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

function validateForm(event){

    event.preventDefault()
    registForm = document.getElementById("registForm");
    username = document.getElementById("name");
    password = document.getElementById("password");
    confirmpassword = document.getElementById("confirmpassword");
    dob = document.getElementById("dob");
    male = document.getElementById("male");
    female = document.getElementById("female");
    agree = document.getElementById("agree");
    error = document.getElementById("error");

    if(username.value.length < 5){
        error.innerHTML = "Username must be at least 5 characters !"
        alert("Username must be at least 5 characters !")
    }

    else if(!password.value){
        error.innerHTML="Please input the password!";
        alert("Please input the password!");
    }

    else if(!isAlphanumeric(password.value)){
        error.innerHTML = "Password must be alphanumeric !"
        alert("Password must be alphanumeric !")
    }

    else if(password.value != confirmpassword.value){
        error.innerhtml = "Password doesn't match !"
        alert("Password doesn't match !")
    }

    else if(!dob.value){
        req.innerHTML="Please input your date of birth!";
        alert("Please input date of birth");
    }

    else if(!(male.checked||female.checked)){
        req.innerHTML="Gender must be selected";
        alert("Gender must be selected");
    }

    else if(!agree.checked){
        error.innerHTML = "You must agree to the Jetflix Terms & Conditions"
        alert("You must agree to the Jetflix Terms & Conditions")
    }

    else{
        error.innerHTML="";
        alert("Sign Up Succeed");
        registForm.submit();
    }
}

function isAlphanumeric(pw){

    var num  = false
    var alpha = false

    for(let i = 0;i<pw.length;i++){
        if(!isNaN(pw[i])){
            num = true
        }
        else{
            alpha = true
        }
        if(num && alpha){
            return true
        }
    }
    return false
}