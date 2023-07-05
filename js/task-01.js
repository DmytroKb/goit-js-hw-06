const allListEl = document.querySelector('#categories') 

const listEl = allListEl.children  
console.log('Number of categories:', listEl.length); 

const list = [...listEl].forEach((element) => {   
    [...element.children].forEach((element) => { 
        if (element.tagName === "H2") { 
            console.log('Category:', element.textContent); 
        } if (element.tagName === "UL") { 
            console.log('Elements:', element.children.length) 
        }
    });
});