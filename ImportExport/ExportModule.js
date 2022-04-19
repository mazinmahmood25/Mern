function cToF(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

// console.log(cToF(33));



function fToC(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}

export {cToF,fToC};