const menu = document.querySelector('.menu')
    const menuList = document.querySelector('nav ul')
    menu.addEventListener('click',()=>{
        menuList.classList.toggle('showmenu')
    });
        const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();


    








    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }


    if(usernameValue === 'mohamedfarook'){
         if( passwordValue === '12345678'){
            window.location.href = 'index.html';   
            }
          else{
            setError(password, 'Password is icorrect');
              }
}
       else if(usernameValue !== '[a-zA-Z0-9]') {
        setError(username, 'Username is incorrect');
         }
         else if(passwordValue !== '[a-zA-Z0-9]') {
        setError(username, 'Password is incorrect');
         }

    
    

};
