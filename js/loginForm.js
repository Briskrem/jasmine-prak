const formLogin = document.querySelector('.form-login');
const passowrdLogin = document.querySelector('input[name="password-login"]')
const emailLogin = document.querySelector('input[name="email-login"]')


formLogin.addEventListener('submit', async e => {
    e.preventDefault();
    let email = emailLogin.value;
    let password = passowrdLogin.value;    
    try{
        let url = 'http://localhost:3080/users/login';
        let data = {email, password}
        // await axios.post(url, data,  {withCredentials: true }).then(x => { console.log(x.data, 'then')});

        let options = {
            method : "POST",
            headers : { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(data)
        }
        await fetch (url, options).then(x => x.json().then(u => console.log(u)))
    }catch(e){
        console.log(e)
    }
})
//-=========-===========-==============-
function check(input){
    
    if(input < 50) return 'lesser';
    if(input > 100 && input > 50) return 'much better';
    if(input > 50) return 'greater'
}