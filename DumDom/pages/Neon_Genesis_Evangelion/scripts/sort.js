function sort () {
    var toSort = document.getElementById('characters').children;
    // https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work
    toSort = Array.prototype.slice.call(toSort, 0);

}

sort()