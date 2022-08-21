const oddishOrEvenish = number => {  
    let value = Array
    .from(String(number), num =>  Number(num))
    .reduce((accumulator, currentValue) => accumulator + currentValue);
    return (value%2 === 0) ? "even" : "odd";
  }