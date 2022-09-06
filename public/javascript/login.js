async function loginFormHandler(event){
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(email && password){
        const response = await fetch('/api/users/login',{
            method:'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers:{'Content-Type':'application/json'}
        });
        if(response.ok){
            document.location.replace('/dashboard');
        }
        else{
            alert('Invalid email address or password.');
        };
    }
    else{alert('Please enter your email address and password to log in.')};
};

async function signupFormHandler(event){
    event.preventDefault();

    const first_name = document.querySelector('#first_name-signup').value.trim();
    const last_name = document.querySelector('#last_name-signup').value.trim();
    const is_approver = document.querySelector('#is-approver-signup').value.trim();
    const approver_id = document.querySelector('#my-approver-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();


    if(first_name && last_name && approver_id && email && password){
        const response = await fetch('/api/users/',{
            method:'POST',
            body: JSON.stringify({
                first_name,
                last_name,
                is_approver,
                approver_id,
                email,
                password
            }),
            headers:{'Content-Type':'application/json'}
        });
        if(response.ok){
            document.location.replace('/dashboard');
        }
        else{
            alert(response.statusText);
        };
    }
    else{alert('All fields are required')};
};

document.querySelector('.login-form').addEventListener('submit',loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit',signupFormHandler);