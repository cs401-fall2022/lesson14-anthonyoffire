/**
 * This returns the string hello
 * @returns the String hello
 */
function hello (): String {
    return "Hello World";
};

/**
 * turns demo red
 */
 function randomBackground() {
    if(document != null){
        let body = document.getElementById("demo");
        const hex = "0123456789ABCDEF";
        let color = "";
        for(let i=0; i<6; i++)
            color += hex[Math.floor(Math.random()*16)];
        if(parseInt(color) % 4 == 0)
            body.style.backgroundColor = "#f2f2e5";
        else
            body.style.backgroundColor = "#" + color;
    }    
}

export {hello, randomBackground}
