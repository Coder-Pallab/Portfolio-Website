let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let sections = document.querySelector('.section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};


function sendEmail(){
    let para={
        name : document.querySelector("#name-cus").value,
        email : document.querySelector("#email-cus").value,
        subject : document.querySelector("#subject-cus").value,
        message : document.querySelector("#message-cus").value,
    }
    emailjs.send("service_5ri256f", "template_ftc75f3", para).then(alert("Email sent!!"));
}

