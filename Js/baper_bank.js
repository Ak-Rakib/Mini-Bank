document.getElementById('btn-submit').addEventListener('click', function(){
    const inputEmail = document.getElementById('input-email');
    const getEmail = inputEmail.value;


    const inputPass = document.getElementById('input-pass');
    const getPass = inputPass.value;
    console.log(getEmail, getPass);


    // DANGER: DO NOT VERIFY email password on the client side
    if(getEmail === "rkrakib@gmail.com" && getPass === "123456"){
       window.location.href = 'bank.html';
    } else {
        alert('invalid User');
    }
});