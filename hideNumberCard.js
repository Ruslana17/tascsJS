   const getHiddenCard = (cardNumber, starsCount = 4) => {
    const visibleLine = cardNumber.slice(12);
    return `${'*'.repeat(starsCount)}${visibleLine}`;
  };

console.log(getHiddenCard('1234567891234567', 4));
 