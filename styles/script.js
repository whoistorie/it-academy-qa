function array(number) { 
  let arrayDiapazon = [2, 3, 4, 5] 
  for (let i = 0; i <= arrayDiapazon.length; i++) { 
    // console.log(arrayDiapazon[i]) 
    if (number % arrayDiapazon[i] == 0) { 
      console.log(arrayDiapazon[i]) 
    } 
  } 
} 

array(36) 
array(55) 
array(333)
array(36)