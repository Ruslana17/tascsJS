const convertText = (text) => {
    if (text === '') {
      return '';
    }
  
    const reversable = text[0] !== text[0].toUpperCase();
    return reversable ? reverse(text) : text;
  };  