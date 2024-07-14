const getUserdata = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const adminrights = document.getElementById('adminrights').checked ? 'on' : 'off';
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    // Validation to ensure all fields are filled
    if (!email || !password || !username) {
        alert('Please fill in all fields.');
        return; // Stop the function execution if validation fails
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return; // Stop the function execution if validation fails
    }

    // Username validation using regex
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    if (!usernameRegex.test(username)) {
        alert('Username must be 3-16 characters long and can only contain letters, numbers, and underscores.');
        return; // Stop the function execution if validation fails
    }

    // Password validation using regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,32}$/;


    if (!passwordRegex.test(password)) {
        alert('Password must be 8-32 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
        return; // Stop the function execution if validation fails
    }

    // Validation to ensure an image is uploaded
    if (!imageFile) {
        alert('Please upload an image.');
        return; // Stop the function execution if validation fails
    }

    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    let existingUser = userData.some(user => user.email === email || user.username === username);

    if (existingUser) {
        alert('User already exists. Please Login!');
    } else {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = event.target.result;
            let userObj = {
                email: email,
                password: password,
                username: username,
                adminrights: adminrights,
                image: img 
            };
            userData.push(userObj);
            localStorage.setItem("userData", JSON.stringify(userData));
            alert('User Registered!');
            window.location.href = './login1.html'; 
        };
        reader.readAsDataURL(imageFile);
    }
};





let getData = JSON.parse(localStorage.getItem('userData')) || [];


const loginForm = document.getElementById('loginform');
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        checkUserdata();
    });
}

const checkUserdata = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    let validUser = getData.find(user => user.email === email && user.password === password && user.username === username);

    if (validUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(validUser));
        if (validUser.adminrights === 'on') {
            window.location.href = './admin.html';
        } else {
            window.location.href = './login.html';
        }
    } else {
        alert('Wrong User Data Entered!');
    }
};

const showUserdata = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        const usernamebtn = document.getElementById('usernamebtn');
        const usernamediv = document.querySelector('.usernamediv');
        const emaildiv = document.querySelector('.emaildiv');
        const userdiv=document.getElementById('userimage');
        usernamebtn.innerHTML = `<span>${loggedInUser.username.length > 6 ? loggedInUser.username.slice(0, 5) + "...." : loggedInUser.username}</span>`;
        usernamediv.innerHTML = `<span>${loggedInUser.username.length > 6 ? loggedInUser.username.slice(0, 6) + "...." : loggedInUser.username}</span>`;
        emaildiv.innerHTML = `<span>${loggedInUser.email}</span><br/>`;
        userdiv.innerHTML=`<img src="${loggedInUser.image}" style="width:55px;height:50px;border-radius: 50%;object-fit:cover">`;

    }
};
showUserdata();

function login() {
    window.location.href = 'login1.html';
}
function signup() {
    window.location.href = 'signup.html';
}
// function saveImage(){
//     const image=document.getElementById('image');
//     if('files' in image && image.files.length>0){
//         const file=image.files[0];
  
//     const reader=new FileReader();
//     reader.onload= function(event){
//         const img=event.target.result;
//         localStorage.setItem('userImg',img);

//     };

//     reader.readAsDataURL(file);
// }
// else{
//     alert('Please Upload an Image');
// }
// }
// function showImage(){
//     const userdiv=document.getElementById('userimage');
//     const image=localStorage.getItem('userImg');
//     userdiv.innerHTML=`<img src="${image}" style="width:55px;height:50px;border-radius: 50%;object-fit:cover">`;

// }