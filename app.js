const scaleFactor = 1 / 20;  //to prevent it from moving too much

function moveBackground() {
    const shapes = document.querySelectorAll(".shape")  // to target all and create array
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0; //to find odd shapes
        const boolInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px )`
    }
}




let contrastToggle = false

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            "service_6q2a6jq",
            "template_5cttofn",
            event.target,
            "Veg1CcRKxOFyiOH7O"
        )
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"; //that space is important
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on email@email.com"
            );
        });
}


let isModalOpen = false

function toggleModal() {
    console.log("hifinwf")
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += ' modal--open'
}

