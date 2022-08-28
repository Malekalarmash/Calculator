let display = document.getElementById('display');

let buttons = Array.from (document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = ""; 
                break;
            case '←': 
                 if(display.innerText){
                    display.innerText = display.innerText.slice(0 ,-1); 
                 }
                
                break;
            case '=':
                 try{
                    display.innerText = eval(display.innerText);
                 }  catch {
                    display.innerText = 'ERROR!';
                 }
                
                break;
            case 'Sin':
                display.innerText = Math.sin(display.innerText);
                break;  
            case 'Cos':
                display.innerText = Math.cos(display.innerText);
                break;   
            case 'tan':
                display.innerText = Math.tan(display.innerText);
                break;
            case '√':
                display.innerText = Math.sqrt(display.innerText); 
            case 'ln':
                display.innerText = Math.log(display.innerText);                
            default:
                display.innerText += e.target.innerText;
        }
    });

}); 