
function checkPasswords(){
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('password2');

    if(password.value !== confirmPassword.value || confirmPassword.value == ''){
     confirmPassword.setCustomValidity('Passwords Must Match');
        confirmPassword.reportValidity();
        confirmPassword.style.border = 'none';
        confirmPassword.style.outline = '2px solid red';
        confirmPassword.style.boxShadow = '2px 1px 6px red;';

    }else{
        confirmPassword.setCustomValidity('');
        confirmPassword.style.border = 'none';
        confirmPassword.style.outline = '2px solid rgb(3, 182, 3)';
        confirmPassword.style.boxShadow = '2px 1px 6px rgb(3, 182, 3);';
    }
}

