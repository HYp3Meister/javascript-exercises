const sumAll = function(nr1, nr2) {

if (typeof(nr1) === 'number' && typeof(nr2) === 'number' && nr1 > 0 && nr2 > 0){
    let counter = 0;

      if(nr1>nr2){
        [nr1, nr2] = [nr2, nr1];
      }
    
      for(i = nr1; i<=nr2; i++) {
        counter = counter + i;
      }
      
      return counter;
  } else {

    return 'ERROR'
  }
  
};

// Do not edit below this line
module.exports = sumAll;
