    
    

  function con() {
    //put the selected currency int a variable called chosen
   chosen = document.forms[0].country.value;
    //Get the selected curreny rate using fetch and url.
    fetch('https://api.fixer.io/latest')
   .then((res)=>res.json())
   .then(function(data){
    
  //fetch('https://api.fixer.io/latest?symbols='+chosen)
    console.log(data);
    var output = data.rates
    var x = document.getElementById('amount');
    var y = x.value;
    var calAmount = y*output[chosen];
    document.getElementById('output').innerHTML = 'Rate:'+calAmount.toFixed(2);
    document.getElementById('date').innerHTML = 'Date:'+data.date;
    ;})
     
    
    }
  

   
   
 
  
