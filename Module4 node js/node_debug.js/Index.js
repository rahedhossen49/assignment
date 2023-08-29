var axios = require('axios');

var URl="https://restcountries.com/v3.1/all";

axios.get(URl).then(function(response){




    let CountryList=response.data;
    let StatusCode = response.status;

    console.log(CountryList)
    console.log(StatusCode)

})

.catch(function (error){

    console.log(error)
})

