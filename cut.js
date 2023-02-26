const cut = (text, length) => {
    
    return `${text.slice(0, length)} ... -"We cut out some of your text"`; 
  
  };
  console.log(cut('I write something', 9));