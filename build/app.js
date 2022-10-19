/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
;
/**
 * turns demo red
 */
function randomBackground() {
    if (document != null) {
        var body = document.getElementById("demo");
        var hex = "0123456789ABCDEF";
        var color = "";
        for (var i = 0; i < 6; i++)
            color += hex[Math.floor(Math.random() * 16)];
        if (parseInt(color) % 4 == 0)
            body.style.backgroundColor = "#f2f2e5";
        else
            body.style.backgroundColor = "#" + color;
    }
}
export { hello, randomBackground };
//# sourceMappingURL=app.js.map