const axios = require('axios');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
// amount is the value used to print all the beers with the price hihger or equal to this amount
  readline.question('Enter the price of the beer? ', amount => {
   
    console.log(``);

 async function getUser() {
         
  try {
  
   //fetch the data from the source 
   const response = await axios.get('https://api.punkapi.com/v2/beers');
  
   // this loop will search for beer prices that are eqaual or higher than specified value in amount    
        for (let item=0; item < response.data.length; item++) {
 
    // if price of the beer is higher than specified amount, then the beer and the price will be printed
          if (response.data[item].abv>=amount) { 
  
            console.log(`${response.data[item].name} , ${response.data[item].abv}`); 
         
        }
  } 
  

  } catch (error) {
    console.error(error);
  }
}

getUser()

readline.close();

});
