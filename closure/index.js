let sum = add();
function  add(x) { 
    let res = 0;
    return function(x) { 
        res += x; 
        return res;
     } 
};