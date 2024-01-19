function example() {
   
    if (true) {
      var z=10;
      let x = 20;   
      console.log(x);
      console.log(z);
      // This creates a new variable 'x' within the block.
    }
    console.log(z);
    //console.log(x) // Outputs 10
  }
   example();