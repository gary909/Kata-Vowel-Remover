function shortcut (string) {
    var myStr = string.replace(/a|e|i|o|u/g,'');
    return myStr;
}

console.log(shortcut('hello')); // 'hll'
console.log(shortcut('how are you today?')); // 'hw r y tdy?'
console.log(shortcut('complain')); // 'cmpln'
console.log(shortcut('never')); // 'nvr'