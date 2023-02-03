// const firstname = document.querySelector('input[name="first_name"]')
// const lastname = document.querySelector('input[name="last_name"]')
const emailRegister2 = document.querySelector('input[name="email"]')
// const passowrdRegister = document.querySelector('input[name="password"]')
// DOB = document.querySelector('input[name="birth_date"]')
// const formRegister = document.querySelector('.form-register')

describe('testing email validation', () => {
    afterEach(function(done) {
        emailRegister2.value = ''
      });

    it('validating email good', () => {
        emailRegister2.value = 'redman@gmail.com'
        let bool = checkEmail(emailRegister, regEx.email)
        expect(bool).toBe(true)
    })
    it('validating email not good', () => {
     
        emailRegister2.value = 'redmangmail.com'
        let bool = checkEmail(emailRegister, regEx.email)
        expect(bool).toBe(false);
    
        emailRegister2.value = 'redman@gmail'
        bool = checkEmail(emailRegister, regEx.email)
        expect(bool).toBe(false)
    
        emailRegister2.value = '@gmail'
        bool = checkEmail(emailRegister, regEx.email)
        expect(bool).toBe(false)
    })
})

describe('testing date of birth', () => {
    it('should pass if date of birth over 18', () => {
        expect(checkDOB('2000-01-01')).toBe(true);
    })
    it('should fail if date of birth under 18', () => {
        expect(checkDOB('2006-01-01')).toBe(false);
    })
})

