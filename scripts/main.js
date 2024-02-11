// bring in dom elems
const modal = document.getElementById('myModal');
const modalDirectBtn = document.getElementById('signInButton');
const closeModal = document.querySelector('.close');
const confirmBtn = document.getElementById("signIn");

// show modal, blur bg
modalDirectBtn.onclick = function() {
    modal.style.display = "block";
    modal.classList.add('backdrop-blur');
}

// close modal on 'x' 
closeModal.onclick = function() {
    modal.style.display = "none";
}

/* 
Direct user to index.html(placeholder) after checking that email/pwd are not empty. No further validation required at the moment.
*/
function redirect() {
    const email = document.getElementById('userEmail').value;
    const pwd = document.getElementById('userPwd').value;
    if (email === "" || pwd === "") {
        alert('Please enter valid email/password');
    } else {
        window.location.href = "./index.html"; // This could take user into netflix acount, but only a placeholder for now.
    }
}
// call redirect when sign in button is clicked.
confirmBtn.onclick = function() {
    redirect();
}