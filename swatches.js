var swatches = document.querySelectorAll('.swatches span');
var root = document.querySelector(':root');

swatches.forEach(function(swatch){
   swatch.addEventListener('click', function(e){
       root.style.setProperty('--theme-color', e.target.style.background)
    })
});
