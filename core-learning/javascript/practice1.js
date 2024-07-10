function scopeExample() {
  if (true) {
    let blockScoped = "I'm block-scoped";
    var functionScoped = "I'm function-scoped";
    const alsoBlockScoped = "I'm also block-scoped";
    console.log(blockScoped); // Works
  }
  console.log(functionScoped); // Works
  //console.log(blockScoped); // ReferenceError
}

//scopeExample();

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

add(4, 4, function showResult(result) {
  console.log(result);
});
