const inputList = document.querySelectorAll('input');
const firstname = document.querySelector('input[name="first_name"]')
const lastname = document.querySelector('input[name="last_name"]')
const emailRegister = document.querySelector('input[name="email"]')
const passowrdRegister = document.querySelector('input[name="password"]')
const DOB = document.querySelector('input[name="birth_date"]')
const formRegister = document.querySelector('.form-register')
const button = document.querySelector('.button-register');
const pageHome = document.querySelector('#HOME');
const pageLogin = document.querySelector('#LOGIN');


const regEx = { 
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,7})(\.[a-z]{2,8})?$/ ,
    password: /(((@|#|%|!){1,})|([a-zA-Z0-9])){10,14}/
    //do not leave any white spaces between / regex declarations/
};

function checkNames(input){
    if(firstname.value.trim()!== lastname.value.trim()){
        if(firstname.value.trim() && !lastname.value.trim()) firstname.className = 'Valid';
        else if(!firstname.value.trim() && lastname.value.trim()) lastname.className = 'Valid'
        else{
            firstname.className = 'Valid';
            lastname.className = 'Valid'
        }
        return true
    }else{
        input.className = 'Invalid'
        return false
    }
}

function checkEmail(input, regex){
    if(regex.test(input.value)){
        input.className = 'Valid'
        return true
    }else{
        input.className = ''
        return false
    }
}

function checkPassword(input){
    let letter = /[a-z]/, caps = /[A-Z]/, special = /[\@\#\!\$\%\&\*]/, number = /[0-9]/, numberCheck = false;
    if(input.value.match(/[0-9]/)){
        numberCheck = true
    }
    let letterCheck = letter.test(input.value);
    let capsCheck = caps.test(input.value);
    let specialCheck = special.test(input.value);
    let length = input.value.length > 14
    console.log(letterCheck, capsCheck, specialCheck, length, numberCheck)
    if(letterCheck && capsCheck && specialCheck && length && numberCheck){
        input.className = 'Valid'
        return true
    }else{
        input.className = ''
        return false
    }
}

function checkDOB(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    let c = DOB.value.split('-')
    c.push(c.shift())
    let birth = new Date(Date.parse(c))
  
    let birthDate = new Date(birth);
    let otherDate = new Date(today);
    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() || 
        otherDate.getMonth() == birthDate.getMonth() && 
        otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    if(years < 18){
        DOB.className = ''
        return false
    }else{
        DOB.className = 'Valid'
        return true
    }
}
// birthdate input has 2 methods of inputing data, one via click and the other via keyup.
DOB.addEventListener('click', (e)=>{
    checkDOB()
})

inputList.forEach( element => {
    element.addEventListener('keyup', e => {
        if(e.target.attributes.name.value === 'email') checkEmail(e.target, regEx[e.target.attributes.name.value]);
        else if(e.target.attributes.name.value==='first_name' || e.target.attributes.name.value==='last_name') checkNames(e.target);
        else if(e.target.attributes.name.value === 'password') checkPassword(e.target, regEx[e.target.attributes.name.value]);
        else if(e.target.attributes.name.value === 'birth_date' ) checkDOB();
    });
});

function validate(){
    checkDOB()
    if( firstname.className === 'Valid' && 
        lastname.className === 'Valid' && 
        emailRegister.className === 'Valid' && 
        passowrdRegister.className === 'Valid' &&
        DOB.className === 'Valid' ){
        return true
    }else{
        return false
    }
}


async function post_Registration(){
    let first_name = firstname.value;
    let last_name = lastname.value;
    let email = emailRegister.value;
    let password = passowrdRegister.value;
    let birth_date = DOB.value;
    let url = 'http://localhost:3080/users/register';
    let data = {first_name, last_name, email, password}
    let results = await axios.post(url, data, { withCredentials: true });
    console.log(results.data, 'results')
}

formRegister.addEventListener('submit', e => {
    e.preventDefault();
    console.log(validate(), 'validate')
    if(!validate()){ 
        e.preventDefault()
        alert("validation failed false");
    }else{
        post_Registration();
        // location.reload()
        firstname.value = '' ;
        lastname.value = '' ;
        emailRegister.value = '' ;
        passowrdRegister.value = '' ;
        DOB.value = '';
        pageHome.style.display = 'none';
        pageLogin.style.display = 'flex';
    }
})