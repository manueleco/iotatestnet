const {composeAPI} = require('@iota/core');

const iota = composeAPI({
    provider: 'https://nodes.devnet.iota.org/'
})

iota.findTransactions({ tags: ['XIXUNISBLOCKCHAINS'] })
.then(hashes => {
    console.log(hashes);
})
.catch(err => {
    // handle errors here
})