let sum = add();
function  add(x) { 
    var res = 0;
    return function(x) { 
        res += x; 
        return res;
     } 
};