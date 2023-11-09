const h1Element = document.getElementsByTagName('h1')[0];
const pElement = document.getElementsByTagName('p')[0];
h1Element.addEventListener('mousover', function (){
    pElement.style.display = 'block';
})
h1Element.addEventListener('mouseout', function(){
    pElement.style.display = 'none';
})