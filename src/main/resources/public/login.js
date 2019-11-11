const URL = 'http://localhost:8081';
let users = [];
let user = null;

const checkLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginUser = {};
    loginUser['username'] = formData.get('loginUsername');
    loginUser['password'] = formData.get('loginPassword');

    fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    }).then((result) => {
        result.json().then((result) => {
            if(result){
                alert(result);
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const createEntryForm = document.querySelector('#loginForm');
    createEntryForm.addEventListener('submit', checkLogin);
});