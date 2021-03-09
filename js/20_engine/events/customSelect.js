document.querySelector('.custom-select-wrapper').addEventListener('click', function() {

    const selectBody = this.querySelector('.custom-select');

    selectBody.classList.toggle('open');

    if(selectBody.getAttribute('aria-expanded') === 'false'){
        selectBody.setAttribute('aria-expanded', 'true');
    }else{
        selectBody.setAttribute('aria-expanded', 'true');
    }
    
    
})

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {

       

        document.querySelector('.custom-hidden').classList.remove('custom-hidden');
        
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected','custom-hidden');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
            
          
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
        select.setAttribute('aria-expanded', 'false');
    }
});


/* Code migrant, 
redéfinir dans une classe qui permet de selectionnée,
l'élément que l'on souhaite transformer en select personalisé
*/