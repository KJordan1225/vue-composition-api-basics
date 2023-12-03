/* 
    directives       **custom
*/ 

export const vAutofocus = {
    mounted: (el) => {    
        
        el.focus;
            
        el.style.background = "yellow";
        el.style.color = "blue";
        el.style.borderColor = 'red';  
        el.style.borderWidth = '5px';   
    }
} 