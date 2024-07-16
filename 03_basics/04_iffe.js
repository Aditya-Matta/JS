// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named iffe
    console.log(`DB connected`);
})();

( (name) => {
    console.log(`DB connected 2 ${name}`);
} )("aditya")