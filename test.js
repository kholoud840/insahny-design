var json = '{"result":true, "count":42}';

var obj = JSON.parse(json);


console.log(obj.count);

// expected output: 42

console.log(obj.result);

// expected output: true