document.addEventListener('DOMContentLoaded',function(){
    
    const hours = document.getElementsByClassName("cell");
    console.log(hours);

    for (let index = 0; index < hours.length; index++) {
        const element = hours[index];
        console.log(element);
        element.addEventListener("click", function () {
            if (element.className.includes("select")) {
                element.className = "cell py-1";
            } else {
                element.className = "cell select py-1";
            }          
        });
    }   
		
});
    
    
