// Form validation, validate name,email and phone using regular expression

const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');

// let valid=false;   // valid =true , when all the inputs are valid
let validUser=false;
let validEmail=false;
let validPhone=false;

// Initially hiding the success and failure div's
// $('#failure').hide();
// $('#success').hide();
document.getElementById('success').style.display='none';   // alternative to jquery
document.getElementById('failure').style.display='none';

// console.log(username,email,phone);
username.addEventListener('blur',()=>{
    console.log("Username got blurred");
    // validate username here
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;     // user should be of maximum 10 words
    let str=username.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("Username is valid");
        username.classList.remove('is-invalid');
        validUser=true;
    }
    else{
        console.log("Username is Invalid");
        username.classList.add('is-invalid');
        validUser=false;
    }
});

email.addEventListener('blur',()=>{
    console.log("Email got blurred");
    // validate email here  
    let regex=/^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-Z]){2,7}$/;   
    let str=email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("Email is valid");
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else{
        console.log("Email is Invalid");
        email.classList.add('is-invalid');
        validEmail=false;
    }
});

phone.addEventListener('blur',()=>{
    console.log("phone got blurred");
    // validate phone here
    let regex=/^[0-9]{10}$/;     // Phone number is exactly of 10 numbers
    let str=phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("Phone number is valid");
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else{
        console.log("Phone number is Invalid");
        phone.classList.add('is-invalid');
        validPhone=false;
    }
});


let submit=document.getElementById('submit');
submit.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log("You clicked submit button");
    // Submit your form here
    if(validEmail && validPhone && validUser){
        console.log("Phone,Email and User all are valid. Submitting the form");
        let success=document.getElementById('success');
        success.classList.add('show');   // show is a bootstrap class
        // failure.classList.remove('show');
//         $('#success').show();
//         $('#failure').hide();
        success.style.display='block';   // alternative to jquery
        failure.style.display='none';
    }
    else{
        console.log("One of Phone,Email and User all are not valid. Please correct the error and try again");
        let failure=document.getElementById('failure');
        failure.classList.add('show');   // show is a bootstrap class
        // success.classList.remove('show');
//         $('#success').hide();
//         $('#failure').show();
        success.style.display='none';
        failure.style.display='block';
    }
})
