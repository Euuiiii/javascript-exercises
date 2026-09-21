const sumAll = function(start, end) {
    if(start < 0 || end < 0) return "ERROR";

    if(start > end) [start, end] = [end, start];

    /*
        const temp = start;
        start = end;
        end = temp; 
    */


    for(let i = start + 1; i <= end; i++){
      start += i;
    }
    return start;
};


// Do not edit below this line
module.exports = sumAll;
