document.addEventListener('DOMContentLoaded',()=>{
    let sInput = document.getElementById('search');
    let sbtn = document.getElementById('searchbtn');

    function sc(){
        const sterm = sInput.value.toLowerCase();
        const allHeaders = document.querySelectorAll('.p1 h2, .p1 h4');

        for(let head of allHeaders){
            if(head.textContent.toLowerCase().includes(sterm)){
                head.scrollIntoView({behavior: 'smooth', block : "center"});
                break;  
            }
        }
    }
    sInput.addEventListener('keydown',(event)=>{
        if(event.key === 'Enter'){
            sc();
        }
    })
    sbtn.addEventListener('click',sc);
})

let submitBtn  = document.getElementById('submit');
let content = document.getElementsByClassName('contact')
let form = document.getElementById('form')
submitBtn.addEventListener('click',()=>{

    let h1 = document.createElement('h1');
    h1.classList.add('submitClick');
    h1.textContent = 'Form Submitted Tnx For Contact Us, Our Team Contact You As Soon As Possible';
    content[0].appendChild(h1);
    form.style.display = 'none';
})

document.addEventListener('DOMContentLoaded', () => {
    let goToTopBtn = document.getElementById('gotoTop');

    // Show the button when user scrolls down 20px from the top of the document
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = 'block';
        } else {
            goToTopBtn.style.display = 'none';
        }
    }

    // Scroll to the top of the document when the button is clicked
    goToTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
});
