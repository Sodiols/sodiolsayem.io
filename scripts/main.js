new kursor ({
    type: 1,
    removeDefaultCursor:true
})

//! ext 
const okBtn = document.querySelector('.popup button');


okBtn.addEventListener('click', () => {
    const email = prompt('Enter Your Email');

    if (email !== null && email !== '') {
        alert("We'll contact you via email");
    } else {
        alert("You've to put your email on the prompt")
    }
});
