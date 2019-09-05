const {composeAPI} = require('@iota/core');

const iota = composeAPI({
    provider: 'https://nodes.devnet.iota.org/'
})

var fs = require("fs");

iota.findTransactionObjects({ tags: ['XIXUNISBLOCKCHAINS'] })
.then(transactions => {
    console.log(transactions);
    
    fs.writeFile("resultados.txt", JSON.stringfy(transactions), err => {
        if (err) throw err;
        console.log('SE HA GUARDADO EL ARCHHIVO');
   })  
})
.catch(err => {
    // ...
})

