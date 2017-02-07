function asyncMethod(message, cb) {
  setTimeout(function(){
    console.log(message);
    cb();
  }, 500)
}

asyncMethod('Open DB', function(){
  asyncMethod('Find User', function(){
    asyncMethod('Validate User', function(){
      asyncMethod('Do stuff', function(){})
    })
  })
})
