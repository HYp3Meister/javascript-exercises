const fibonacci = function(n) {
    if(n<0){
        return "OOPS"
    } else {
        let phi = (1 + Math.sqrt(5))/2;
        let asymp = Math.pow(phi, n) / Math.sqrt(5);
        return Math.round(asymp);
    }
};

// Do not edit below this line
module.exports = fibonacci;
