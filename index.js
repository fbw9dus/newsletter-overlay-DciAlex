const button = document.querySelector('.contact');
const newsLetter = document.querySelector('.newsletter-wrapper');
const close = document.querySelector('.newsletter-close');
const newsLetterContent = document.querySelector('.newsletter');
const submitBTN = document.querySelector('.Submit');
const closeBTN = document.querySelector('.close')
const inputMail =document.querySelector('.email-input');
const h2Text = document.querySelector('.h2');

button.addEventListener('click',() => {
    newsLetter.style.display = 'block';
    closeBTN.style.display = 'none';
    
})
newsLetterContent.addEventListener('click',(e) => {
    e.stopPropagation();
})
submitBTN.addEventListener('click',() =>{
    inputMail.style.display = 'none';
    h2Text.innerText = 'Vilen Dank!'
    submitBTN.style.display = 'none'
    closeBTN.style.display = 'block'
    // submitBTN.addEventListener('click', () =>{
        //     newsLetter.style.display = 'none';
        
        // })
    })
const exit =(e)=>{
    e.stopPropagation();
    newsLetter.style.display = 'none';
    h2Text.textContent = 'Newsletter'
    submitBTN.style.display = 'block'
    inputMail.style.display = 'block';
}
close.addEventListener('click', exit)
newsLetter.addEventListener('click', exit)
closeBTN.addEventListener('click',exit)

// close.addEventListener('click',() => {
//     newsLetter.style.display = 'none';
// })
// newsLetter.addEventListener('click' , () => {
//     newsLetter.style.display = 'none';   
// })