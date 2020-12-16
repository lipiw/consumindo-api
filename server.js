const express =  require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

// CORS usado para permitir q acessem a API
app.use(cors());

// Consumindo API pelo back end

app.get('/', async (req, res) =>{
    try{
    const {data} = await axios('https://jsonplaceholder.typicode.com/users');
    // console.log(response.data);
    return res.json(data);
    
    }catch(e){
        console.log(e);
    }

    

})

app.listen('4567');