console.log("Calculate with me!");
let screen = document.getElementById('screen');
let btnText = document.querySelectorAll('.btn');

// for(item of btnText){
//     item.addEventListner('click',(e)=>{
       
//     })
// }
let string;
for (item of btnText) {
    item.addEventListener('click', (e) => {
        console.log(e.target);
        btnText = e.target.innerText;
        

        if(btnText=="AC"){
           screen.value="";
        }
        else if (btnText=="CE") {
           screen.value = screen.value.substr(0,screen.value.length-1);
        }
        else if (btnText=="x") {
            btnText = "*";
            screen.value += btnText;
        }
         else if (btnText=="÷") {
            btnText = "/";
            screen.value += btnText;
        } 
        else if (btnText=="^") {
            btnText = "**";
            screen.value += btnText;
        } 
         else if (btnText=="=") {

            btnText = "/";
            screen.value = eval(screen.value);
        }         
         else if (btnText=="π") {
            screen.value += Math.PI;
           
        }
        else if (btnText=="e") {
            screen.value += Math.E;
           
        } 
        else if (btnText=="log") {
            screen.value += Math.log(screen.value);
           
        }        
        else if (btnText=="√") {
            string = screen.value;
            screen.value="";
            screen.value += Math.sqrt(string);
            string=" ";
        }        
         else if (btnText=="sin") {
            string = screen.value;
            screen.value="";
            screen.value += Math.sin(string);
            string=" ";
           
        }         
         else if (btnText=="cos") {
            string = screen.value;
            screen.value="";
            screen.value += Math.cos(string);
            string="";
           
        }         
         else if (btnText=="tan") {
            string = screen.value;
            screen.value="";
            screen.value += Math.tan(string);
            string="";
           
        }   
        else if (btnText=="x!") {
           let i,num,f;
           f=1;
           num=screen.value;
           for(i=1;i<=num;i++){
            f=f*i;
           }
           screen.value =f;
        }         

                

        else{
            screen.value += btnText;
        }
        
    })
}