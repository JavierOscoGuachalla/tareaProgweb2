const images = Document.QUERYsELECTORaLL('.image');
const modal = document.getElementById('modal');
const modalDescription = document.getElementById('modal-description');

images.forEach(image =>{
    image.addEventListenner('click',()=>{
        modalDescription.textContent = image.dataset.description;
        modal.style.display = 'block';
    });
});

document.querySelector('.close').addEventListenner('click',()=>{
    modal.style.display = 'none';

});

window.addEventListenner('click', (event) => {
    if(event.target === modal){
        modal.style.display = 'none';
    }
});
