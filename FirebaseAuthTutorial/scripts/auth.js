
//the eauth status changes
auth.onAuthStateChanged(user => {
    // console.log(user);
    if(user){
        // console.log('user logged in: ', user);
        //get data
        db.collection('guides').onSnapshot(snapshot => {
                setupGuides(snapshot.docs);
                setupUI(user);
            })
            // .catch(err => {
            //     console.log(err.message);
            // });
    }else{
        setupUI();
        // console.log('user logged out.');
        setupGuides([]);
    }

})

//create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('guides').add({
        title: createForm['title'].value, // można tak []
        content: createForm.content.value // albo tak . 
    }).then(() => {
        //close the modal and reset form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(err => {
        console.log(err.message);
    })
})



// sign up

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // console.log(email, password);
    
    //sign up the user
    auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            // console.log(cred.user);
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();
            signupForm.reset();
        });

});

// logout

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
        // .then(() => {
        //     console.log('user logout');
        // });
});

//login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            // console.log(cred.user);
            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();
            loginForm.reset();
        });
})