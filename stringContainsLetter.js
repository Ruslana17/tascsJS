const hasChar =(str, letter)=>{
    let i =0;
    
    while( i < str.length){
      if (str[i]===letter){
      return true;
      }
      i +=1;
    }
    return false;
    };