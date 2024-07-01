const getUserdata = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('username');

    let userObj = {
        email: email.value,
        password: password.value,
        username: username.value,
    }
    localStorage.setItem("userData", JSON.stringify(userObj));

    window.location.href = './signup.html';
}

let getData = JSON.parse(localStorage.getItem('userData'));
if (getData) {
    const { email: email2, password: pass2, username: username2 } = getData;
    
    const loginForm = document.getElementById('loginform');
    if(loginForm){
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        checkUserdata();
    });}

    const checkUserdata = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const username = document.getElementById('username');
        if (email.value === email2 && password.value === pass2 && username.value === username2) {
            window.location.href = './login.html';
        } else {
            alert('Wrong User Data Entered!');
        }
    }

    const showUserdata = () => {
        const usernamebtn = document.getElementById('usernamebtn');
        const usernamediv = document.querySelector('.usernamediv');
        const emaildiv = document.querySelector('.emaildiv');

        usernamebtn.innerHTML = `<span>${username2.length > 6 ? username2.slice(0, 5) + "...." : username2}</span>`;
        usernamediv.innerHTML = `<span>${username2.length > 6 ? username2.slice(0, 6) + "...." : username2}</span>`;
        emaildiv.innerHTML = `<span>${email2}</span><br/>`;
    }
    showUserdata();
}
