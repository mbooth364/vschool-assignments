function FormatCurrency (number)
{  
    
    console.log((number/100).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits:2 }));
   
}
FormatCurrency(1234567);

//function FormatCurrency (number)
//{  
//    
//    console.log`$${(number/100).toLocaleString({maximumFractionDigits:2 })}`;
//   
//}
//FormatCurrency(1234567);



